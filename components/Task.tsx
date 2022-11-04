import React, { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { useSession } from 'next-auth/react'
import TaskInput from './TaskInput'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Props {
  index: string
  setNewTaskAdded: Dispatch<SetStateAction<boolean>>
  newTaskAdded: boolean
}

export default function Task({ index }: Props) {
  const [todo, setTodo] = useState('')
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([index])
    },
  })

  function addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    //Clear input
    setTodo('')

    return fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todoText: todo,
        user: session?.user?.email,
        todoIndex: index,
      }),
    })
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
    <div className="rounded-md flex flex-col px-2 pt-4 pb-2">
      <form onSubmit={addMutation.mutate}>
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
