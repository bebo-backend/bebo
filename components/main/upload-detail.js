
import Link from 'next/link'
import {UploadOutlined} from '@ant-design/icons';


function UploadDetail(){

return (

    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4  justify-center items-center p-5
 shadow-lg rounded-lg bg-white m-2 "> 

 <p className="text-2xl font-extrabold px-3 py-0 center leading-tight w-full"
 style={{'textAlign':'center'}}>
<UploadOutlined className="text-5xl" />

</p>
      
   <p className="text-2xl font-extrabold text-gray-800 px-10 py-0 center leading-tight w-full"
    style={{'textAlign':'center'}}>
  Shop Hub

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start center text-lg mt-0 pt-0 ">   
Upload item(s) to your shop with Shop Hub for rental, sale, and  exchange.
</div>  


</div>
)

}

export default  UploadDetail