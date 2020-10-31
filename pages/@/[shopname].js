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
import {Breadcrumb,Cascader,Typography,Tag,Empty,Rate,Table} from "antd";
import {sortBy,reverse} from 'lodash'
import {useState,useEffect} from 'react'
import {LoadingOutlined,BarsOutlined} from '@ant-design/icons';
import remove from 'lodash'
import {fetcher} from '../../lib/ax-fetch'
import useSWRInfinite from "swr";






const Shop = ({title,ssrData=[]}) => {
const [searchData,setSearchData] = useState()
const [loading,setLoading] = useState()
const [filters,setFilters] = useState({})
const [url,setUrl] = useState({})
const [page,setPage] = useState(1)
const [curView,setcurView] = useState(0)
const [menu,setMenu] = useState(true)


// search && console.log('search',Object.values(search))
const baseUrl = BASE_URL+"search_data?search="+title+Object.values(url).join("+")

const LIMIT = 44


const {data,error,mutate,size,setSize,isReachingEnd}=useSWRInfinite((index,previousPageData)=>{

if (previousPageData && previousPageData.length === 0) return null
if (!index || index===0) return BASE_URL+"search_data?search="+title+"&page="+page+"&limit="+LIMIT+Object.values(url).join('+');

return BASE_URL+"search_data?search="+title+"&page="+index+"&limit="+LIMIT
},fetcher)

if (!data){ 




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






  return (
  <Layout title={title} value={title}>
  
       
  <p className=" text-2xl flex justify-between pt-3 pb-3 sm:pb-0 m-0 mb-0  px-3 sm:px-5 center leading-tight w-full
    text-white" style={{'backgroundColor':'#01718f'}} >
<p className="  w-full">
<Breadcrumb className="flex w-full" >


      <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md sm:text-lg text-white"  >{title}
       </Breadcrumb.Item>
        <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md sm:text-lg text-white"  >Ads
       </Breadcrumb.Item>

      <Breadcrumb.Item className="text-sm leading-tight md:text-base text-white" >Page: {page}, ( {Object.keys(ssrData.res).length} products found )  </Breadcrumb.Item>

 
      </Breadcrumb> 

      </p>

  <span className="flex justify-end  flex-shrink ">
<BarsOutlined className="mt-1  flex text-xl sm:text-2xl cursor-pointer text-white " onClick={e=>setMenu(!menu)} style={{
  'color':'white'
}} />
</span> 
    </p>


<div className=" md:flex flex-inline mt-0 pt-5 pl-0 w-full bg-white pr-5"> 

<div className="md:w-1/4 w-full mt-0 pr-5 md:border-r-2 border-gray-300 " style={{
  'display': menu ? 'block':'none','backgroundColor':'white'
}}> 


<Filters search={title} handleSearch={handleSearch} clearFilters={clearFilters} menu={menu}  />

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

{ssrData.res.map(e=>(

<ItemComponent data={e} ke={e.title} />
  ))}
</div>


    <div className="mx-auto mt-2 mb-4 w-full flex justify-center">

    
          <a style={{'border':'1px solid'}}
            className=" hover:bg-blue-500
            hover:text-white font-bold py-2 px-8 rounded"

             disabled={!ssrData.next}
            onClick={e=>setPage(page+1)}
       
          >
              More product
          </a>
  
        </div>
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




     const contactDataSource = data && Object.keys(data).length ? [
        {
          key: '1',
          name: 'Email',
          value: data.res.[0].submit_user.user.email,
      
        }, 
        {
            key: '2',
            name: 'Website',
            value:  data.res.[0].submit_user.website ? data.res.[0].submit_user.website : <span className='text-gray-500'> Website not available for seller </span>,
          },

          {
            key: '3',
            name: 'Phone',
            value:  data.res.[0].submit_user.phone_no,
          },

                    
          {
            key: '4',
            name: 'Rating',
            value:    <span className="text-red-600 mt-0 mb-1" style={{'marginTop':'-23px'}}>
    <Rate style={{'fontSize':'15px'}} defaultValue={0} value={data.res[0].submit_user.rate}
     allowClear={false} disabled> 
    </Rate> ({data.res[0].submit_user.rate_count}) </span>
          }
      ]:[];
      
      const contactColumns = [
        {
       
            dataIndex: 'name',
            key: 'name',
          },
        {
          
          dataIndex: 'value',
          key: 'value',
        },
   
      ];



  return (
  <Layout title={title} value={title}>
  
       
  <p className=" text-2xl flex justify-between pt-3 pb-3 sm:pb-0 m-0 mb-0  px-3 sm:px-5 center leading-tight w-full
    text-white" style={{'backgroundColor':'#01718f'}} >
<p className="  w-full">
<Breadcrumb className="flex w-full">


      <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md  text-white"  >{title}
       </Breadcrumb.Item>
        <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md  text-white"  >Ads
       </Breadcrumb.Item>
      <Breadcrumb.Item className="text-sm leading-tight md:text-md  text-white" >Page: {page}, ( {Object.keys(data.res).length} products found ) </Breadcrumb.Item>

 
      </Breadcrumb> 

      </p>

  <span className="flex justify-end  flex-shrink ">
<BarsOutlined className="mt-1  flex text-xl sm:text-2xl cursor-pointer text-white " onClick={e=>setMenu(!menu)} style={{
  'color':'white'
}} />
</span> 
    </p>


<div className=" md:flex inline mt-0 pt-5 pl-0 w-full bg-white pr-5" style={{  'backgroundColor':'white'}}> 

<div className="md:w-1/4 w-full mt-0 pr-5 md:border-r-2 border-gray-300 " style={{
  'display':isMobile()? isMobile() && !menu ? 'block':'none' : menu ? 'block':'none',

}}> 


<Filters search={title} handleSearch={handleSearch} clearFilters={clearFilters} menu={menu}  />

</div>


<div className="  md:w-3/4 w-full ml-3 mt-6 bg-white"> 


 <span className="text-base px-2 py-0 center leading-tight  mb-0 text-black
     font-mono border-teal-900 border-r-2 w-20 mx-0 cursor-pointer " onClick={e=>setcurView(1)}  style={{
'color':curView=== 1 ? "black":"silver",'textAlign':'center'
}}>About</span>


 <span className="text-base px-2 py-0 center leading-tight  mb-0 
     font-mono  w-20 cursor-pointer " onClick={e=>setcurView(0)}  style={{
'color':curView=== 0 ? "black":"silver",'textAlign':'center'
}} >Product (Ads)</span>

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

