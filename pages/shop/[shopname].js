import Layout from '../../components/layout'
import PopularCategory from '../../components/main/popularcategory'
import UploadItem from '../../components/main/upload-item'
import UploadDetail from '../../components/main/upload-detail'
import TopCompany from '../../components/main/top-company'
import DailyDeals from '../../components/main/daily-deals'
import ItemComponent from '../../components/main/item-component'
import Filters from '../../components/main/filters'
import { BASE_URL } from '../../settings'
import axios from 'axios'
import Link from 'next/link'
import {Breadcrumb,Cascader,Typography,Tag} from "antd";
import {sortBy,reverse} from 'lodash'
import {useState,useEffect} from 'react'
import {LoadingOutlined,MenuOutlined} from '@ant-design/icons';
import remove from 'lodash'
import {fetcher} from '../../lib/ax-fetch'
import useSWRInfinite from "swr";






const Shop = ({title}) => {
const [searchData,setSearchData] = useState()
const [loading,setLoading] = useState()
const [filters,setFilters] = useState({})
const [url,setUrl] = useState({})
const [page,setPage] = useState(1)
const [menu,setMenu] = useState(true)


// search && console.log('search',Object.values(search))
const baseUrl = BASE_URL+"search_data?search="+title+Object.values(url).join("+")

const LIMIT = 25


const {data,error,mutate,size,setSize,isReachingEnd}=useSWRInfinite((index,previousPageData)=>{

if (previousPageData && previousPageData.length === 0) return null
if (!index || index===0) return BASE_URL+"search_data?search="+title+"&page="+page+"&limit="+LIMIT+Object.values(url).join('+');

return BASE_URL+"search_data?search="+title+"&page="+index+"&limit="+LIMIT
},fetcher)

if (!data) return <p className="flex justify-center"> <LoadingOutlined /> </p>;


const isMobile=(e)=>{
// console.log('width ',window.innerWidth <= 761)
  return window.innerWidth <= 761 
}



const addFilter=(type,filter)=>{


const data = {
[type]:filter
}

setFilters(data)

}


const removeFilter=(d,key)=>{

let editFilter= {...filters}
delete editFilter[key]

setFilters(editFilter)


let editUrl = {...url}

delete editUrl[key]

setUrl(editUrl)

const doneUrl =baseUrl+Object.values(editUrl).join("+")

 
mutate


}

const clearFilters=(e)=>{

  setUrl({})
  setFilters({})
  setPage(1)

mutate()
}

const addUrl=(newurl,type)=>{



const data={[type]:newurl}


setUrl(data)
  

const doneUrl =baseUrl+Object.values(data).join("+")
 console.log('changeurl '+doneUrl)

  return doneUrl
  mutate()


}


const handleSearch=(filterurl,filters="",type)=>{


  addFilter(type,filters)
addUrl(filterurl,type)


}


const Options =[ {
      value: 'na',
      label: <Typography.Text>Sort by: Newest Arrivals</Typography.Text>,
       
    },{
      value: 'pl2h',
      label: <Typography.Text>Price: Low to High</Typography.Text>,
       
    },{
      value: 'ph2l',
      label: <Typography.Text>Sort by: High to Low</Typography.Text>,
       
    },{
      value: 'sr',
      label: <Typography.Text>Sort by: Rating Count</Typography.Text>,
       
    },
    {
      value: 'r',
      label: <Typography.Text>Sort by: Rating</Typography.Text>,
       
    },{
      value: 'il',
      label: <Typography.Text>Sort by: View(s)</Typography.Text>,
       
    },]



const sortComp=(Options)=> <span>
    <Cascader className="text-black " style={{'color':'black'}}
    displayRender={(e,f)=>e } expandTrigger="hover" 
    placeholder="Sort by: Recommended" options={Options} 
    onChange={e=>Sort(e)} />

     </span>


const Sort=(sortFilter)=>{


var sortData = [];
const filterurl = "&sort="+sortFilter


addUrl(filterurl,'sort')

}

const resize=(e)=>{
  if(window.innerWidth > 761 ){
setMenu(true)

  }

}





  return (
  <Layout title={title} value={title}>
  
       
  <p className=" text-2xl flex justify-between py-0 m-0 mb-0 text-black px-5 center leading-tight w-full
    "  >
<p className="  w-full">
<Breadcrumb className="flex w-full" Seperator=" > ">
<Breadcrumb.Item className="underline  "  >
<Link href='/'>Home </Link>  </Breadcrumb.Item>

      <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-xl text-black"  >{title}
       </Breadcrumb.Item>
      <Breadcrumb.Item className="text-sm leading-tight md:text-base text-gray-900" >Page: {page}, ({Object.keys(data.res).length}) results </Breadcrumb.Item>

 
      </Breadcrumb> 

      </p>

  <span className="flex justify-end  flex-shrink ">
<MenuOutlined className="mt-1  flex text-xl sm:text-2xl cursor-pointer text-blue-600" onClick={e=>setMenu(!menu)} style={{
  'color':'blue'
}} />
</span> 
    </p>


<div className=" md:flex flex-inline mt-0 pt-5 pl-0 w-full bg-white pr-5"> 

<div className="md:w-1/4 w-full mt-0 pr-5 md:border-r-2 border-gray-300 " style={{
  'display':isMobile()? isMobile() && !menu ? 'block':'none' : menu ? 'block':'none'
}}> 


<Filters search={title} handleSearch={handleSearch} clearFilters={clearFilters}  />

</div>


<div className="  md:w-3/4 w-full ml-3 mt-6"> 


<div className="md:flex flex-inline mb-10">
<div className="w-full flex justify-end "> 

{Object.keys(filters).length > 0 &&
<div className="flex text-xl font-bold m-0 w-1/2 flex-wrap ">

Filters:

{Object.keys(filters).map((e,key)=>(

<Tag color="#108ee9" key={e}  closable={true} onClose={d=>removeFilter(d,e)} style={{
'padding':'2px','minWidth':'100px','textAlign':'center','margin':'3px',
  'fontSize':'.8em','minHeight':'30px'
}}> <span className="ml-1">{e}: {filters[e]}</span> </Tag>
  ))}

 </div>
 }



<div className="flex mr-3 w-1/2 mb-3 justify-end">
 {loading && <LoadingOutlined />}   {sortComp(Options)}
 </div>


 </div>

  </div>

 <div className="mr-5 md:mr-0" style={{'marginTop':'-39px'}}>
  <div className="w-full  flex-inline sm:flex
justify-left mb-2 mx-2 md:mx-3 sm:mx-0 md:mx-1   ">

{data.res.map(e=>(

<ItemComponent data={e} ke={e.title} />
  ))}
</div>


  <div className="mx-auto mt-10 mb-20 w-1/2 md:w-1/3">
          <button
            className="bg-red-600 border-solid 
            border-2 hover:bg-white border-red-600 text-white 
            hover:text-red-600 font-bold py-2 px-4 rounded-full w-full"
            disabled={!data.next}
            onClick={e=>setPage(page+1)}
          >
            {data.next ?'Load More Product': 'No Product (0)'}
          </button>

        </div>
 </div>

</div>


</div>





 



  </Layout>
)
}


export default Shop








export const getServerSideProps = async({query})=>{




  return {
    props:{
      title:query.shopname
    }
  }


}