
import Link from 'next/link'
import {Empty,Avatar,Statistic,Modal,Button,notification,Tag} from "antd";
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
    rounded-lg shadow-2xl justify-center" > 
 
  
 <p className="uppercase text-base font-extrabold pt-3 py-2 mb-5 border-b-2 border-gray-400">Profile data</p>
 <p className="">Username:</p>
 <p className="capitalize text-base font-semibold text-gray-900 mb-4 ">
 {data.user.username}</p>
 <p className="">Shop Name:</p>
 <p className="capitalize text-base font-semibold text-gray-900 mb-4  ">
 {data.agencyname}</p>

 <p className="">Account Created:</p>
 <p className="capitalize text-base font-semibold text-gray-900 mb-4  ">
 {data.created.split("T")[0]}</p>




     </div>

     <div className="mb-5 bg-white p-2 pl-3
     rounded-lg shadow-2xl justify-center overflow-hidden"   > 
 
  
 <p className="uppercase text-base font-extrabold pt-3 py-2 mb-5 border-b-2 border-gray-400">contact info</p>

 <p className="">Phone Number: <PhoneFilled/></p>
 <p className="capitalize text-base font-semibold text-gray-900 mb-4  ">
 {data.phone_no} </p> 

 <p className="">E-mail: <MailFilled/></p>
 <p className=" text-base font-semibold text-gray-900 mb-4 ">
 {data.user.email} </p>
 <p className="">Website:</p>
 <p className="text-base font-semibold  text-gray-900 mb-4 ">
 {data.website ? data.website:"not available"}</p>

     </div>
      </div>
)

}





























