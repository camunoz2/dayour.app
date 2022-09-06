import Head from "next/head";

import DateComponent from "../components/DateComponent";
import Layout from "../components/Layout";
import PendingTasks from "../components/PendingTasks";
import Separator from "../components/Separator";
import TimeOfDayContainer from "../components/TimeOfDayContainer";

export default function Dashboard() {
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
