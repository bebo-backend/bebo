
import Link from 'next/link'
import {Empty,Rate,Avatar,Tag,Statistic,Typography} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {FileJpgOutlined,UserOutlined,ArrowRightOutlined,CheckOutlined,EnvironmentOutlined} from '@ant-design/icons';
import {last} from 'lodash'
import {useState,useEffect} from 'react'




function DailyDeals({data=[],title="Discover popular right now",paginate=false,paginateHandler=e=>e}){

const [page,setPage] = useState(1)


const toPage=(page)=>{

  setPage(page)
  paginateHandler(page)
}

return (

    <div className="mt-0 bg-white px-2 md:px-3 sm:mx-0 py-5 shadow-2xl  rounded-lg " > 

    
       
   <p className="text-lg md:text-2xl font-bold mb-0 text-gray-900 md:ml-5 md:px-5  py-5 center leading-tight w-full
     " style={{'textAlign':'left'}}>
{title}
{title &&
   <Link href="/search?search=all">

     <a className="ml-0 p-1 font-bold">   <button className="mx-0 p-1 font-extrabold text-gray-900 " 
      ><ArrowRightOutlined className="
       sm:text-2xl   hover:bg-black  " /></button></a> 

   </Link>
}
    </p>
    
 <div className="w-full  block sm:inline-block 
justify-left mb-0 mx-0  md:mx-3 sm:mx-0 md:mx-1  ">
 

 {data && Object.keys(data).length > 0 ?

  data.map((data,key)=>(

    <Link href={"/item/"+data.id+"/"+data.title}
    >
    <a key={key} style={{'width':'260px'}} className="
   
     cursor-pointer bg-white  m-0 sm:m-2 pb-0 px-0 py-0  rounded  ">
    

     <div className="flex sm:inline-block shadow sm:shadow-sm hover:shadow-2xl
      w-full sm:w-64 px-2 sm:block  py-1 mx-0 
     sm:mx-0  sm:rounded-lg sm:px-0 sm:my-2 my-0  ">

    <p className="mb-0  justify-center w-1/4 sm:w-full flex ml-0">

       

    { data.images && data.images[0] ?
   
      
      <img alt="first image"  style={{'maxHeight':'190px','width':'380px'}} className="
       rounded-tl rounded-tr object-cover mb-0 mt-1"
        src={BASE_IMG_URL+last(data.images).images} />:
<FileJpgOutlined className="text-5xl" style={{
'textAlign':'center'
}}  /> 
    }
    </p>

<div className="w-3/4   sm:w-full mb-0  md:block 
md:mb-2 flex flex-col justify-end items-left pl-6 sm:px-3 ml-0">
   
    <p className="text-gray-500 mt-0 mb-1">
    <Rate style={{'fontSize':'15px'}} defaultValue={0} value={data.submit_user.rate}
     allowClear={false} disabled> 
    </Rate> ({data.submit_user.rate_count}) </p>

<span className="">
<span className="hidden sm:inline">

    { data.submit_user.image ?
      <Avatar src={BASE_IMG_URL+data.submit_user.image} icon={<UserOutlined></UserOutlined>} style={{"width":'33px','height':'33px',
      }}>
    </Avatar>:

      <Avatar className="cursor-pointer"  style={{"width":'33px','height':'33px',
    }} icon={<UserOutlined></UserOutlined>} className=""></Avatar> 
    }
    </span>
 <Link href={"/shop/"+data.submit_user.agencyname.replace('&','and')}>
  <a  className=" ml-3 sm:text-base text-blue-500">
<Typography.Text style={{'maxWidth':'70%','color':'#01718f'}} ellipsis={true}  >  
   {data.submit_user.agencyname}</Typography.Text> </a>
   </Link>
   </span>

  <hr className="my-0 my-1 border-b-1 sm:border-b-2 border-gray-200" />

<p className='mb-0 sm:mb-1 sm:mt-1 text-gray-500 text-sm   '> 
<CheckOutlined className=" text-black text-sm mr-2" /> Instock
    <Tag className=" rounded-none capitalize mb-0  " color="pink" style={{
      'marginLeft':'15px','border':'0px solid',
      'borderRadius':'13px','minWidth':'60px','backgroundColor':'red','color':'white',
      'textAlign':'center'}} >{data.acquire_type=='rent'?'rental':data.acquire_type }</Tag></p>




<span className=" font-bold ml-0 mt-1 sm:mt-3 mb-0 md:mb-3
   text-md text-gray-900 h-4 w-6 w-full" >
<Typography.Text style={{'maxWidth':'100%'}} ellipsis={true}>  
   {data.title}</Typography.Text>
   </span> 




<p  className="  capitalize
 h-4  
 overflow-hidden text-gray-700 my-1 mt-2 sm:mt-1
text-sm leading-tight"  ><EnvironmentOutlined />  
<Typography.Text style={{'maxWidth':'100%','marginLeft':'5px'}} ellipsis={true}>  
   {data.address}</Typography.Text> </p>

<p className="flex justify-end mb-0">
 {data.from_price != 0 ? <>
<Statistic  valueStyle={{'fontSize':'1.2rem','color':'red','fontWeight':'bold'}} prefix={"₦"} value={data.from_price}></Statistic>  
<span className=" flex text-base font-bold items-center mx-1">-</span>
<Statistic valueStyle={{'fontSize':'1.2rem','color':'red','fontWeight':'bold'}}prefix={"₦"} value={data.to_price}></Statistic> 

</>:
<Statistic prefix={"₦"} valueStyle={{'fontSize':'1.2rem','color':'red','fontWeight':'bold'}} value={data.price}></Statistic> }
</p>


</div>
</div>
    </a>
    </Link>


  )):<div >
   <Empty style={{'textAlign':'center'}} description="No Data found">(0) Item(s) found</Empty>
   </div>}

  </div>   
  
 {paginate && 
 
   

<div className="inset-y-0 bottom-0 flex mt-20 justify-center">
{page > 1 && 

<span onClick={e=>toPage(page-1)} 
className=" py-2 text-white px-10 bg-blue-700 hover:bg-blue-500 rounded shadow-xl 
mx-2 cursor-pointer ">Prev</span> 

}

<span onClick={e=>toPage(page+1)} className=" py-2 text-white px-10 bg-blue-700 hover:bg-blue-500 
rounded shadow-xl mx-2 cursor-pointer ">Next</span> </div>
}

     </div>
)

}

export default  DailyDeals