
import Link from 'next/link'
import {ShoppingFilled} from '@ant-design/icons';


function UploadDetail(){

return (

    <div className="flex md:flex-col w-full  md:w-1/3 lg:w-1/4  md:justify-center items-center p-5
 shadow-2xl rounded-lg bg-white my-2 "> 

 <p className="text-2xl font-extrabold px-3 py-0 center leading-tight md:w-full"
 style={{'textAlign':'center'}}>
<ShoppingFilled className="text-5xl" /></p>
      
      <div>
   <p className="text-2xl font-extrabold text-gray-800 px-0 mb-1 py-0 center leading-tight w-full"
    style={{'textAlign':'center'}}>
  Shop Hub

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start center text-lg mt-0 pt-0 ">   
Buy things you'll love, want or need  with shop cart.
</div>  

</div>
</div>
)

}

export default  UploadDetail