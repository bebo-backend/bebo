
import Link from 'next/link'
import {Empty,Rate,Avatar,Tag,Statistic} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {FileJpgOutlined,UserOutlined,ArrowRightOutlined,CheckOutlined} from '@ant-design/icons';
import {last} from 'lodash'
// import {useState,useEffect} from 'react'



const Main=({data=[]})=>{


	return ( data && <Link href={"/item/"+data.id+"/"+data.title}
    >
    <a key={data.id} style={{'width':'260px'}} className="
   
     cursor-pointer bg-white  m-1 sm:m-2 pb-0 px-0  rounded  ">
    

     <div className=" flex sm:inline-block shadow-lg hover:shadow-2xl
      w-full sm:w-64 px-2 sm:block  py-0 mx-0 sm:py-0 
     sm:mx-0  rounded-lg sm:px-0 sm:mb-3  ">

    <p className="mb-0  justify-center w-1/4 sm:w-full flex ml-0">

       

    { data.images && data.images[0] ?
   
      
      <img alt="first image"  style={{'height':'190px','width':'380px'}} className="
       rounded-tl rounded-tr object-contain  sm:object-cover mb-0 mt-3 md:mt-1"
        src={BASE_IMG_URL+last(data.images).images} />:
<FileJpgOutlined className="text-5xl" style={{
'textAlign':'center'
}}  /> 
    }
    </p>

<div className="w-3/4   sm:w-full mb-0  md:block 
md:mb-3 flex flex-col justify-end items-left pl-5 sm:px-3 ml-0">
   
    <p className="text-gray-500 mt-0 mb-1">
    <Rate style={{'fontSize':'17px'}} defaultValue={0} value={data.submit_user.rate}
     allowClear={false} disabled> 
    </Rate> ({data.submit_user.rate_count}) </p>

<span className="">

    { data.submit_user.image ?
      <Avatar src={BASE_IMG_URL+data.submit_user.image} style={{"width":'33px','height':'33px',
      }}>
    </Avatar>:

      <Avatar className="cursor-pointer"  style={{"width":'33px','height':'33px',
    }} icon={<UserOutlined></UserOutlined>} className=""></Avatar> 
    }
 <Link href={"/shop/"+data.submit_user.agencyname.replace('&','and')}>
  <a  className="uppercase font-bold ml-3 text-base ">
   {data.submit_user.agencyname} </a>
   </Link>
   </span>

  <hr className="my-0 mt-1 border-b-1 sm:border-b-2 border-teal-200" />

<p className='mb-0 sm:mt-2 text-gray-500 text-base   '> 
<CheckOutlined className=" text-black text-base mr-2" /> Instock
    <Tag className=" rounded-none capitalize mb-0  " color="pink" style={{
      'marginLeft':'15px','border':'0px solid',
      'borderRadius':'13px','minWidth':'60px','backgroundColor':'red','color':'white',
      'textAlign':'center'}} >{data.acquire_type=='rent'?'rental':data.acquire_type }</Tag></p>



<p  className=" mb-1 capitalize
 font-semibold max-h-10  
 overflow-hidden text-black  my-2
text-base leading-tight"  >{data.title} </p>

<p className="flex justify-start">
 {data.from_price != 0 ? <>
<Statistic  valueStyle={{'fontSize':'1.5rem','color':'red','fontWeight':'bold'}} prefix={"₦"} value={data.from_price}></Statistic>  
<span className=" flex text-base font-bold items-center mx-1">-</span>
<Statistic valueStyle={{'fontSize':'1.5rem','color':'red','fontWeight':'bold'}}prefix={"₦"} value={data.to_price}></Statistic> 

</>:
<Statistic prefix={"₦"} valueStyle={{'fontSize':'1.5rem','color':'red','fontWeight':'bold'}} value={data.price}></Statistic> }
</p>


</div>
</div>
    </a>
    </Link>)
}

export default Main