import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Task from './Task'
import TaskContent from './TaskContent'
import { useQuery } from '@tanstack/react-query'

interface Props {
  title: string
  index: string
}

export default function TimeOfDay({ title, index }: Props) {
  const { data: session } = useSession()
  const [newTaskAdded, setNewTaskAdded] = useState(false)

  const listItems = useQuery([index], (): Promise<string[]> => {
    return fetch('/api/list', {
      method: 'POST',
      body: JSON.stringify({
        user: session?.user?.email,
        listIndex: index,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  })

  return (
    <div className="flex-1 px-6">
      <p className="font-display uppercase">{title}</p>
      <div className="grid grid-cols-1 gap-2">
        <Task
          index={index}
          setNewTaskAdded={setNewTaskAdded}
          newTaskAdded={newTaskAdded}
        />
        {listItems.isLoading ? (
          <p>loading...</p>
        ) : (
          listItems.data?.map((item, i) => {
            return (
              <TaskContent
                setNewTaskAdded={setNewTaskAdded}
                newTaskAdded={newTaskAdded}
                index={index}
                key={i}
                text={item}
              />
            )
          })
        )}
      </div>
    </div>
  )
}
