import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'

import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dayour // Login</title>
        <meta
          name="Make productivity, a first class citizen"
          content="Dayour is a Todo list app with a redis backend and nextjs front-end"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-9xl font-black">DAYOUR</h1>
        <p className="text-2xl">
          Unleash the power of &apos;Productivity&apos;
        </p>
        <div className="mt-12">
          <p className="text-bold text-xl">
            Log in with{' '}
            <span
              onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
              className="bg-red-900 text-orange-100 px-4 py-2 rounded-md cursor-pointer hover:bg-red-500"
            >
              Github
            </span>{' '}
            or{' '}
            <span
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              className="bg-red-900 text-orange-100 px-4 py-2 rounded-md cursor-pointer hover:bg-red-500"
            >
              Google
            </span>
          </p>
        </div>
      </Layout>
    </>
  )
}

export default Home
