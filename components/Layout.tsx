import { ReactNode } from 'react'
import Logo from './Logo'
import ProfileInfo from './ProfileInfo'
import Separator from './Separator'

interface Props {
  children: ReactNode
} 

const Layout = ({children}: Props) => {

  return(
    <div className='container mx-auto px-4'>
      <header className='flex flex-row justify-between mt-10 mb-4'>
        <Logo />
        <ProfileInfo />
      </header>
      <Separator />
      <main>
        {children}
      </main>

      <footer className='flex justify-center'>
        <h4>Dayour App / Made by arjel.dev</h4>
      </footer>
    </div>
  )
}

export default Layout
