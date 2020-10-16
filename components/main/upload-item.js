
import Link from 'next/link'
import {UserOutlined} from '@ant-design/icons';


function UploadItem(){

return (

    <div className="flex md:flex-col w-full  md:w-1/3 lg:w-1/4 m-2  justify-center items-center p-5
   bg-white shadow-2xl rounded-lg "> 

   <p className="text-2xl font-extrabold px-3 py-0 center leading-tight md:w-full"
   style={{'textAlign':'center'}}>
  <UserOutlined className="text-5xl" />
  
  </p>
   
      <div>
   <p className="text-2xl font-extrabold text-gray-800 py-0 center leading-tight w-full mb-1"
    style={{'textAlign':'center'}}>
  Shop Account

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start text-lg mt-0 pt-0 ">   
Create a Shop account on beBO to Sell, Rent or Exchange your product </div>  
</div>

</div>
)

}

export default  UploadItem