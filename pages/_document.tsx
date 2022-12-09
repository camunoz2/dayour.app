import { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

export default function NextDocument<Props>() {
  {
    return (
      <Html lang="es" className="font-display text-emerald-900">
        <Head />
        <body className="bg-orange-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
