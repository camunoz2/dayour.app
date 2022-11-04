import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import DateComponent from '../components/DateComponent'
import Layout from '../components/Layout'
import Separator from '../components/Separator'
import TimeOfDay from '../components/TimeOfDay'
import VerticalDivider from '../components/VerticalDivider'
import { useIsMutating, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export interface DateObject {
  currentDay: number
  currentMonth: string
}

export default function Dashboard() {
  const { status } = useSession()
  const { rive, RiveComponent } = useRive({
    src: '/mole.riv',
    autoplay: true,
    stateMachines: 'state_machine',
  })
  const riveStateMachine = useStateMachineInput(
    rive,
    'state_machine',
    'addTask'
  )

  const loading = status === 'loading'
  const router = useRouter()

  const isMutating = useIsMutating()

  if (isMutating > 0 && riveStateMachine) {
    riveStateMachine.fire()
  }

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
        <meta name="description" content="Be productive! all day long 👌" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <DateComponent />
        <Separator />
        <div className="relative flex flex-col md:flex-row justify-between pt-6 bg-pinky">
          <RiveComponent className="w-64 h-64 absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:right-36 top-0 -translate-y-36 -z-10" />
          <TimeOfDay index="0" title="morning" />
          <VerticalDivider />
          <TimeOfDay index="1" title="afternoon" />
          <VerticalDivider />

          <TimeOfDay index="2" title="evening" />
          <VerticalDivider />

          <TimeOfDay index="3" title="night" />
        </div>
      </Layout>
    </>
  )
}
