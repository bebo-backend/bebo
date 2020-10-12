
import Link from 'next/link'
import {Empty,Rate,Avatar} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {FileJpgOutlined,UserOutlined,RightOutlined,MailFilled} from '@ant-design/icons';
import {last} from 'lodash'



function TopCompany({data}){
// console.log('data '+ Object.keys(data[0].images))

return (

    <div className="mt-5 text-black bg-white px-3 md:px-2 py-1  leading-tight w-full mb-5
    " > 

    
       
    <p className="text-xl md:text-3xl mb-0 text-gray-900 md:ml-5 md:px-5 font-bold py-5 center leading-tight w-full
     " style={{'textAlign':'left'}}>
   Explore Popular Shops
   <Link href='/top-shops'>
 
    <a className="ml-1 p-1">   <button className="mx-3 p-1 " 
      onClick={e=>setStep(value+1)}><RightOutlined className="
      shadow-lg text-3xl bg-black rounded-full hover:bg-white " /></button></a> 
   

   </Link>

    </p>
    
 <div className="w-full  block sm:flex
justify-left mb-2  md:mx-3  ">

 {data &&  Object.keys(data).length > 0 ?

  data.map((data,key)=>(

    <Link href={"/shop/"+data.submit_user.agencyname.replace('&','and')}

    >

    <a key={key}  style={{'width':'200px'}} 
    className="  cursor-pointer   md:m-2 md:p-0 
    rounded  pb-1 bg-white md:border-0    ">
 

 <div className="flex sm:inline-block px-3 py-0 mx-0 
 sm:mx-2 shadow-xl sm:shadow-none rounded-lg sm:px-0">
    
    <p className="justify-center w-1/4 sm:w-full flex ">
    { data.images && data.images[0] ?
      
      <img alt="first image" style={{'height':'140px','width':'320px'}} className="
      object-cover rounded-tl rounded-tr mt-6 md:mt-3 " src={BASE_IMG_URL+last(data.images).images} />:
<FileJpgOutlined style={{
  'fontSize':'70px','textAlign':'center'
}}  /> 
    }
    </p>

<div className="w-3/4 hover:bg-gray-300  sm:w-full mb-0 mb:4  md:block 
md:mb-3 flex flex-col justify-center items-left mx-3 ml-5 sm:ml-0 sm:mx-0" 
>
    <p className="text-gray-500 mb-4 sm:mb-2 mx-1 my-2 md:my-2">
    <Rate style={{'fontSize':'17px'}} defaultValue={0} value={data.submit_user.rate}
     allowClear={false} disabled> 
    </Rate> ({data.submit_user.rate_count}) </p>

<p className="">
    { data.submit_user.image ?
      <Avatar className="ml-2" src={BASE_IMG_URL+data.submit_user.image}
       style={{'marginLeft':'10px',"width":'40px','height':'40px',
      }}>
    </Avatar>:

      <Avatar className="cursor-pointer"  style={{"width":'40px','height':'40px',
    }} icon={<UserOutlined></UserOutlined>} className=""></Avatar> 
    }

  <span className="uppercase font-bold ml-3 mb-3 md:mb-3
   text-lg sm:text-base text-blue-700" >
   {data.submit_user.agencyname} </span>

    <p className=" font-bold ml-3 mr-2 mt-3 sm:mt-1 sm:hidden
text-lg text-gray-800 mb-0" >
   {data.submit_user.user.email}  </p>

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
)

}

export default  TopCompany