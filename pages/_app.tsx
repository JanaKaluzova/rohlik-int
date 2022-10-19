import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import './app.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roll shopping cart</title>
        <meta name="description" content="Rohlik inteview app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap" rel="stylesheet" />
      </Head>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </>
  )
}

export default MyApp
