import type { NextPage } from 'next'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import LoginButton from '../components/LoginButton'

const Home: NextPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status])

  return (
    <>
      <Head>
        <title>Dayour // Login</title>
        <meta
          name="description"
          content="You are obligated to be productive...OR..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="border border-gray-700 rounded-xl py-10 w-full">
            <h2 className="text-center text-xl mb-4">
              Log In with...
            </h2>
            <div className='flex flex-col items-center gap-2'>
              <LoginButton handleClick={() => signIn('github')} >Github</LoginButton>
              <p>or</p>
              <LoginButton handleClick={() => signIn('google')} >Google</LoginButton>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
