import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel='shortcut icon' href='/images/favicon.png' type='image/png' sizes='256x256' />
        <meta name='author' content='Victor Bueno' />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="PetShop" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PetShop" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
