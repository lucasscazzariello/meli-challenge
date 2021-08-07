import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/SearchBar';

function App({ Component, pageProps }) {
  library.add(faSearch)
  return (
    <Layout>
      <header>
        <SearchBar />
      </header>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
