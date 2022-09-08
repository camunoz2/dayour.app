import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

export default function Task() {
  const [todo, setTodo] = useState('')
  const {data: session} = useSession()

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const addTodo = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      fetch(`/api/add?todo=${todo}`).then(r => r.json)
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
        <input
          type="text"
          onChange={changeHandler}
          value={todo}
          className="my-4"
          placeholder="Add your task"
        ></input>
      </form>
      <div className="flex justify-between">
        <div>back</div>
        <div>next</div>
      </div>
    </div>
  )
}
