
import Link from 'next/link'
import {Empty,Rate,Avatar,Tag,Statistic,Typography} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {FileJpgOutlined,UserOutlined,ArrowRightOutlined,CheckOutlined,EnvironmentOutlined,CameraOutlined} from '@ant-design/icons';
import {last} from 'lodash'
import {useState,useEffect} from 'react'




function DailyDeals({data=[],title="Discover trending ads now",paginate=false,paginateHandler=e=>e}){

const [page,setPage] = useState(1)


const toPage=(page)=>{

  setPage(page)
  paginateHandler(page)
}

return (

    <div className="mt-0 bg-white px-2 md:px-1 sm:mx-0 py-5 sm:shadow-sm  rounded-lg " > 

    
       
   <p className="sm:text-lg  mx-2 sm:mx-1 px-2  mb-5 text-white hover:bg-red-600 md:ml-5 sm:px-5  py-4 
   center leading-tight  sm:font-bold
     " style={{'textAlign':'left','backgroundColor':'#FF0000','marginLeft':'3px'}}>
{title}
{title &&
   <Link href="/search?search=all">

     <a className="ml-0 p-1 sm:text-base  flex items-start justify-center float-right  
     mt-0">   <button className="mx-0 p-1  text-white " 
      >SEE ALL</button></a> 

   </Link>
}
    </p>
    
 <div className="w-full  block sm:inline-block 
justify-left mb-0 mx-0  md:mx-3 sm:mx-0 md:mx-1  ">
 

 {data && Object.keys(data).length > 0 ?

  data.map((data,key)=>(

    <Link href={"/item/"+data.id+"/"+data.title}
    >
    <a key={key} style={{'width':'250px'}} className="
   
     cursor-pointer bg-white  m-0 sm:m-2 pb-0 px-0 py-0  rounded  ">
    

     <div className="flex sm:inline-block  sm:shadow sm:hover:shadow-2xl
      w-full sm:w-64 pr-2 sm:block  py-1 mx-0 
     sm:mx-0  sm:rounded-lg sm:px-0 sm:my-2 my-0  ">
   
   <span className="absolute w-full  p-2  font-bold text-white " 
   style={{'color':'white'}}>
   <span className="bg-black p-2 rounded opacity-75">
      <CameraOutlined className="text-lg "  /><span className="mt-8"> {Object.keys(data.images).length} </span>
      </span>
      </span>
    <p className="mb-0  justify-center w-2/5 sm:w-full flex ml-0">

       

    { data.images && data.images[0] ?
   
       <div>
   
      <img alt="first image"   className="
       rounded-tl rounded-tr object-contain sm:object-fit mb-0 mt-1 
       sm:h-40 sm:w-40 h-32 w-32"
        src={BASE_IMG_URL+last(data.images).images} />

        </div>:
<FileJpgOutlined className="text-6xl" style={{
'textAlign':'center'
}}  /> 
    }
    </p>

<div className="w-3/5   sm:w-full mb-0  md:block 
md:mb-2 flex flex-col justify-end items-left pl-3 sm:px-3 ml-0 overflow-hidden">
   
    <p className="text-red-600 mt-0 mb-1 hidden sm:block" style={{'marginTop':'-25px'}}>
    <Rate style={{'fontSize':'15px'}} defaultValue={0} value={data.submit_user.rate}
     allowClear={false} disabled> 
    </Rate> ({data.submit_user.rate_count}) </p>

<span className="">
<span className="inline">

    { data.submit_user.image ?
      <Avatar src={BASE_IMG_URL+data.submit_user.image} icon={<UserOutlined></UserOutlined>} 
      style={{"width":'30px','height':'30px',
      }}>
    </Avatar>:

      <Avatar className="cursor-pointer"  style={{"width":'30px','height':'30px',
    }} icon={<UserOutlined></UserOutlined>} className=""></Avatar> 
    }
    </span>
 <Link href={"/@/"+data.submit_user.agencyname.replace('&','and')}>
  <a  className=" ml-3 test-md text-blue-500">
<Typography.Text style={{'maxWidth':'70%','color':'#01718f'}} ellipsis={true}  >  
   {data.submit_user.agencyname}</Typography.Text> </a>
   </Link>
   </span>

  <hr className="my-0 my-1 border-b-1 sm:border-b-2 border-gray-200" />

<p className='mb-0 sm:mb-1 sm:mt-1 text-gray-500 text-sm  '> 
<span className="hidden sm:inline">
<CheckOutlined className=" text-black text-sm mr-2" /> Instock</span>
    <Tag className=" rounded-none capitalize mb-0  " style={{
      'marginLeft':'15px','border':'0px solid',
      'borderRadius':'13px','minWidth':'60px','backgroundColor':'red','color':'white',
      'textAlign':'center'}} >{data.acquire_type=='rent'?'rental':data.acquire_type }
      </Tag></p>




<span className="  ml-0 mt-1 sm:mt-3 mb-0 md:mb-3
   text-md font-bold text-black   sm:h-4 w-6 w-full" >
<Typography.Text style={{'maxWidth':'100%'}} ellipsis={true}>  
   {data.title}</Typography.Text>
   </span> 




<p  className="  capitalize
 h-6  
 overflow-hidden text-gray-700 my-1 mt-2 sm:mt-1 mx-0
text-sm leading-tight"  >
<Typography.Text style={{'maxWidth':'100%','marginLeft':'5px'}} ellipsis={true}>  
 <EnvironmentOutlined className="mr-1" />   {data.address}</Typography.Text> </p>

<p className="flex justify-end mb-0 mx-2">
 {data.from_price != 0 ? <>
<Statistic  valueStyle={{'fontSize':'1.2rem','color':'teal','fontWeight':'bold'}} prefix={"₦"} value={data.from_price}></Statistic>  
<span className=" flex text-base font-bold items-center mx-1">-</span>
<Statistic valueStyle={{'fontSize':'1.2rem','color':'teal','fontWeight':'bold'}} prefix={"₦"} value={data.to_price}></Statistic> 

</>:
<Statistic prefix={"₦"} valueStyle={{'fontSize':'1.2rem','color':'teal','fontWeight':'bold'}} value={data.price}></Statistic> }
</p>

<hr className=" sm:hidden" />

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