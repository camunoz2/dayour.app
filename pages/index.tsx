import { Canvas, useLoader, useFrame, PrimitiveProps } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import type { NextPage } from 'next'
import { PresentationControls } from '@react-three/drei'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Suspense, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

function CustomScene() {
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
  })
  const model = useLoader(GLTFLoader, '/model.gltf')

  return (
    <Suspense fallback={null}>
      <primitive object={model.scene} />
    </Suspense>
  )
}

const Home: NextPage = () => {
  const { status } = useSession()
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
          name="Make productivity, a first class citizen"
          content="Dayour is a Todo list app with a redis backend and nextjs front-end"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex">
          <div>
            <h1 className="text-8xl md:text-[170px] leading-tight font-black">
              DAYOUR
            </h1>
            <p className="text-xl md:text-3xl">
              Unleash the power of &apos;Productivity&apos;
            </p>
            <div className="mt-12">
              <p className="text-bold text-xl">
                Log in with{' '}
                <span
                  onClick={() =>
                    signIn('github', { callbackUrl: '/dashboard' })
                  }
                  className="bg-red-900 text-orange-100 px-4 py-2 rounded-md cursor-pointer hover:bg-red-500"
                >
                  Github
                </span>{' '}
                or{' '}
                <span
                  onClick={() =>
                    signIn('google', { callbackUrl: '/dashboard' })
                  }
                  className="bg-red-900 text-orange-100 px-4 py-2 rounded-md cursor-pointer hover:bg-red-500"
                >
                  Google
                </span>
              </p>
            </div>
          </div>
          <div className="absolute -translate-x-1/2 left-1/2 lg:left-1/2 lg:translate-x-0 top-16 lg:top-1/4  h-60 w-60 lg:h-[450px] lg:w-[450px]   mix-blend-luminosity">
            <Canvas dpr={[1, 2]} camera={{ fov: 30, position: [0, 0, 8] }}>
              <ambientLight />
              <PresentationControls
                global
                zoom={0.8}
                rotation={[0, -Math.PI / 4, -Math.PI / 4]}
                polar={[0, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              >
                <CustomScene />
              </PresentationControls>
            </Canvas>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
