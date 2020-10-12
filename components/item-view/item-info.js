
import {Avatar,Rate,Tag,Statistic,Button,Modal} from 'antd';
import { BASE_IMG_URL,BASE_URL } from '../../settings'
import {CheckOutlined,UserOutlined,EnvironmentOutlined,CarOutlined,LoadingOutlined} from '@ant-design/icons';
import Link from 'next/link'
import axios from 'axios'
import {mutate} from 'swr'
import {useState} from 'react'


const Index=({data, isLoggedIn,username})=>{

const [load,setLoad] = useState(false)
const [rateLoad,setRateLoad] = useState(false)
const [contact,setContacts] =useState(false)


const getDuration=(duration)=>{

switch(duration){

  case("Weekly"):{

    return "Week(s)"
    break;
  }

  case("Monthly"):{

    return "Month(s)"
    break;
  }

  case("Yearly"):{

    return "Year(s)"
    break;
  }
}

}

const addToCart=()=>{
setLoad(true)
axios.get(BASE_URL+"addtocart/"+data.id+'/'+username).then(res=>{
	mutate(BASE_URL+"getcartlen/"+username+'/')
	setLoad(false)

})

}

const handleRate=(value)=>{

setRateLoad(true)
axios.get(BASE_URL+"addrate/"+data.id+'/'+value+'/'+username).then(res=>{
	
	setRateLoad(false)
	mutate(BASE_URL+'get_reviews/'+data.id+'/')

})

}


 return <div className="mb-10 md:pr-2  px-5  md:px-1" style={{'marginLeft':'-15px'}}>


{contact && data && <Modal closable={false}  
      visible={contact} centered
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





<p className="text-4xl font-bold mb-0 mx-0"> {data.submit_user.agencyname} </p>

<span className="text-lg  text-gray-600 mt-0"> ({data.submit_user.rate_count}) 
  Rate seller 
<span className="mx-5"><Rate onChange={e=>handleRate(e)} defaultValue={data.submit_user.rate} allowClear={false}
> </Rate> </span> {rateLoad &&  <LoadingOutlined />}</span>

<p className="text-3xl font-normal leading-tight mt-6 mb-2" style={{
	'fontFamily':'serif'
}}> {data.title}</p>


<p>{data.submit_user.rate >=0 && <Tag color="pink" style={{'padding':'5px',
'borderRadius':'10px','border':'0px solid','paddingLeft':'10px',"color":'black'}} 
className="rounded-full"> Bestseller</Tag>}</p>







<p className="flex-inline shadow-lg p-2 rounded-lg pl-4">
<p className="mb-0">
  <span className='mr-3'>Negotiable:</span> 
  <span className='uppercase font-bold text-base mb-1'> {data.negotiable}  </span>
</p>

<p className="flex">

 {data.from_price != 0 ? <>
<Statistic  valueStyle={{'fontSize':'2.2rem'}} prefix={"₦"} value={data.from_price} ></Statistic>  
<span className=" flex text-xl font-bold items-center mx-3"> - </span>
<Statistic valueStyle={{'fontSize':'2.2rem'}} prefix={"₦"} value={data.to_price}></Statistic> 

</>:
<Statistic valueStyle={{'fontSize':'2.2rem'}} prefix={"₦"} value={data.price} ></Statistic> }
</p>
</p>

<p className="mt-0 text-gray-500"> Local taxes included (where applicable) </p>
{isLoggedIn ?
	<div onClick={e=>addToCart()} className='btn w-full center h-10 flex
	 justify-center items-center bg-blue-700
rounded-md mt-3 text-white  hover:bg-blue-500 my-4'>

<a className="text-lg text-white font-extrabold "
> Save to cart {load &&  <LoadingOutlined />}</a>


</div>


 :<div className='btn w-full center h-10 flex justify-center items-center bg-teal-700
rounded-md mt-3 text-white  hover:bg-teal-500 my-4'>
<Link href="/login">
<a className="text-lg font-extrabold text-white"
> Login to Save to cart</a>
</Link>

</div>

}

  <div onClick={e=>{ setContacts(true);}} className='btn w-full center h-10 flex
   justify-center items-center bg-red-700
rounded-md mt-3 text-white  hover:bg-red-500 my-4'>

<a className="text-lg text-white font-extrabold "
> View Contacts</a>


</div>



<p className=" mb-1 mt-2 text-red-700 text-base" style={{
	'fontFamily':'serif'
}}>Exclusive Seller on beBO: </p>


<Avatar src={BASE_IMG_URL+data.submit_user.image} style={{"width":'35px',
'height':'35px'}} icon={<UserOutlined />}></Avatar> 

<span  className="ml-3 font-bold text-base">{data.submit_user.user.username}
</span>
<hr className="my-3" />

<p className='mt-2 text-gray-500  font-semibold'> <CheckOutlined className=" text-black text-base mr-2" /> Instock</p>


  



<div className="odd:bg-gray-700">

<p className="shadow-lg p-2 pl-4 rounded-lg">
 <p className='mb-2'> Acquire </p>

  <p className='uppercase text-base font-semibold mb-0'> {data.acquire_type} </p> 


</p>



{ data.condition && 
	<p className="shadow-lg p-2 pl-4 rounded-lg">
 <p className='mb-2'> Condition</p>

  <p className='uppercase text-base font-semibold mb-0'> {data.condition} </p> 
</p>

}

	<p className="shadow-lg p-2 pl-4 rounded-lg">
 <p className='mb-2'> Location <EnvironmentOutlined /></p>

  <p className='uppercase text-base font-semibold mb-0'> {data.address} </p> 
</p>






{data.acquire_type=='rent' && <div>
{data.duration &&

<p className="shadow-lg p-2 pl-4 rounded-lg">
 <p className='mb-2'> Duration </p>

  <p className='uppercase text-base font-semibold mb-0'> {data.dur_count} {
     getDuration(data.duration)} </p> 

</p>


}
</div>
}


<p className="shadow-lg p-2 pl-4 rounded-lg">
 <p className='mb-2'> Delivery <CarOutlined /></p>

  <p className='uppercase text-base font-semibold mb-0'> {data.with_delivery =='Yes'? " Provided by seller":" Not Provided"} </p> 
</p>



{data.delivery_company &&
	<p className="shadow-lg p-2 pl-4 rounded-lg">
 <p className='mb-2'> Delivery Company</p>

  <p className='uppercase text-base font-semibold mb-0'> {data.delivery_company} </p> 
</p>


}

	<div className="shadow-lg p-2 pl-4 rounded-lg">
 <p className='mb-2'> Payments Method</p>

  <p className='uppercase text-base font-semibold mb-0'>{data.payment_type} </p> 
</div>




 {data.submit_user.website &&

<div className='btn w-full cursor-pointer center h-10 flex justify-center items-center bg-red-700
rounded-md mt-3 text-white  hover:bg-red-500 my-4'>

<a href={"http://"+data.submit_user.website} className="text-lg text-white font-extrabold "
> Visit Website</a>


</div>


}








</div>







</div>

}


export default Index