interface Props {
  text: string
}

export default function TaskContent({ text }: Props) {
  return (
    <div className="border border-gray-700 rounded-sm flex flex-col px-2 pt-4 pb-2">
      <div className="self-end">X</div>
      <div>{text}</div>
    </div>
  )
}
