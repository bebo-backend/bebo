
import Link from 'next/link'
import {ShopFilled} from '@ant-design/icons';



function PopularCategory(){

return (

   <div  className="flex md:flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4  justify-center items-center p-5
 shadow-2xl rounded-lg bg-white m-2"> 

 <p className="text-2xl font-extrabold px-3 py-0 center leading-tight md:w-full"
 style={{'textAlign':'center'}}>
<ShopFilled className="text-5xl" />

</p>
   
   <div>
      
   <p className="text-2xl font-extrabold text-gray-800 px-0 py-0 center leading-tight w-full mb-1"
    style={{'textAlign':'center'}}>
 Independent Seller

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start text-lg mt-0 pt-0 ">   

Build your  shop by uploading your products, item with Shop Hub

</div>   
 

  </div>



    </div>
)

}

export default  PopularCategory