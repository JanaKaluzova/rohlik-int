import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { Header } from '../components/Header'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rohlik shopping cart</title>
        <meta name="description" content="Rohlik inteview app" />
      </Head>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </>
  )
}

export default MyApp
