import { ReactNode } from 'react'
import ProfileInfo from './ProfileInfo'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-between">
      <header className="flex justify-between py-4">
        <ProfileInfo />
        <div className="flex gap-2">
          <div className="h-10">
            <img src="/github.svg" alt="" />
          </div>
          <p>Github</p>
        </div>
      </header>

      <main>{children}</main>

      <footer className="flex justify-center pt-20 pb-4">
        <a href="https://arjeldev.vercel.app/" target="_blank" rel="noopener">
          ArjelDev
        </a>
      </footer>
    </div>
  )
}

export default Layout
