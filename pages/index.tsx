import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Separator from '../components/Separator'
import Date from '../components/Date'
import PendingTasks from '../components/PendingTasks'
import TimeOfDayContainer from '../components/TimeOfDayContainer'

const Home: NextPage = () => {
  return (
    // TODO: This empty <></> was a div before.. maybe is nothing
    <>
      <Head>
        <title>Dayour</title>
        <meta
          name="description"
          content="Maneja tus momentos del dia, se productivo!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <Date />

        <PendingTasks />
        
        <Separator />

        <TimeOfDayContainer />
      </Layout>
    </>
  )
}

export default Home
