export default function Task() {
  return (
    <div className="border border-gray-700 rounded-sm flex flex-col px-2 pt-4 pb-2">
      <div className="self-end">X</div>
      <p className="my-4">This is a task</p>
      <div className="flex justify-between">
        <div>back</div>
        <div>next</div>
      </div>
    </div>
  )
}
