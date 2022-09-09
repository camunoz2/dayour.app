import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

interface Props {
  index: string
}

export default function Task({ index }: Props) {
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
  }

  const loadTodos = () => {
    fetch('/api/list')
      .then((r) => r.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="border border-gray-700 rounded-sm flex flex-col px-2 pt-4 pb-2">
      <div className="self-end">X</div>
      <form onSubmit={addTodo}>
        {!session ? (
          'You must be signed In'
        ) : (
          <input
            type="text"
            onChange={changeHandler}
            value={todo}
            className="my-4"
            placeholder="Add your task"
          />
        )}
      </form>
      <div className="flex justify-between">
        <div>back</div>
        <div>next</div>
      </div>
    </div>
  )
}
