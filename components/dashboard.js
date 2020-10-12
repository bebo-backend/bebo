
import Link from 'next/link'
import {Empty,Avatar,Statistic,Modal} from "antd";
import {BASE_IMG_URL,BASE_URL} from '../settings'
import {MailFilled,PhoneFilled,UserOutlined,CloudUploadOutlined,
    FileJpgOutlined,ClearOutlined} from '@ant-design/icons';
import {last} from 'lodash'
import axios from 'axios'
import {useState} from 'react'



export function ProfileInfo({data,mutateAccount}){


return (
<div className="md:ml-5 mb-5  text-black p-2 center leading-tight  w-full sm:w-1/4   "   style={{'marginTop':'-40px'}}>


    <div className="mb-5 bg-white p-2 pl-3 overflow-hidden
    rounded-lg shadow-lg justify-center" > 
 
  
 <p className="uppercase text-base font-extrabold pt-3 py-2 mb-5 border-b-2">Profile data</p>
 <p className="">Username:</p>
 <p className="capitalize text-base font-semibold text-gray-900  ">
 {data.user.username}</p>
 <p className="">Shop Name:</p>
 <p className="capitalize text-base font-semibold text-gray-900  ">
 {data.agencyname}</p>

 <p className="">Account Created:</p>
 <p className="capitalize text-base font-semibold text-gray-900  ">
 {data.created.split("T")[0]}</p>




     </div>

     <div className="mb-5 bg-white p-2 pl-3
     rounded-lg shadow-lg justify-center overflow-hidden"   > 
 
  
 <p className="uppercase text-base font-extrabold pt-3 py-2 mb-5 border-b-2 ">contact info</p>

 <p className="">Phone Number: <PhoneFilled/></p>
 <p className="capitalize text-base font-semibold text-gray-900  ">
 {data.phone_no} </p> 

 <p className="">E-mail: <MailFilled/></p>
 <p className=" text-base font-semibold text-gray-900  ">
 {data.user.email} </p>
 <p className="">Website:</p>
 <p className="text-base font-semibold  text-gray-900 ">
 {data.website ? data.website:"not available"}</p>

     </div>
      </div>
)

}





























