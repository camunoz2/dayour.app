import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Task from './Task'

interface Props {
  title: string
  index: string
}

export default function TimeOfDay({ title, index }: Props) {
  const { data: session } = useSession()

  const data = {
    user: session?.user?.email,
    listIndex: index,
  }

  useEffect(() => {
    const fetchData = async () => {
      const items = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((res) => console.log(res))
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <div className="flex-1 px-6">
      <p className="font-display uppercase">{title}</p>

      <Task index={index} />
    </div>
  )
}
