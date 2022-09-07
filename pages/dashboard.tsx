import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Head from "next/head";

import DateComponent from "../components/DateComponent";
import Layout from "../components/Layout";
import PendingTasks from "../components/PendingTasks";
import Separator from "../components/Separator";
import TimeOfDayContainer from "../components/TimeOfDayContainer";

export default function Dashboard() {

  const {data: session, status} = useSession()
  const loading = status === 'loading'
  const [content , setContent ] = useState()
  const router = useRouter()


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/restricted')
      const json = await res.json()
      if (json.content) { setContent(json.content) }
    }
    fetchData()

    if (status === 'unauthenticated') {
      router.push('/')
    }

  }, [session])


  // Not displaying anything until loading is complete
  if (typeof window !== undefined && loading) return null

  if (!session) return <Layout>Acceso denegado</Layout>

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
        <p>{content || "Not found!"}</p>
        <DateComponent />
        <PendingTasks />

        <Separator />

        <TimeOfDayContainer />
      </Layout>
    </>
  )
}