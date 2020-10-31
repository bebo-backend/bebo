
import Link from 'next/link'
import {Empty,Rate,Avatar,Typography} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {FileJpgOutlined,UserOutlined,ArrowRightOutlined,MailFilled} from '@ant-design/icons';
import {last} from 'lodash'



function TopCompany({data, href=true}){
// console.log('data '+ Object.keys(data[0].images))

return (

  <div className="sm:mx-0  py-2 bg-white rounded-lg mt-3">

    <div className="mt-2 text-black bg-white sm:px-3 py-1   leading-tight w-full mb-5
    " > 

    
       
    <p className="text-lg md:text-2xl ml-4 font-bold mb-0 text-gray-900 md:ml-5 md:px-5  pb-3 center leading-tight w-full
     " style={{'textAlign':'left'}}>
 Trending seller
 {href && 
   <Link href='/top-shops'>
 
   <a style={{'border':'1px solid'}}
            className=" hover:bg-blue-500 hover:text-white 
           font-bold py-2 px-4 rounded text-sm mx-3  sm:mx-6"
       
          >
              See all
          </a> 
   

   </Link>
 }

    </p>
    
 <div className="w-full  block sm:flex
justify-left mb-0  md:mx-3  ">

 {data &&  Object.keys(data).length > 0 ?

  data.map((data,key)=>(

    <Link href={"/@/"+data.submit_user.agencyname.replace('&','and')}

    >

    <a key={key}  style={{'width':'200px'}} 
    className="  cursor-pointer mx-2   md:m-1 md:p-0 m-0 
    rounded  pb-1 bg-white md:border-0     "  >
 

 <div className="flex sm:inline-block my-0 px-3 sm:py-1 mx-0 sm:hover:shadow-2xl
 sm:mx-4  sm:shadow-sm sm:rounded-lg sm:px-1 overflow-hidden sm:my-4" style={{'marginBottom':'-14px'}}>
    
    <p className="justify-center w-1/4 sm:w-full flex rounded-full ">
    { data.images && data.images[0] ?
      
      <img alt="first image" className="
      object-cover mr-0 mt-3 rounded h-20 w-20 sm:h-32 sm:w-32 " src={BASE_IMG_URL+last(data.images).images} />:
<FileJpgOutlined style={{
  'fontSize':'70px','textAlign':'center'
}}  /> 
    }
    </p>

<div className="w-3/4   sm:w-full mb-0 mb:4  
md:mb-3 flex flex-col ml-2 sm:ml-0 sm:mx-3 " 
>
    <p className="text-gray-500 mb-2 sm:mb-2 mx-0 my-1 md:my-1" style={{'zIndex':'0'}}>
    <Rate style={{'fontSize':'15px','zIndex':'0'}} defaultValue={0} value={data.submit_user.rate}
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
<span className=" font-bold ml-3 mb-1 md:mb-2
   text-base text-gray-900 h-4  " >
<Typography.Text style={{'width':'70%'}} ellipsis={true}>  
   {data.submit_user.agencyname}</Typography.Text>
   </span> 

</p>

<p className="w-full sm:w-48 px-1 py-0 ">
  
<span className="
   text-base  h-4  " >
<Typography.Text style={{'width':'98%'}} ellipsis={true}>  
   {data.submit_user.about ?data.submit_user.about :'About company'} </Typography.Text>
   </span> 

</p>



<hr className=" sm:hidden" />
</div>
</div>
    </a>

</Link>
  ))


:
<div className='w-full flex justify-center' >

<Empty description="No Popular Shop found">(0) Item(s) found</Empty>
</div>}
 

  </div>   
  
 
   



     </div>
     </div>
)

}

export default  TopCompany