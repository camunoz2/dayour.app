import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import ResponsiveFixed from '../components/ResponsiveTW'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="es" className="font-body text-gray-700">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/jbl1jxi.css" />
        </Head>
        <body>
          <ResponsiveFixed />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