export function ItemInfo({itemdata,mutateProperty,setPage,page,about}){

notification.config({
  placement: 'topRight',
  top: 200,
  duration: 3,
});


return (


    <div className="m-0  mx-0 md:mx-8 text-black px-1 md:px-5 py-3 center leading-tight
     w-full sm:w-3/4 mb-5
 bg-white rounded-lg shadow-2xl justify-center " style={{'marginTop':'-40px'}} > 


 <p className="text-2xl px-0 py-0 center leading-tight  mb-4
     font-sans border-gray-400 border-b-2 " >ABOUT </p>

    <pre className="my-6 text-md sm:text-base px-3 leading-relaxed  whitespace-pre-wrap text-gray-800"> {about} </pre>

       
    <p className="sm:text-3xl text-lg text-gray-900 px-0 py-3 pt-6 center 
    leading-tight w-full font-extrabold mb-1  uppercase mt-6
     " style={{'textAlign':'center'}}>
 Build your teba account

    </p>
    <p className="sm:text-2xl px-0 py-0 center leading-tight w-full text-gray-900 mb-4
     font-sans " style={{'textAlign':'center'}}> Showcase your collections, by uploading your product(s) with Ads Hub </p>
    
    <div className="uppercase text-blue-800 font-bold text-lg w-full center  flex justify-center " >
    <Link href="/upload-item">
    <Button type="primary" size='large'>
    <a className="px-5 py-2 my-4 hover:text-blue-300 cursor-pointer text-white text-base">
    <CloudUploadOutlined /> Ads Hub </a></Button>
  </Link>  </div>
 

<p className=" sm:text-2xl text-lg  font-bold mt-5 font-sans border-b-2 border-gray-400">Ads (Product) ({itemdata && Object.keys(itemdata.res).length})</p>
<table className="table-auto overflow-scroll w-full">




{
   itemdata.res && Object.keys(itemdata.res).length > 0 &&

    itemdata.res.map((item,key)=>(
        

 <div className=" flex-inline sm:flex p-1 font-bold text-base cursor-pointer"> 



<div className="sm:w-full"> 


<div>


<div className="flex-inline lg:flex  justify-between">
  <Link href={"/item/"+item.id+"/"+item.title}>
<div className="flex   hover:bg-gray-100 " >

 { item.images && item.images[0] ?
       
          
          <img alt="first image" style={{'maxHeight':'150px','maxWidth':'160px'}}  
          className=" m-2 rounded-md object-cover h-20 w-20 sm:h-32 sm:w-32" src={BASE_IMG_URL+last(item.images).images} />:
    <FileJpgOutlined className="text-5xl" style={{
    'textAlign':'center'
    }}  /> 
        }
        


        <div className="m-2 sm:ml-6 ">

  <p  className="font-extrabold text-base my-1 mb-2 text-black leading-tight 
  h-10 overflow-hidden ">{item.title}</p>
  <p className="mt-2 my-2 text-base overflow-hidden font-normal leading-tight " 
   style={{'fontFamily':'serif',
        'maxHeight':'70px'}}>{item.category}</p>
    <p className="text-gray-600 text-base my-1 text-mg font-normal mb-0"    style={{'fontFamily':'serif',
        'maxHeight':'70px'}}>{item.address}</p>

<p>
      <Tag className=" rounded-none capitalize mb-0  " style={{
      'marginTop':'10px','border':'0px solid',
      'borderRadius':'13px','minWidth':'60px','backgroundColor':'red','color':'white',
      'textAlign':'center'}} >{item.acquire_type=='rent'?'rental':item.acquire_type }</Tag></p>  

        <p className="flex m-0 block md:hidden">

 {item.from_price != 0 ? <>
<Statistic  valueStyle={{'fontSize':'1.4rem'}} prefix={"₦"} value={item.from_price} ></Statistic>  
<span className=" flex text-xl font-bold items-center mx-3"> - </span>
<Statistic valueStyle={{'fontSize':'1.4rem'}} prefix={"₦"} value={item.to_price}></Statistic> 

</>:
<Statistic valueStyle={{'fontSize':'1.4rem'}} prefix={"₦"} value={item.price} ></Statistic> }
</p>

        </div>

  
</div>
</Link>
  <div className="m-0 sm:ml-3 hidden md:block w-3/5  ">

<p className=" px-1  py-1 rounded-lg ">



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







 <p className='mb-2 text-gray-700'> Delivery: <span className='capitalize text-base  mb-0'> {item.with_delivery =='Yes'? " Provided by Adser":" Not Provided"} </span> </p>

{item.delivery_company &&<>

 <p className='mb-2 text-gray-700 '> Delivery Company:   <span className='capitalize text-base  mb-0'> {item.delivery_company} </span> </p>

</>
}







  
</p>
        </div>




          <div className="mt-2 sm:ml-2 p-5" style={{'textAlign':'center'}}>

<p className="text-md btn bg-blue-700 center h-10 p-1 lg:w-40 leading-tight flex justify-center items-center shadow 
rounded-full sm:mt-3 px-3 text-white hover:bg-blue-400" onClick={e=>removeItem(item.id,mutateProperty,item.title)} >Remove</p>



        </div>



        </div>
</div>





 </div>




 </div>


    ))
}

</table>

{ itemdata && Object.keys(itemdata.res).length <= 0 && <div className="w-full flex justify-center mt-5">
    <Empty description="No collection available"><p className="text-base font-semibold">Upload product with Ads hub</p></Empty>
    </div>
}

{itemdata.next && <div className="mx-auto mt-10 mb-20 w-1/2 md:w-1/3">
          <button
            className="bg-red-600 border-solid border-2 hover:bg-white border-red-600 text-white hover:text-red-600 font-bold py-2 px-4 rounded-full w-full"
            disabled={!itemdata.next}
            onClick={e=>setPage(page+1)}
          >
            More Product
          </button>

        </div>

      }


     </div>
)

}


function removeItem(id,mutateProperty,title=""){
  const tit = title
axios.get(BASE_URL+'dashboard/remove-item/'+id).then(()=>{

   notification.success({message:tit+" product removed"})
    mutateProperty();

}

   
)
    ;
}

