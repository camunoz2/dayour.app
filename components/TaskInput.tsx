interface Props {
  changeHandler: React.ChangeEventHandler<HTMLInputElement>
  todo: string
  taskListExamples: string[]
}

export default function TaskInput({
  changeHandler,
  todo,
  taskListExamples,
}: Props) {
  return (
    <input
      type="text"
      onChange={changeHandler}
      value={todo}
      placeholder={taskListExamples[Math.round(Math.random() * 9)]}
      id="task"
      className="my-4 bg-white text-dark text-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      required
    />
  )
}
