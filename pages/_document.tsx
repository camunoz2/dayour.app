import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="es" className="font-body text-gray-800">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/jbl1jxi.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
