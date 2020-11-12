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
import {Breadcrumb,Cascader,Typography,Tag,Empty} from "antd";
import {sortBy,reverse} from 'lodash'
import {useState,useEffect} from 'react'
import {LoadingOutlined,BarsOutlined} from '@ant-design/icons';
import remove from 'lodash'
import {fetcher} from '../lib/ax-fetch'
import useSWRInfinite from "swr";






const Home = ({search="All",tags='',ssrData=[]}) => {
const [searchData,setSearchData] = useState()
const [loading,setLoading] = useState()
const [filters,setFilters] = useState({})
const [url,setUrl] = useState({})
const [page,setPage] = useState(1)
const [menu,setMenu] = useState(true)
const [previousPageData,setPreviousPageData] = useState([])


// search && console.log('search',Object.values(search))
const baseUrl = BASE_URL+"search_data?search="+search+Object.values(url).join("+")

const LIMIT = 24


const {data,error,mutate,size,setSize,isReachingEnd}=useSWRInfinite((index,previousPageData)=>{

if (previousPageData && previousPageData.length === 0) return null
if (!index || index===0) return BASE_URL+"search_data?search="+search+"&page="+page+"&limit="+LIMIT+"&tags="+tags+Object.values(url).join('+');

return BASE_URL+"search_data?search="+search+"&page="+page+"&limit="+LIMIT+"&tags="+tags
},fetcher)

if (!data) {



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
  setPreviousPageData([])

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
  
       
     <p className=" cursor-pointer text-lg flex   justify-between pt-3 pb-3 sm:pb-0 mt-3 sm:mt-16 mb-1  px-3 sm:px-5 center leading-tight w-full
    text-black"  >
<p className="  w-full">


<Breadcrumb className="flex w-full" >

 <Link href="/">

 <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-blue-500"  >Home
       </Breadcrumb.Item>
  </Link>


 <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-black"  >Ads
       </Breadcrumb.Item>

      <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-black"  >{search}
       </Breadcrumb.Item>
      <Breadcrumb.Item className="text-sm leading-tight md:text-md text-black" >Pages: {page} </Breadcrumb.Item>

 
      </Breadcrumb> 

      </p>

  <span className="flex justify-end  flex-shrink pt-1 bg-black opacity-75 rounded hover:bg-blue-500 ">
<BarsOutlined className="mt-1 mx-3 flex text-xl sm:text-2xl cursor-pointer text-black " onClick={e=>setMenu(!menu)} style={{
  'color':'white'
}} />
</span> 
    </p>


<div className="mx-3  rounded-lg">

<div className=" md:flex flex-inline mt-0 py-5 pl-0 w-full bg-white pr-5  "> 

<div className="md:w-1/4 w-full mt-0 pr-5 md:border-r-2 border-gray-300 " style={{
  'display': menu ? 'block':'none'
}}> 


<Filters search={search} handleSearch={handleSearch} clearFilters={clearFilters} menu={menu}  />

</div>


<div className="  md:w-3/4 w-full ml-3 mt-6"> 



<div className="md:flex flex-inline mb-10 px-0">

<div className="w-full flex flex-col sm:flex-row justify-end my-4 mx-2 "> 


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



<div className="flex mr-3 w-full mb-6 justify-start">
 {loading && <LoadingOutlined />}   {sortComp(Options)}
 </div>


 </div>

  </div>

{Object.keys(ssrData.res).length > 0 || Object.keys(previousPageData).length > 0  ?
 <div className="mr-5 md:mr-0 w-full  " style={{'marginTop':'-39px'}}>
  <div className="w-full  block sm:inline-block 
justify-left my-3  md:mx-3 sm:mx-0 md:mx-1   ">

{previousPageData && previousPageData.map(e=>(

<ItemComponent data={e} ke={e.title} />
  ))}


{ssrData.res.map(e=>(

<ItemComponent data={e} ke={e.title} />
  ))}
</div>

  <div className="mx-auto mt-2 mb-4 w-full flex justify-center">

    
          <a style={{'border':'1px solid'}}
            className=" hover:bg-blue-500
            hover:text-white font-bold py-2 px-8 rounded"

             disabled={!ssrData.next}
            onClick={e=>{ 
              setPreviousPageData([...previousPageData,...ssrData.res]); 
              setPage(page+1)}
            }
       
          >
              More product
          </a>
  
        </div>

 </div>

:


<Empty description="No product found">(0) product found</Empty>



} 


</div>


</div>





 
</div>


  </Layout>
)
}



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
  setPreviousPageData([])

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
  
       
   <p className=" cursor-pointer text-lg flex   justify-between pt-3 pb-3 sm:pb-0 mt-3 sm:mt-16 mb-1  px-3 sm:px-5 center leading-tight w-full
    text-black"  >
