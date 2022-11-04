import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import type { Dispatch, SetStateAction } from 'react'
import SvgClose from './SvgClose'

interface Props {
  text: string
  index: string
  setNewTaskAdded: Dispatch<SetStateAction<boolean>>
  newTaskAdded: boolean
}

export default function TaskContent({ text, index }: Props) {
  const queryClient = useQueryClient()
  const { data: session } = useSession()

  const itemMutation = useMutation(removeElement, {
    onSuccess: () => {
      return queryClient.invalidateQueries([index])
    },
  })

  function removeElement() {
    return fetch('/api/remove', {
      method: 'POST',
      body: JSON.stringify({
        user: session?.user?.email,
        todoIndex: index,
        todoText: text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const rotate = {
    transform: `rotateZ(${Math.random() * 2}deg)`,
  }

  return (
    <div
      style={rotate}
      className="bg-green rounded-lg flex flex-col px-4 pt-4 pb-3 transition-all"
    >
      <div
        onClick={() => itemMutation.mutate()}
        className="self-end cursor-pointer"
      >
        <SvgClose />
      </div>
      <div>{text}</div>
    </div>
  )
}
