import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar';

function App({ Component, pageProps }) {
  const [textTitle, setTextTitle] = useState('')
  const router = useRouter()

  library.add(faSearch)

  useEffect(() => {
    router.query && setTextTitle(router.query.search)
  }, [router.query.search])

  // Creo Layout para mantener la SearchBar independiente a los components
  return (
    <Layout>
      <Head>
        <title>{textTitle ? `${textTitle} |` : ''} MercadoLibre</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <SearchBar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default App
