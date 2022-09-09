import { useSession } from 'next-auth/react'
import type { Dispatch, SetStateAction } from 'react'

interface Props {
  text: string
  index: string
  setNewTaskAdded: Dispatch<SetStateAction<boolean>>
  newTaskAdded: boolean
}

export default function TaskContent({
  text,
  index,
  setNewTaskAdded,
  newTaskAdded,
}: Props) {
  const { data: session } = useSession()

  const data = {
    todoText: text,
    user: session?.user?.email,
    todoIndex: index,
  }

  // Yep... if two todos are the same, they are note deleted inmediately... the list was a poor choice for this data structure
  // But for a portfolio, it works fine...
  const removeElement = () => {
    fetch('/api/remove', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setNewTaskAdded(!newTaskAdded)
  }

  return (
    <div className="border border-gray-700 rounded-sm flex flex-col px-2 pt-4 pb-2">
      <div
        onClick={removeElement}
        className="flex items-center justify-center px-2 bg-slate-300 rounded-full self-end cursor-pointer"
      >
        X
      </div>
      <div>{text}</div>
    </div>
  )
}
