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
import {LoadingOutlined} from '@ant-design/icons';
import {Breadcrumb} from "antd";





const Home = () => {
const LIMIT = 44
const [page,setPage] = useState(1)
const {data,error,mutate,size,setSize,isReachingEnd}=useSWRInfinite((index,previousPageData)=>{

if (previousPageData && previousPageData.length === 0) {return null}
if (!index || index===0) return BASE_URL+'popular-shop?page='+page+"&limit="+LIMIT;

return BASE_URL+'popular-shop?page='+index+"&limit="+LIMIT
},fetcher)

if (!data){return <Layout title="Top teba sellers">

   

     }



  </Layout>
}


return (
  <Layout title="Top teba sellers">

  <p className=" text-lg flex justify-between pt-3 pb-3 sm:pb-0 m-0 mb-0  px-3 sm:px-5 center leading-tight w-full
    text-white" style={{'backgroundColor':'#01718f'}} >
<p className="  w-full">
<Breadcrumb className="flex w-full" >

 <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-white"  >Top Ads
       </Breadcrumb.Item>

   
      <Breadcrumb.Item className="text-sm leading-tight md:text-md text-white" >Page: {page}, ( {Object.keys(data.res).length} products found ) </Breadcrumb.Item>

 
      </Breadcrumb> 

      </p>


    </p>
  
    {data &&   <div className="md:mb-20" >
 
   <TopCompany data={data.res} href={false} />
   
 <div className="mx-auto mt-2 mb-4 w-full flex justify-center">

    
          <a style={{'border':'1px solid'}}
            className=" hover:bg-blue-500
            hover:text-white font-bold py-2 px-8 rounded"

             disabled={!data.next}
            onClick={e=>setPage(page+1)}
       
          >
              More product
          </a>
  
        </div>

    </div>    }



  </Layout>
)
}

export default Home

// export const getStaticProps = async()=>{



// // const  response = await axios.get(BASE_URL+'popular-shop')
// // const  dailydeals = await axios.get(BASE_URL+'mainsearch')



//   return {
//     props:{
//       // topCompany:response.data ?response.data:[],
    
//       dailyDeals:[]
//     },
//     revalidate:1,
//   }


// }
