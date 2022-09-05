import Task from './Task'

interface Props {
  title: String
}

export default function TimeOfDay({ title }: Props) {
  return (
    <div className="flex-1 px-6">
      <p className="font-display uppercase">{title}</p>
      <Task />
    </div>
  )
}
