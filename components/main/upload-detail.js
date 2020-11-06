
import Link from 'next/link'
import {ShoppingFilled} from '@ant-design/icons';


function UploadDetail(){

return (

<div className="flex md:flex-col w-full  
    md:w-1/3  m-2  md:justify-center items-center  py-5 
   bg-white sm:shadow-lg rounded-lg px-2 "> 


 <p className="text-2xl font-extrabold px-3 py-0  leading-tight
  flex justify-center items-center
 rounded-full bg-red-700 h-16 w-16 "
 style={{'textAlign':'center'}}>
<ShoppingFilled className="text-2xl  sm:text-3xl " style={{'color':'white'}} />

</p>


      
      <div className="mx-3 sm:mx-1 w-full">
   <p className="text-base sm:text-2xl font-extrabold text-gray-900 px-0 mb-1 py-0 center leading-tight w-full"
    style={{'textAlign':'center'}}>
  Shop Bag

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start center sm:text-lg mt-0 pt-0 ">   
Save things you'll love, want or need  for later consideration.
</div>  

</div>
</div>
)

}

export default  UploadDetail