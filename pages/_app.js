import '../styles/index.css'
import "antd/dist/antd.css"


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





