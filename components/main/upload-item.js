
import Link from 'next/link'
import {ShoppingFilled} from '@ant-design/icons';


function UploadItem(){

return (

    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2  justify-center items-center p-5
   bg-white shadow-lg rounded-lg "> 

   <p className="text-2xl font-extrabold px-3 py-0 center leading-tight w-full"
   style={{'textAlign':'center'}}>
  <ShoppingFilled className="text-5xl" />
  
  </p>
   
      
   <p className="text-2xl font-extrabold text-gray-800 px-10 py-0 center leading-tight w-full"
    style={{'textAlign':'center'}}>
  Independent Seller

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start text-lg mt-0 pt-0 ">   
Buy directly from someone who put their heart and soul into making something special.
</div>  


</div>
)

}

export default  UploadItem