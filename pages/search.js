import Layout from '../components/layout'
import PopularCategory from '../components/main/popularcategory'
import UploadItem from '../components/main/upload-item'
import UploadDetail from '../components/main/upload-detail'
import TopCompany from '../components/main/top-company'
import DailyDeals from '../components/main/daily-deals'
import ItemComponent from '../components/main/item-component'
import Filters from '../components/main/filters'
import { BASE_URL } from '../settings'
import axios from 'axios'
import Link from 'next/link'
import {Breadcrumb,Cascader,Typography,Tag} from "antd";
import {sortBy,reverse} from 'lodash'
import {useState,useEffect} from 'react'
import {LoadingOutlined,MenuOutlined} from '@ant-design/icons';
import remove from 'lodash'
import {fetcher} from '../lib/ax-fetch'
import useSWRInfinite from "swr";






const Home = ({search="All",tags=''}) => {
const [searchData,setSearchData] = useState()
const [loading,setLoading] = useState()
const [filters,setFilters] = useState({})
const [url,setUrl] = useState({})
const [page,setPage] = useState(1)
const [menu,setMenu] = useState(true)


// search && console.log('search',Object.values(search))
const baseUrl = BASE_URL+"search_data?search="+search+Object.values(url).join("+")

const LIMIT = 44


const {data,error,mutate,size,setSize,isReachingEnd}=useSWRInfinite((index,previousPageData)=>{

if (previousPageData && previousPageData.length === 0) return null
if (!index || index===0) return BASE_URL+"search_data?search="+search+"&page="+page+"&limit="+LIMIT+"&tags="+tags+Object.values(url).join('+');

return BASE_URL+"search_data?search="+search+"&page="+index+"&limit="+LIMIT+"&tags="+tags
},fetcher)

if (!data) return <p className="flex justify-center items-center h-screen w-sreen text-2xl text-pink-600"> <LoadingOutlined /> </p>



const isMobile=(e)=>{
// console.log('width ',window.innerWidth <= 761)
  return window.innerWidth <= 761 
}

// useEffect(()=>{

//    data.res && generateData()
//    return ()=>{
    
//     ;
//    }



// },[search])

// const generateData= async()=>{


// window && setMenu(window.innerWidth <= 761  ? false:true)
// }



const addFilter=(type,filter)=>{


// let editFilter= {...filters}

// delete editFilter[type]

// const data = {...editFilter,
// [type]:filter
// }

const data = {
[type]:filter
}

setFilters(data)

}


// const paginateHandler=(page)=>{

// setPage(page)
// const doneUrl =baseUrl+Object.values(url).join("+")

//  axios.get(doneUrl).then(res=>{

//   setSearchData(res.data)
//   setLoading(false)


// })

// }


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

//  axios.get(baseUrl).then(res=>{

//   setSearchData(res.data)
//   setLoading(false)


// })
mutate()
}

const addUrl=(newurl,type)=>{

// // const data = [...url,newurl]
// let editUrl = {...url}

// delete editUrl[type]


// const data = {...editUrl,
// [type]:newurl
// }

const data={[type]:newurl}


setUrl(data)
  

const doneUrl =baseUrl+Object.values(data).join("+")
 console.log('changeurl '+doneUrl)

  return doneUrl
  mutate()


}


const handleSearch=(filterurl,filters="",type)=>{


  // const filterurl = "search_data?search="+this.props.search+"&acquisition="+e.target.value

  // setLoading(true)

  // console.log('filter '+Object.keys(filters))
  addFilter(type,filters)
addUrl(filterurl,type)

//  axios.get(addUrl(filterurl,type)).then(res=>{

//   setSearchData(res.data)
//   setLoading(false)


// })




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

// if(sortFilter=='na'){

//       sortData= reverse(sortBy(data.res,['id']))

  
//   } else if (sortFilter=='pl2h'){

//      sortData= sortBy(data.res,['price','from_price'])
//   } 
//   else if (sortFilter=='ph2l'){

//      sortData= reverse(sortBy(data.res,['price','from_price']))
//   }

//   else if (sortFilter=='sr'){

//      sortData= reverse(sortBy(data.res,[o=>o.submit_user.rate_count]))
//   }
// else if (sortFilter=='r'){

//      sortData= reverse(sortBy(data.res,[o=>o.submit_user.rate]))
//   }

//   else if (sortFilter=='il'){

//      sortData= reverse(sortBy(data.res,'likes'))
//   }


// setSearchData(sortData)
}

const resize=(e)=>{
  if(window.innerWidth > 761 ){
setMenu(true)

  }

}





  return (
  <Layout title={search ? "You search for "+search:"You search for All"} value={search}>
  
       
   <p className=" text-lg flex justify-between pt-3 pb-3 sm:pb-0 m-0 mb-0  px-3 sm:px-5 center leading-tight w-full
    text-white" style={{'backgroundColor':'#01718f'}} >
<p className="  w-full">
<Breadcrumb className="flex w-full" Seperator=" > ">


      <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-white"  >{search}
       </Breadcrumb.Item>
      <Breadcrumb.Item className="text-sm leading-tight md:text-md text-white" >Page: {page}, ({Object.keys(data.res).length}) products found </Breadcrumb.Item>

 
      </Breadcrumb> 

      </p>

  <span className="flex justify-end  flex-shrink ">
<MenuOutlined className="mt-1  flex text-xl sm:text-2xl cursor-pointer text-white " onClick={e=>setMenu(!menu)} style={{
  'color':'white'
}} />
</span> 
    </p>


<div className="mx-3 shadow-2xl rounded-lg">

<div className=" md:flex flex-inline mt-0 py-5 pl-0 w-full bg-white pr-5  "> 

<div className="md:w-1/4 w-full mt-0 pr-5 md:border-r-2 border-gray-300 " style={{
  'display':isMobile()? isMobile() && !menu ? 'block':'none' : menu ? 'block':'none'
}}> 


<Filters search={search} handleSearch={handleSearch} clearFilters={clearFilters}  />

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



<div className="flex mr-3 w-full mb-3 justify-end">
 {loading && <LoadingOutlined />}   {sortComp(Options)}
 </div>


 </div>

  </div>

 <div className="mr-5 md:mr-0 w-full " style={{'marginTop':'-39px'}}>
  <div className="w-full  block sm:inline-block
justify-left my-3  md:mx-3 sm:mx-0 md:mx-1   ">

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





 
</div>


  </Layout>
)
}

export default Home

export const getServerSideProps  = async ({query})=>{

const search = query.search
const tags = query.tags
// const  response = await axios.get(BASE_URL+'search_data?search='+search)
// const  dailydeals = await axios.post(BASE_URL+'mainsearch')





  return {
    props:{
      search:search? search : 'All',
      tags:tags? tags : '',
      // dailyDeals:response.data ? response.data:[]
    }
  }


}