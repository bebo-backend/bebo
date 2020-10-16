import '../styles/index.css'
import "antd/dist/antd.css"

// <<<<<<< HEAD

// =======
// >>>>>>> b20e1ccc645285adef81377c1059ee77a3b59602
import { SWRConfig } from 'swr'
import {getFetch} from '../lib/ax-fetch'



export default function App({ Component, pageProps }) {


  return (

    <SWRConfig
      value={{
        fetcher: getFetch,
        onError: (err) => {
          console.error(err)
        },
      }}>
      <Component {...pageProps} />
    </SWRConfig>

   
  )
}





