
import Link from 'next/link'
import {PlusOutlined} from '@ant-design/icons';



function PopularCategory(){

return (

<div className="flex md:flex-col w-full  
    md:w-1/3  m-2  md:justify-center items-center  py-5 
   bg-white sm:shadow-lg rounded-lg px-2 "> 

   <Link href="/upload-item">
 <p className="text-2xl font-extrabold px-3 py-0  leading-tight
  flex justify-center items-center
 rounded-full bg-green-700 h-16 w-16 "
 style={{'textAlign':'center'}}>
<PlusOutlined
 className="text-2xl  sm:text-3xl " style={{'color':'white'}} />

</p>

</Link>
   
   <div className="flex items-center justify-center w-full flex-col mx-3 sm:mx-1 ">
      
   <p className="text-base sm:text-2xl font-extrabold text-gray-900 px-0 py-0 center leading-tight w-full mb-1"
    style={{'textAlign':'center'}}>
 Post ad for free

   </p>
   
<div style={{'textAlign':'center'}} className=" flex flex-1 items-start sm:text-lg mt-0 pt-0 ">   

Got something to sell, rent or exchange ?

</div>   
 

  </div>



    </div>
)

}

export default  PopularCategory