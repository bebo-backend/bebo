import Layout from '../components/layout'
import PopularCategory from '../components/main/popularcategory'
import UploadItem from '../components/main/upload-item'
import UploadDetail from '../components/main/upload-detail'
import TopCompany from '../components/main/top-company'
import DailyDeals from '../components/main/daily-deals'
import { BASE_URL } from '../settings'
import axios from 'axios'
import {fetcher} from '../lib/ax-fetch'
import useSWRInfinite from "swr";
import {useState} from 'react'





const Home = ({dailyDeals}) => {
const LIMIT = 25
const [page,setPage] = useState(1)
const {data,error,mutate,size,setSize,isReachingEnd}=useSWRInfinite((index,previousPageData)=>{

if (previousPageData && previousPageData.length === 0) {return null}
if (!index || index===0) return BASE_URL+'popular-shop?page='+page+"&limit="+LIMIT;

return BASE_URL+'popular-shop?page='+index+"&limit="+LIMIT
},fetcher)

if (!data) return null;



return (
  <Layout title="Top Shops">
  
    {data &&   <div className="md:mb-20" >
 
   <TopCompany data={data.res} />
     <div className="mx-auto mt-10 mb-20 w-1/2 md:w-1/3">
          <button
            className="bg-red-600 border-solid border-2 hover:bg-white border-red-600 text-white hover:text-red-600 font-bold py-2 px-4 rounded-full w-full"
            disabled={!data.next}
            onClick={e=>setPage(page+1)}
          >
            {data.next ?'Load More Product': 'No more Product'}
          </button>

        </div>

    </div>    }



 <DailyDeals data={dailyDeals} />

  </Layout>
)
}

export default Home

export const getStaticProps = async()=>{



// const  response = await axios.get(BASE_URL+'popular-shop')
const  dailydeals = await axios.get(BASE_URL+'mainsearch')



  return {
    props:{
      // topCompany:response.data ?response.data:[],
    
      dailyDeals:dailydeals.data ? dailydeals.data:[]
    },
    revalidate:1,
  }


}
