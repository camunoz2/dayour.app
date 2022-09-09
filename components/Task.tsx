import React, { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { useSession } from 'next-auth/react'
import TaskInput from './TaskInput'

interface Props {
  index: string
  setNewTaskAdded: Dispatch<SetStateAction<boolean>>
  newTaskAdded: boolean
}

export default function Task({ index, setNewTaskAdded, newTaskAdded }: Props) {
  const [todo, setTodo] = useState('')
  const { data: session } = useSession()

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const addTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = {
      todoText: todo,
      user: session?.user?.email,
      todoIndex: index,
    }
    await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setTodo('')
    setNewTaskAdded(!newTaskAdded)
  }

  const TIME_OF_DAY = ['morning', 'afternoon', 'evening', 'night']

  const taskListExamples = [
    '...a good project?',
    '...little rest?',
    '...play some League?',
    '...cofee maybe?',
    '...obliterate the empire?',
    '...check your email?',
    '...remember the past?',
    '...locate a good carpenter?',
    '...buy groceries?',
    '...watch a movie?',
  ]

  return (
    <div className="border border-gray-700 rounded-sm flex flex-col px-2 pt-4 pb-2">
      <form onSubmit={addTodo}>
        {!session ? (
          'You must be signed In'
        ) : (
          <>
            <label htmlFor="task" className="block mb-2 text-sm text-gray-900">
              What are we gonna do in the {TIME_OF_DAY[parseInt(index)]}?
            </label>
            <TaskInput
              changeHandler={changeHandler}
              taskListExamples={taskListExamples}
              todo={todo}
            />
          </>
        )}
      </form>
    </div>
  )
}
