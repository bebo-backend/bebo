
import Link from 'next/link'
import {ShopFilled} from '@ant-design/icons';



function PopularCategory(){

return (

   <div  className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4  justify-center items-center p-5
 shadow-lg rounded-lg bg-white m-2"> 

 <p className="text-2xl font-extrabold px-3 py-0 center leading-tight w-full"
 style={{'textAlign':'center'}}>
<ShopFilled className="text-5xl" />

</p>
   
      
   <p className="text-2xl font-extrabold text-gray-800 px-10 py-0 center leading-tight w-full"
    style={{'textAlign':'center'}}>
   Unique everything

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start text-lg mt-0 pt-0 ">   

Build your  shop by uploading your products, or you can find whatever you need (or really, really want).

</div>   
 

  



    </div>
)

}

export default  PopularCategory