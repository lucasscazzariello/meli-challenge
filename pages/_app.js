import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App({ Component, pageProps }) {
  library.add(faSearch)
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />
}

export default App
