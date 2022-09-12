import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import DateComponent from '../components/DateComponent'
import Layout from '../components/Layout'
import PendingTasks from '../components/PendingTasks'
import Separator from '../components/Separator'
import TimeOfDayContainer from '../components/TimeOfDayContainer'

export interface DateObject {
  currentDay: number
  currentMonth: string
}

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