{curView === 0 ?<>

{Object.keys(data.res).length > 0 ?
 <div className="mr-5 md:mr-0 w-full  " style={{'marginTop':'-39px'}}>
  <div className="w-full  block sm:inline-block 
justify-left my-3  md:mx-3 sm:mx-0 md:mx-1   ">

{data.res.map(e=>(

<ItemComponent data={e} ke={e.title} />
  ))}
</div>

  <div className="mx-auto mt-4 mb-4 w-full flex justify-center">

    
          <a style={{'border':'1px solid'}}
            className=" hover:bg-blue-500
            hover:text-white font-bold py-2 px-8 rounded"

             disabled={!data.next}
            onClick={e=>setPage(page+1)}
       
          >
              More product
          </a>
  
        </div>
 </div>

:


<Empty description="No product found">(0) product found</Empty>

} </>
:
<div className="mr-5 md:mr-0 w-full  " style={{'marginTop':'-39px'}}>
<pre className="my-6 text-sm sm:text-base px-3  whitespace-pre-wrap text-gray-700"> {data.res[0].submit_user.about?
  data.res[0].submit_user.about: "* Write about your business or company"} </pre>

  <p>  <Table  sortDirections={["ascend","descend"]} tableLayout="auto" 

      dataSource={contactDataSource} 
      columns={contactColumns} />
      </p>

</div>
}

</div>


</div>





 



  </Layout>
)
}


export default Shop


// const TransformData=(data=[])=>{


// return Object.keys(data).map((value,index)=>{

//   return {
// key:index,
// value:data.[value],
// phone:data.phone_no,
// website:data.website ?data.website:'No website for seller',
// rating: <span> <Rate style={{'fontSize':'15px'}} defaultValue={0} value={data.rate}
//      allowClear={false} disabled> 
//     </Rate>  ({data.submit_user.rate_count})  </span>
    

// }})

// }





export const getServerSideProps = async({query})=>{

const search = query.shopname
const tags = query.tags ? query.tags :''
const page=query.page ? query.page :1
const LIMIT=44

const url = BASE_URL+"search_data?search="+search+"&page="+page+"&limit="+LIMIT



const  response = await axios.get(url)
// const  dailydeals = await axios.post(BASE_URL+'mainsearch')




  return {
    props:{
      title:query.shopname,
      ssrData:response.data ? response.data:[]
    }
  }


}