import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import generateStore from '../redux/store'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar';

function App({ Component, pageProps }) {
  const store = generateStore()
  const [textTitle, setTextTitle] = useState('')
  const router = useRouter()

  library.add(faSearch)

  // Cambio el nombre del title según lo que busquemos
  useEffect(() => {
    router.query && setTextTitle(router.query.search)
  }, [router.query.search])

  // Agrego el provider para el store
  // Creo Layout para mantener la SearchBar independiente a los components
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
