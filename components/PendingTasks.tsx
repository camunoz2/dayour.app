export default function PendingTasks() {
  return (
    <div className="my-2">
      <p className="text-sm">Pending</p>
      <div className="flex">
        <div className="w-6 h-6 bg-white border border-gray-700 rounded-full" />
        <div className="w-6 h-6 bg-white border border-gray-700 rounded-full -ml-3" />
        <div className="w-6 h-6 bg-white border border-gray-700 rounded-full -ml-3" />
      </div>
    </div>
  )
}
