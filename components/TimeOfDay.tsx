import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Task from './Task'
import TaskContent from './TaskContent'

interface Props {
  title: string
  index: string
}

export default function TimeOfDay({ title, index }: Props) {
  const { data: session } = useSession()
  const [listItems, setListItems] = useState([''])
  const [newTaskAdded, setNewTaskAdded] = useState(false)

  const data = {
    user: session?.user?.email,
    listIndex: index,
  }

  useEffect(() => {
    
    const fetchData = async () => {
      const items = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((res) => setListItems(res))
    }

    fetchData().catch(console.error)
  }, [newTaskAdded])

  return (
    <div className="flex-1 px-6">
      <p className="font-display uppercase">{title}</p>
      <div className="grid grid-cols-1 gap-2">
        <Task
          index={index}
          setNewTaskAdded={setNewTaskAdded}
          newTaskAdded={newTaskAdded}
        />
        {listItems.length > 0
          ? listItems.map((item, i) => {
              return <TaskContent key={i} text={item} />
            })
          : ''}
      </div>
    </div>
  )
}
