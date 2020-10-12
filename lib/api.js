import axios from 'axios'
import serialize from 'serialize-javascript'

export const getData=  async (url)=>{

   const res = await axios.get(url)
   console.log('top shop '+ Object.keys(res.data))
   return JSON.stringify(res.data)
}