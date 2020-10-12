import Layout from '../components/layout'
import PopularCategory from '../components/main/popularcategory'
import UploadItem from '../components/main/upload-item'
import UploadDetail from '../components/main/upload-detail'
import TopCompany from '../components/main/top-company'
import DailyDeals from '../components/main/daily-deals'
import Filters from '../components/main/filters'
import { BASE_URL } from '../settings'
import axios from 'axios'
import Link from 'next/link'
import {Breadcrumb,Cascader,Typography,Tag} from "antd";
import {sortBy,reverse} from 'lodash'
import {useState,useEffect} from 'react'
import {LoadingOutlined,} from '@ant-design/icons';
import remove from 'lodash'
import {myfetcher} from '../lib/ax-fetch'
import useSWR, { useSWRPages } from "swr";






const Home = ({search="All",dailyDeals}) => {

// search && console.log('search',Object.values(search))
const [searchData,setSearchData] = useState()
const [loading,setLoading] = useState()
const [filters,setFilters] = useState({})
const [url,setUrl] = useState({})
const [page,setPage] = useState(1)
const baseUrl = BASE_URL+"search_data?search="+search+"&page="+page




useEffect(()=>{

   generateData()
   return ()=>{
    
    ;
   }



},[dailyDeals])

const generateData= async()=>{


setSearchData(dailyDeals)
}



const addFilter=(type,filter)=>{

// const data = [...url,newurl]
let editFilter= {...filters}

delete editFilter[type]

const data = {...editFilter,
[type]:filter
}



setFilters(data)

}


const paginateHandler=(page)=>{

setPage(page)
const doneUrl =baseUrl+Object.values(url).join("+")

 axios.get(doneUrl).then(res=>{

  setSearchData(res.data)
  setLoading(false)


})

}


const removeFilter=(d,key)=>{

let editFilter= {...filters}
delete editFilter[key]

setFilters(editFilter)


let editUrl = {...url}

delete editUrl[key]

setUrl(editUrl)

const doneUrl =baseUrl+Object.values(editUrl).join("+")

 
 axios.get(doneUrl).then(res=>{

  setSearchData(res.data)
  setLoading(false)


})


}

const clearFilters=(e)=>{

  setUrl({})
  setFilters({})

 axios.get(baseUrl).then(res=>{

  setSearchData(res.data)
  setLoading(false)


})
}

const addUrl=(newurl,type)=>{

// const data = [...url,newurl]
let editUrl = {...url}

delete editUrl[type]


const data = {...editUrl,
[type]:newurl
}




setUrl(data)
  

const doneUrl =baseUrl+Object.values(data).join("+")
 console.log('changeurl '+doneUrl)

  return doneUrl


}


const handleSearch=(filterurl,filters="",type)=>{


  // const filterurl = "search_data?search="+this.props.search+"&acquisition="+e.target.value

  setLoading(true)

  // console.log('filter '+Object.keys(filters))
  addFilter(type,filters)

//  axios.get(addUrl(filterurl,type)).then(res=>{

//   setSearchData(res.data)
//   setLoading(false)


// })


 const {data:content,error,mutate:mutateSearch} = useSWR(()=>addUrl(filterurl,type),myfetcher)

  if(data){
    setSearchData(content.data)
  setLoading(false)
}


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
      label: <Typography.Text>Sort by: Item Like(s)</Typography.Text>,
       
    },]



const sortComp=(Options)=> <span>
    <Cascader className="text-black" 
    displayRender={(e,f)=>e } expandTrigger="hover" 
    placeholder="Sort by: Recommended" options={Options} 
    onChange={e=>Sort(e)} />

     </span>


const Sort=(sortFilter)=>{


var sortData = [];


if(sortFilter=='na'){

      sortData= reverse(sortBy(searchData,['id']))
  
  } else if (sortFilter=='pl2h'){

     sortData= sortBy(searchData,['price','from_price'])
  } 
  else if (sortFilter=='ph2l'){

     sortData= reverse(sortBy(searchData,['price','from_price']))
  }

  else if (sortFilter=='sr'){

     sortData= reverse(sortBy(searchData,[o=>o.submit_user.rate_count]))
  }
else if (sortFilter=='r'){

     sortData= reverse(sortBy(searchData,[o=>o.submit_user.rate]))
  }

  else if (sortFilter=='il'){

     sortData= reverse(sortBy(searchData,'likes'))
  }


setSearchData(sortData)
}




  return (
  <Layout title={search ? "You search for "+search:"You search for All"} value={search}>
  
       
  <p className="text-base py-0 m-0 mb-0 text-black px-5 center leading-tight w-full
     " >
<p>
<Breadcrumb Seperator=" > ">
<Breadcrumb.Item className="underline text-base"  >
<Link href='/'>Home </Link>  </Breadcrumb.Item>

      <Breadcrumb.Item className="capitalize text-base text-gray-900" >{search?search:"All"}
       </Breadcrumb.Item>
      <Breadcrumb.Item className="text-base text-gray-900" >({searchData && searchData.length}) results </Breadcrumb.Item>

    
      </Breadcrumb> </p>

    </p>


<div className=" md:flex flex-inline mt-0 pt-5 pl-0 w-full bg-white pr-5"> 

<div className="md:w-1/4 w-full mt-0 pr-5 border-r-2 border-gray-300"> 


<Filters search={search} handleSearch={handleSearch} clearFilters={clearFilters}/>

</div>


<div className="  md:w-3/4 w-full ml-3 mt-10"> 


<div className="md:flex flex-inline">
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



<div className="flex mr-1 w-1/2  justify-end">
 {loading && <LoadingOutlined />}   {sortComp(Options)}
 </div>


 </div>

  </div>

 <div className="" style={{'marginTop':'-39px'}}>
 <DailyDeals data={searchData} title="" paginate={true} />
 </div>

</div>


</div>





 



  </Layout>
)
}

export default Home

export const getServerSideProps = async ({query})=>{

const search = query.search
const  response = await axios.get(BASE_URL+'search_data?search='+search)
// const  dailydeals = await axios.post(BASE_URL+'mainsearch')





  return {
    props:{
      search:search? search : '',
      dailyDeals:response.data ? response.data:[]
    }
  }


}