export function ItemInfo({itemdata,mutateProperty,setPage,page}){


return (


    <div className="m-0  mx-3 md:mx-16 text-black px-1 md:px-5 py-3 center leading-tight w-full sm:w-3/4 mb-5
 bg-white rounded-lg shadow-lg justify-center " style={{'marginTop':'-40px'}} > 




       
    <p className="sm:text-4xl text-2xl px-0 py-3 pt-6 center leading-tight w-full font-extrabold mb-1 uppercase
     " style={{'textAlign':'center'}}>
 Build your Shop

    </p>
    <p className="text-lg px-0 py-0 center leading-tight w-full font-semibold text-gray-700
     font-sans " style={{'textAlign':'center'}}> Showcase your collections, by uploading your item on Shop Hub </p>
    
    <div className="uppercase text-blue-800 font-bold text-lg w-full center  flex justify-center " >
    <Link href="/upload-item">
    <a className="border-2 border-blue-900 rounded-md px-5 py-2 my-4 hover:bg-blue-300 cursor-pointer">
    <CloudUploadOutlined /> Shop Hub </a>
  </Link>  </div>
 
 
<hr className="my-3" />   

<p className=" text-lg uppercase font-bold mt-5">collections ({itemdata && Object.keys(itemdata).length})</p>
<table className="table-auto overflow-scroll w-full">




{
   itemdata.res && Object.keys(itemdata.res).length > 0 &&

    itemdata.res.map((item,key)=>(
        

 <div className=" flex-inline sm:flex p-1 font-bold text-base cursor-pointer"> 



<div className="sm:w-full"> 

<p  className=" border-b-2 border-gray-300 p-1 px-5 m-1 mb-4  font-extrabold text-lg capitalize text-white "
 style={{'fontFamily':'monopo'}}>

 <h2><i className="mr-5 text-base">Exclusive Seller:</i> <Avatar src={BASE_IMG_URL+item.submit_user.image} style={{"width":'35px',
'height':'35px'}} icon={<UserOutlined />}></Avatar> 

<span  className="ml-3 font-bold text-lg uppercase">You
</span></h2></p>

<div>


<div className="flex-inline lg:flex  justify-between">
  <Link href={"/item/"+item.id+"/"+item.title}>
<div className="flex   hover:bg-gray-100 " >

 { item.images && item.images[0] ?
       
          
          <img alt="first image" style={{'maxHeight':'150px','maxWidth':'160px'}}  className=" m-2 rounded-md object-cover" src={BASE_IMG_URL+last(item.images).images} />:
    <FileJpgOutlined className="text-5xl" style={{
    'textAlign':'center'
    }}  /> 
        }
        


        <div className="m-2 sm:ml-6 ">

  <p  className="font-extrabold text-lg my-1 mb-3 text-black leading-tight">{item.title}</p>
  <p className="mt-2 my-2 text-lg overflow-hidden font-normal leading-tight " 
   style={{'fontFamily':'serif',
        'maxHeight':'70px'}}>{item.category}</p>
    <p className="text-gray-600 text-base my-1 text-mg font-normal mb-0">{item.address}</p>

        <p className="mt-2 my-3 text-lg overflow-hidden text-gray-600 font-normal leading-tight capitalize "  style={{'fontFamily':'serif',
        'maxHeight':'70px'}}>{item.acquire_type}</p>
        </div>

  
</div>
</Link>
  <div className="m-0 sm:ml-6 ">

<p className="shadow-md px-4  py-4 rounded-lg ">



<p className="mb-0">
  <span className='mr-3 underline'>Negotiable:</span> 
  <span className='uppercase font-bold text-base mb-1'> {item.negotiable}  </span>
</p>

<p className="flex m-0">

 {item.from_price != 0 ? <>
<Statistic  valueStyle={{'fontSize':'1.5rem'}} prefix={"₦"} value={item.from_price} ></Statistic>  
<span className=" flex text-xl font-bold items-center mx-3"> - </span>
<Statistic valueStyle={{'fontSize':'1.5rem'}} prefix={"₦"} value={item.to_price}></Statistic> 

</>:
<Statistic valueStyle={{'fontSize':'1.5rem'}} prefix={"₦"} value={item.price} ></Statistic> }
</p>







 <p className='mb-2 text-gray-700'> Delivery: <span className='uppercase text-base font-semibold mb-0'> {item.with_delivery =='Yes'? " Provided by seller":" Not Provided"} </span> </p>

{item.delivery_company &&<>

 <p className='mb-2 text-gray-700 '> Delivery Company:   <span className='uppercase text-base font-semibold mb-0'> {item.delivery_company} </span> </p>

</>
}







  
</p>
        </div>




          <div className="mt-2 sm:ml-2 p-5" style={{'textAlign':'center'}}>

<p className="text-md btn bg-blue-700 center h-10 p-1 lg:w-40 leading-tight flex justify-center items-center shadow 
rounded-full mt-3 px-3 text-white hover:bg-blue-400" onClick={e=>removeItem(item.id)} >Remove</p>



        </div>



        </div>
</div>





 </div>




 </div>


    ))
}

</table>

{ itemdata && Object.keys(itemdata).length <= 0 && <div className="w-full flex justify-center mt-5">
    <Empty description="No collection available"><p className="text-base font-semibold">Upload item on Shop Hub</p></Empty>
    </div>
}

<div className="mx-auto mt-10 mb-20 w-1/2 md:w-1/3">
          <button
            className="bg-red-600 border-solid border-2 hover:bg-white border-red-600 text-white hover:text-red-600 font-bold py-2 px-4 rounded-full w-full"
            disabled={!itemdata.next}
            onClick={e=>setPage(page+1)}
          >
            {itemdata.next ?'Load More Product': 'No more Product'}
          </button>

        </div>


     </div>
)

}


function removeItem(id){
axios.get(BASE_URL+'dashboard/remove-item/'+id).then(

    mutateProperty()
)
    ;
}

