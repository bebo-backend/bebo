
import Link from 'next/link'
import {Empty,Rate,Avatar,Typography} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {FileJpgOutlined,UserOutlined,ArrowRightOutlined,MailFilled} from '@ant-design/icons';
import {last} from 'lodash'



function TopCompany({data}){
// console.log('data '+ Object.keys(data[0].images))

return (

  <div className="sm:mx-0  py-2 bg-white rounded-lg mt-3">

    <div className="mt-5 text-black bg-white sm:px-3 py-1   leading-tight w-full mb-5
    " > 

    
       
    <p className="text-lg md:text-2xl ml-3 font-bold mb-0 text-gray-900 md:ml-5 md:px-5  py-3 center leading-tight w-full
     " style={{'textAlign':'left'}}>
 Trending bebo accounts
   <Link href='/top-shops'>
 
    <a className="ml-0 p-1 font-bold">   <button className="mx-0 p-1 font-extrabold text-gray-900 " 
      ><ArrowRightOutlined className="
       sm:text-2xl   hover:bg-black  " /></button></a> 
   

   </Link>

    </p>
    
 <div className="w-full  block sm:flex
justify-left mb-0  md:mx-3  ">

 {data &&  Object.keys(data).length > 0 ?

  data.map((data,key)=>(

    <Link href={"/shop/"+data.submit_user.agencyname.replace('&','and')}

    >

    <a key={key}  style={{'width':'200px'}} 
    className="  cursor-pointer mx-2   md:m-1 md:p-0 m-0 
    rounded  pb-1 bg-white md:border-0     "  >
 

 <div className="flex sm:inline-block my-0 px-3 py-1 mx-0 hover:shadow-2xl
 sm:mx-4 shadow sm:shadow-sm sm:rounded-lg sm:px-1 overflow-hidden sm:my-4" style={{'marginBottom':'-14px'}}>
    
    <p className="justify-center w-1/4 sm:w-full flex rounded-full ">
    { data.images && data.images[0] ?
      
      <img alt="first image" className="
      object-cover mt-6 mr-0 md:mt-3 rounded-full h-20 w-20 sm:h-40 sm:w-40 " src={BASE_IMG_URL+last(data.images).images} />:
<FileJpgOutlined style={{
  'fontSize':'70px','textAlign':'center'
}}  /> 
    }
    </p>

<div className="w-3/4   sm:w-full mb-0 mb:4  md:block 
md:mb-3 flex flex-col justify-center items-left ml-4 sm:ml-0 sm:mx-3" 
>
    <p className="text-gray-500 mb-4 sm:mb-2 mx-0 my-1 md:my-1">
    <Rate style={{'fontSize':'15px'}} defaultValue={0} value={data.submit_user.rate}
     allowClear={false} disabled> 
    </Rate> ({data.submit_user.rate_count}) </p>

<p className="w-full sm:w-48 px-1 ">
    { data.submit_user.image ?
      <Avatar className="ml-2" src={BASE_IMG_URL+data.submit_user.image} icon={<UserOutlined></UserOutlined>}
       style={{'marginLeft':'0px',"width":'32px','height':'32px',
      }}>
    </Avatar>:

      <Avatar className="cursor-pointer"  style={{"width":'32px','height':'32px',
    }} icon={<UserOutlined></UserOutlined>} className=""></Avatar> 
    }
<span className=" font-bold ml-3 mb-3 md:mb-3
   text-base text-gray-900 h-4  " >
<Typography.Text style={{'width':'70%'}} ellipsis={true}>  
   {data.submit_user.agencyname}</Typography.Text>
   </span> 

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