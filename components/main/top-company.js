
import Link from 'next/link'
import {Empty,Rate,Avatar} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {FileJpgOutlined,UserOutlined,RightOutlined,MailFilled} from '@ant-design/icons';
import {last} from 'lodash'



function TopCompany({data}){
// console.log('data '+ Object.keys(data[0].images))

return (

  <div className="sm:mx-3 shadow-2xl py-2 bg-white rounded-lg mt-3">

    <div className="mt-5 text-black bg-white px-3 py-1   leading-tight w-full mb-5
    " > 

    
       
    <p className="text-lg md:text-3xl mb-0 text-gray-700 md:ml-5 md:px-5  py-5 center leading-tight w-full
     " style={{'textAlign':'left'}}>
   Explore Popular Shops
   <Link href='/top-shops'>
 
    <a className="ml-1 p-1">   <button className="mx-3 p-1 " 
      ><RightOutlined className="
      shadow-lg sm:text-3xl  rounded-full hover:bg-black " /></button></a> 
   

   </Link>

    </p>
    
 <div className="w-full  block sm:flex
justify-left mb-2  md:mx-3  ">

 {data &&  Object.keys(data).length > 0 ?

  data.map((data,key)=>(

    <Link href={"/shop/"+data.submit_user.agencyname.replace('&','and')}

    >

    <a key={key}  style={{'width':'200px'}} 
    className="  cursor-pointer   md:m-1 md:p-0 
    rounded  pb-1 bg-white md:border-0    ">
 

 <div className="flex sm:inline-block px-3 py-0 mx-0 hover:shadow-2xl
 sm:mx-1 shadow-sm sm:shadow-sm rounded-lg sm:px-1 overflow-hidden">
    
    <p className="justify-center w-1/4 sm:w-full flex rounded-full ">
    { data.images && data.images[0] ?
      
      <img alt="first image" className="
      object-cover mt-6 mr-0 md:mt-3 rounded-full h-20 w-20 sm:h-32 sm:w-32 " src={BASE_IMG_URL+last(data.images).images} />:
<FileJpgOutlined style={{
  'fontSize':'70px','textAlign':'center'
}}  /> 
    }
    </p>

<div className="w-3/4   sm:w-full mb-0 mb:4  md:block 
md:mb-3 flex flex-col justify-center items-left mx-1 sm:ml-0 sm:mx-0" 
>
    <p className="text-gray-500 mb-4 sm:mb-2 mx-0 my-2 md:my-2">
    <Rate style={{'fontSize':'17px'}} defaultValue={0} value={data.submit_user.rate}
     allowClear={false} disabled> 
    </Rate> ({data.submit_user.rate_count}) </p>

<p className="">
    { data.submit_user.image ?
      <Avatar className="ml-2" src={BASE_IMG_URL+data.submit_user.image} icon={<UserOutlined></UserOutlined>}
       style={{'marginLeft':'10px',"width":'35px','height':'35px',
      }}>
    </Avatar>:

      <Avatar className="cursor-pointer"  style={{"width":'35px','height':'35px',
    }} icon={<UserOutlined></UserOutlined>} className=""></Avatar> 
    }

  <span className="uppercase font-bold ml-3 mb-3 md:mb-3
   text-base text-black" >
   {data.submit_user.agencyname} </span>

  

</p>
</div>
</div>
    </a>

</Link>
  ))


:


<Empty description="No Popular Shop found">(0) Item(s) found</Empty>}
 

  </div>   
  
 
   



     </div>
     </div>
)

}

export default  TopCompany