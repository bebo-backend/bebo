
import Link from 'next/link'
import {UserOutlined} from '@ant-design/icons';


function UploadItem(){

return (

    <div className="flex md:flex-col w-full  
    md:w-1/3  m-2  md:justify-center items-center  py-5 
   bg-white sm:shadow-lg rounded-lg px-2 "> 



   <p className="text-2xl font-extrabold px-3 py-2  leading-tight
  flex justify-center items-center
 rounded-full bg-yellow-700 h-16 w-16 "
 style={{'textAlign':'center'}}>
<UserOutlined className="text-2xl  sm:text-3xl " style={{'color':'white'}} />

</p>


   
      <div className="mx-3 sm:mx-1">
   <p className="text-base sm:text-2xl font-extrabold text-gray-900 py-0 center leading-tight w-full mb-1"
    style={{'textAlign':'center'}}>
  shoplist Account

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start sm:text-lg mt-0 pt-0 ">   
Create an account to advertise your product for sell, rent and exchange. </div>  
</div>

</div>
)

}

export default  UploadItem