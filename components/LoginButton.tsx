import React from 'react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function LoginButton({ children, handleClick }: Props) {
  return <button className='w-52 px-10 py-4 border border-gray-700 text-xl' onClick={handleClick}>{children}</button>
}
