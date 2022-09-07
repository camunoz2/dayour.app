import type { ReactNode } from 'react'
import type { NextComponentType } from 'next'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'

import '../styles/globals.css'

interface Props {
  children: ReactNode
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp