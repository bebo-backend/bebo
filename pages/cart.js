import Layout from '../components/layout'

import { BASE_URL,BASE_IMG_URL} from '../settings'
import {useState} from 'react'
import {LoadingOutlined,UserOutlined} from '@ant-design/icons';
import {Statistic,Avatar,Modal,notification,Tag,Typography} from "antd";
import useUser from '../lib/useUser'
import {myfetcher} from '../lib/ax-fetch'
import useSWR from 'swr'
import Link from 'next/link'
import {last} from 'lodash'
import axios from 'axios'
import {mutate} from 'swr'
import Cartrecommend from '../components/cartrecommend'







const Item = () =>{





  const { user,mutateUser } = useUser({ redirectTo: '/login' })
 

 const {data:content,error:RevError,mutate:mutateCart} = useSWR(()=>BASE_URL+"getcart/"+user?.username,myfetcher)
 // const {data:recommendation} = useSWR(()=>BASE_URL+"cartrecommend/"+user?.username,myfetcher)


const [contact,setContacts] =useState(false)
const [data,setCurrentData] =useState()

notification.config({
  placement: 'topRight',
  top: 200,
  duration: 3,
});

  // if (router.isFallback) {
  //   return <div className="w-full flex justify-center my-20 text-lg font-semibold">loading <LoadingOutlined /></div>
  // }






  const removeFromCart=async (itemId,title)=>{


   await axios.get(BASE_URL+"removefromcart/"+user?.username+'/'+itemId)
   mutateCart()
    mutate(BASE_URL+"getcartlen/"+user?.username+'/')
   notification.success({message:"Product ("+title+") has been removed from cart"})


  }




return (
  <Layout title="My cart">

  
<div className="flex-inline sm:flex mt-0 pt-1 sm:mt-12 sm:pl-1 w-full bg-white sm:pr-1"> 



{contact && data && <Modal closable={false}  
      visible={true} centered
      title={<h2>Exclusive Seller: <Avatar src={BASE_IMG_URL+data.submit_user.image} style={{"width":'35px',
'height':'35px'}} icon={<UserOutlined />}></Avatar> 

<span  className="ml-3 font-bold text-base uppercase ">{data.submit_user.agencyname}
</span></h2>}  okType="primary"  
      okText={<a onClick={e=>setContacts(false)}>Done </a>} 
      cancelText={<a onClick={e=>setContacts(false)}>Close </a>}>

{data.phone_no != data.submit_user.phone_no &&  
            <p className=" pl-4 m-0 ">
             <p className='m-0'> Phone No</p>

              <p className='uppercase text-base font-semibold mb-0'> {data.phone_no}  </p> 
            </p>
          }


            <p className="p-2 pl-4 m-0 ">
             <p className=''> Product Whatsapp No</p>

              <p className='uppercase text-base font-semibold mb-0'> {data.whatsapp_no} </p> 

            </p>

{data.email != data.submit_user.user.email &&  
            <p className="p-2 pl-4 m-0 ">
             <p className='mb-2'>Product E-mail</p>

              <p className='uppercase text-base font-semibold mb-0'> {data.email} </p> 

            </p>

          }

          {data.website != data.submit_user.website &&  
            <p className="p-2 pl-4 m-0 ">
             <p className='mb-2'> Product Website</p>

              <p className='uppercase text-base font-semibold mb-0'> {data.website} </p> 


            </p>
}

            <p className="p-2 pl-4 m-0">
             <p className='mb-2'> Seller Phone No</p>

              <p className='uppercase text-base font-semibold mb-0'> {data.submit_user.phone_no} </p> 


            </p>
{data.submit_user.website &&
            <p className="p-2 pl-4 m-0 ">
             <p className='mb-2'> Seller Website</p>

              <p className='uppercase text-base font-semibold mb-0'> {data.submit_user.website} </p> 


            </p>}

            <p className="p-2 pl-4 m-0">
             <p className='mb-2'> Seller E-mail</p>

              <p className='uppercase text-base font-semibold mb-0'> {data.submit_user.user.email} </p> 


            </p>

            </Modal>}



{content && 

<div className="w-full sm:my-6  shadow p-0 sm:p-0  text-black p-2 " > 
<div className="flex justify-between mb-5 p-5 items-center" >

<p className="text-base sm:text-2xl mb-0 font-bold">
My Shopping Bag: {Object.keys(content.data).length} items</p>
<Link href="/">

<a className="sm:text-base font-bold btn  shadow center h-10 flex justify-center items-center
rounded  mt-1 mx-4 sm:mx-6 px-3 text-black  hover:bg-gray-200 leading-tight" 
style={{'border':'1px solid black'}}>Continue Shopping</a>

</Link>

</div>



<div className="justify-start mb-3 sm:mx-4">


{
   content && Object.keys(content.data).length > 0 &&

    content.data.map((item,key)=>(
      
        

        
        <div className=" flex-inline sm:flex p-1 font-bold text-base cursor-pointer"> 


<div className="sm:w-full"> 

<p  className=" border-b-2 border-gray-300 p-1 px-5 m-1 mb-4  font-extrabold text-lg capitalize text-white "
 style={{'fontFamily':'monopo'}}>

 <h2><i className="mr-5 text-base text-red-600">Exclusive Seller:</i> <Avatar src={BASE_IMG_URL+item.submit_user.image} style={{"width":'35px',
'height':'35px'}} icon={<UserOutlined />}></Avatar> 

<span  className="ml-3 font-bold text-base">You
</span></h2></p>

<div>




<div className="flex-inline lg:flex justify-between ">
  <Link href={"/item/"+item.id+"/"+item.title}>
<div className="flex   hover:bg-gray-100 md:w-3/4" >

 { item.images && item.images[0] ?
       
          
          <img alt="first image" 
          className=" m-2 rounded-md sm:object-cover h-20 w-30 sm:h-40 sm:w-40" src={BASE_IMG_URL+last(item.images).images} />:
    <FileJpgOutlined className="text-5xl" style={{
    'textAlign':'center'
    }}  /> 
        }
        





        <div className="sm:m-2 ml-2 sm:mx-6 ">



  <p  className="font-extrabold text-base my-1 mb-2 text-black h-12 overflow-hidden
   sm:mr-4 ">{item.title} </p>

<p className="mt-1 my-1 text-base text-black overflow-hidden font-normal leading-tight " 
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




  <div className="m-0 hidden md:block md:w-1/4 ml-2 ">

<p className="px-1 py-0 rounded-lg font-normal"    style={{'fontFamily':'serif'}}>



<p className="mb-0">
  <span className='mr-3 underline'>Negotiable:</span> 
  <span className='uppercase text-base mb-1'> {item.negotiable}  </span>
</p>

<p className="flex m-0">

 {item.from_price != 0 ? <>
<Statistic  valueStyle={{'fontSize':'2rem'}} prefix={"₦"} value={item.from_price} ></Statistic>  
<span className=" flex text-xl font-bold items-center mx-3"> - </span>
<Statistic valueStyle={{'fontSize':'2rem'}} prefix={"₦"} value={item.to_price}></Statistic> 

</>:
<Statistic valueStyle={{'fontSize':'2rem'}} prefix={"₦"} value={item.price} ></Statistic> }
</p>


 <p className='mb-2 text-black'><strong> Delivery:</strong> <span className=' text-base mb-0'> {item.with_delivery =='Yes'? " Provided by seller":" Not Provided"} </span> </p>

{item.delivery_company &&<>

 <p className='mb-2 text-black '><strong>Delivery Company: </strong>  <span className='text-base mb-0'> {item.delivery_company} </span> </p>

</>
}

 <p className='mb-1 text-black '> <strong>Payments Method: </strong>  <span className=' text-base mb-0 '>{item.payment_type} </span>  </p>





  
</p>
        </div>




          <div className="m-2 sm:ml-2 p-5" style={{'textAlign':'center'}}>

<p className="text-md btn bg-blue-700 center h-10 p-1 lg:w-40 leading-tight flex justify-center items-center shadow 
rounded sm:mt-3 px-3 text-white hover:bg-blue-400" onClick={e=>{ setContacts(true); setCurrentData(item);}}>View contacts</p>


<p onClick={e=>removeFromCart(item.id,item.title)}  className="text-base center h-10 p-1 leading-tight 
mt-3 px-3 text-red-800 hover:text-red-500 pb-1 uppercase underline">remove</p>

        </div>



        </div>
</div>





 </div>




 </div>



    ))
}





</div>










</div>

}


</div>


<Cartrecommend content={content ? content.data :[]} />

  </Layout>


)
}



export default Item