<p className="  w-full">


<Breadcrumb className="flex w-full" >

 <Link href="/">

 <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-blue-500"  >Home
       </Breadcrumb.Item>
  </Link>


 <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-black"  >Ads
       </Breadcrumb.Item>

      <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-black"  >{search}
       </Breadcrumb.Item>
      <Breadcrumb.Item className="text-sm leading-tight md:text-md text-black" >Pages: {page} </Breadcrumb.Item>

 
      </Breadcrumb> 

      </p>

  <span className="flex justify-end  flex-shrink pt-1 bg-black opacity-75 rounded hover:bg-blue-500 ">
<BarsOutlined className="mt-1 mx-3 flex text-xl sm:text-2xl cursor-pointer text-black " onClick={e=>setMenu(!menu)} style={{
  'color':'white'
}} />
</span> 
    </p>


<div className="sm:mx-3  rounded-lg">

<div className=" md:flex flex-inline mt-0 py-5 pl-0 w-full bg-white pr-5  "> 

<div className="md:w-1/4 w-full mt-0 pr-5 md:border-r-2 border-gray-300 " style={{
  'display':isMobile()? isMobile() && !menu ? 'block':'none' : menu ? 'block':'none'
}}> 


<Filters search={search} handleSearch={handleSearch} clearFilters={clearFilters} menu={menu}  />

</div>


<div className="  md:w-3/4 w-full mx-1 sm:ml-3 mt-3 "> 


<div className="md:flex flex-inline mb-10 px-0">

<div className="w-full flex flex-col sm:flex-row justify-end my-4 mx-2 "> 

{Object.keys(filters).length > 0 &&

<div className="flex text-base font-bold m-0 w-1/2 flex-wrap mb-4 ">

Filters:

{Object.keys(filters).map((e,key)=>(

<Tag color="#108ee9" key={e}  closable={true} onClose={d=>removeFilter(d,e)} style={{
'padding':'2px','minWidth':'100px','textAlign':'center','margin':'3px',
  'fontSize':'.7em','minHeight':'30px'
}}> <span className="ml-1">{e}: {filters[e]}</span> </Tag>
  ))}

 </div>
 }



<div className="flex sm:mr-3 px-0 w-full mb-6 justify-start">
 {loading && <LoadingOutlined />}   {sortComp(Options)}
 </div>


 </div>

  </div>


{Object.keys(data.res).length > 0 || Object.keys(previousPageData).length > 0  ?
 <div className="mr-5 md:mr-0 w-full  " style={{'marginTop':'-39px'}}>
  <div className="w-full  block sm:inline-block 
justify-left my-3  md:mx-3 sm:mx-0 md:mx-1   ">

{previousPageData && previousPageData.map(e=>(

<ItemComponent data={e} ke={e.title} />
  ))}


{data.res.map(e=>(

<ItemComponent data={e} ke={e.title} />
  ))}
</div>


  <div className="mx-auto mt-2 mb-4 w-full flex justify-center">

    
          <a style={{'border':'1px solid'}}
            className=" hover:bg-blue-500
            hover:text-white font-bold py-2 px-8 rounded"

             disabled={!data.next}
            onClick={e=>{ 
              setPreviousPageData([...previousPageData,...data.res]); 
              setPage(page+1)} 
            }
       
          >
              More product
          </a>
  
        </div>

 
        
 </div>

:


<Empty description="No product found">(0) product found</Empty>



} 




</div>


</div>





 
</div>


  </Layout>
)
}

export default Home

export const getServerSideProps  = async ({query})=>{

const search = query.search
const tags = query.tags ? query.tags :''
const page=query.page ? query.page :1
const LIMIT=20

const url = BASE_URL+"search_data?search="+search+"&page="+page+"&limit="+LIMIT+"&tags="+tags



const  response = await axios.get(url)
// const  dailydeals = await axios.post(BASE_URL+'mainsearch')





  return {
    props:{
      search:search? search : 'All',
      tags:tags? tags : '',
      ssrData:response.data ? response.data:[]
    }
  }


}