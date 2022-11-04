import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'

import Head from 'next/head'
import Layout from '../components/Layout'
import LoginButton from '../components/LoginButton'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dayour // Login</title>
        <meta
          name="description"
          content="Dayour is a Todo list app with a redis backend and nextjs frontend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="border border-gray-700 rounded-xl py-10 w-full">
            <h2 className="text-center text-xl mb-4">Log In with...</h2>
            <div className="flex flex-col items-center gap-2">
              <LoginButton
                handleClick={() =>
                  signIn('github', { callbackUrl: '/dashboard' })
                }
              >
                Github
              </LoginButton>
              <p>or</p>
              <LoginButton
                handleClick={() =>
                  signIn('google', { callbackUrl: '/dashboard' })
                }
              >
                Google
              </LoginButton>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
