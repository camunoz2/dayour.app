import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'


import DateComponent from '../components/DateComponent'
import Layout from '../components/Layout'
import PendingTasks from '../components/PendingTasks'
import Separator from '../components/Separator'
import TimeOfDayContainer from '../components/TimeOfDayContainer'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status])

  // Not displaying anything until loading is complete
  if (typeof window !== undefined && loading) return null

  return (
    // TODO: Fix multiple session calls https://github.com/nextauthjs/next-auth/issues/487
    <>
      <Head>
        <title>Dayour // Calendar</title>
        <meta
          name="description"
          content="Maneja tus momentos del dia, se productivo!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <DateComponent />
        <PendingTasks />
        <Separator />
        <TimeOfDayContainer />
      </Layout>
    </>
  )
}
