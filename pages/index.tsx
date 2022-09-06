import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'

import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Dayour // Login</title>
        <meta
          name="description"
          content="Maneja tus momentos del dia, se productivo!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className='flex flex-col items-center'>
          <h2 className='text-4xl'>Hi! Do you need to login</h2>
          {!session ? (
            <>
              <button className='bg-gray-400 border-xl shadow-xl p-4 rounded-xl' onClick={() => signIn()}>LogIn</button>
            </>
          ) : (
            <>
              <button onClick={() => signOut()}>LogOut</button>
              <p>Hi {session.user?.name}</p>
            </>
          )}
        </div>
      </Layout>
    </>
  )
}

export default Home
