
import Link from 'next/link'
import {UserOutlined} from '@ant-design/icons';


function UploadItem(){

return (

    <div className="flex md:flex-col w-full  md:w-1/3 lg:w-1/4 m-2  md:justify-center items-center  py-5 sm:p-5
   bg-white sm:shadow-2xl rounded-lg px-2 "> 

   <p className="text-2xl font-extrabold px-3 py-0 center leading-tight md:w-full"
   style={{'textAlign':'center'}}>
  <UserOutlined className="text-4xl  sm:text-5xl mx-2" />
  
  </p>
   
      <div>
   <p className="text-base sm:text-2xl font-extrabold text-gray-900 py-0 center leading-tight w-full mb-1"
    style={{'textAlign':'center'}}>
  teba Account

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start sm:text-lg mt-0 pt-0 ">   
Create a teba account to advertise your product for Sell, Rent and Exchange </div>  
</div>

</div>
)

}

export default  UploadItem