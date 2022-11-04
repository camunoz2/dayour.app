import { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

export default function NextDocument<Props>() {
  {
    return (
      <Html lang="es" className="font-body text-dark">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/jbl1jxi.css" />
        </Head>
        <body className="bg-pinky">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
