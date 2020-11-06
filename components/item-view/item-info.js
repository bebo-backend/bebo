
import {Avatar,Rate,Tag,Statistic,Button,Modal,Table,notification} from 'antd';
import { BASE_IMG_URL,BASE_URL } from '../../settings'
import {CheckOutlined,UserOutlined,EnvironmentFilled,CarFilled,LoadingOutlined,CloudUploadOutlined} from '@ant-design/icons';
import Link from 'next/link'
import axios from 'axios'
import {mutate} from 'swr'
import {useState} from 'react'
import Description from './description'


const Index=({data, isLoggedIn,username})=>{

const [load,setLoad] = useState(false)
const [rateLoad,setRateLoad] = useState(false)
const [contact,setContacts] =useState(false)


notification.config({
  placement: 'topRight',
  top: 200,
  duration: 3,
});


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

const addToCart=(title)=>{
setLoad(true)
axios.get(BASE_URL+"addtocart/"+data.id+'/'+username).then(res=>{
	mutate(BASE_URL+"getcartlen/"+username+'/')
	setLoad(false)
  notification.success({message:"Product ("+title+") has been saved"})

})

}

const handleRate=(value)=>{

setRateLoad(true)
axios.get(BASE_URL+"addrate/"+data.id+'/'+value+'/'+username).then(res=>{
	
	setRateLoad(false)
	mutate(BASE_URL+'get_reviews/'+data.id+'/')

   notification.success({message:"Seller has been rated "+value+" star"})


})

}

  const contactDataSource = data && Object.keys(data).length ? [
        {
          key: '1',
          name: <span className="font-bold">Type</span>,
          value: <span className="font-bold capitalize">{data.acquire_type}</span>,
      
        }, 
        {
            key: '2',
            name: <span className="font-bold">Condition</span>,
            value:  <span className="font-bold capitalize">{data.condition}</span>,
          },

          {
            key: '3',
            name: <span className="font-bold"><EnvironmentFilled /> Location</span>,
            value: <span className="wrap">  {data.address}</span>,
          },

                    
          {
            key: '4',
            name: <span className="font-bold">Delivery</span>,
            value: data.with_delivery ,
          },
                    
        data.with_delivery !=='No' &&  {
            key: '5',
            name: <span className="font-bold">Delivery Company</span>,
            value: data.delivery_company ,
          },

                    
          {
            key: '6',
            name: <span className="font-bold">Payments Method</span>,
            value: data.payment_type ,
          },
          { key:'7',
          name:data.acquire_type=='rent' && <span className="font-bold">Duration</span>,
          value: data.acquire_type=='rent' && data.duration &&

<p className="flex sm:block my-0 p-2 pl-4 rounded-lg">


  <p className='capitalize text-base  mb-0'> {data.duration} {
     getDuration(data.dur_count)} </p> 

</p>



}
      ]:[];
      
      const contactColumns = [
        {
       
            dataIndex: 'name',
            key: 'name',
          },
        {
          
          dataIndex: 'value',
          key: 'value',
        },
   
      ];





 return <div className="mb-10 md:pr-2  px-5  md:px-1" style={{'marginLeft':'-15px'}}>


{contact && data && <Modal closable={false}  
      visible={contact} centered
      title={<h2 className="mt-10">Exclusive Seller: <Avatar src={BASE_IMG_URL+data.submit_user.image} style={{"width":'35px',
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




<Link href={"/@/"+data.submit_user.agencyname.replace('&','and')}>
<a className="sm:text-4xl text-2xl font-bold mb-0 mx-0 cursor-pointer z-60 text-black"> {data.submit_user.agencyname} </a>
</Link>
<p className="my-0"></p>
<span className="text-lg  text-gray-600 mt-0"> ({data.submit_user.rate_count}) 
  Rate seller 
<span className="mx-5"><Rate onChange={e=>handleRate(e)} defaultValue={data.submit_user.rate} allowClear={false}
> </Rate> </span> {rateLoad &&  <LoadingOutlined />}</span>

<p className="sm:text-2xl text-lg font-normal mt-3 my-4 " > {data.title}</p>


<p>{data.submit_user.rate >=0 && <Tag  style={{'paddingRight':'10px',
'borderRadius':'10px','border':'0px solid','paddingLeft':'10px','backgroundColor':'red','color':'white'}} 
className="rounded-full"> Exclusive</Tag>}</p>







<p className="flex-inline shadow-sm pt-2 rounded-lg pl-4">
<p className="mb-0 pb-0">
  <span className='mr-3'>Negotiable:</span> 
  <span className='capitalize font-bold text-base mb-1'> {data.negotiable}  </span>
</p>

<p className="flex pb-0">

 {data.from_price != 0 ? <>
<Statistic  valueStyle={{'fontSize':'2.2rem'}} prefix={"₦"} value={data.from_price} ></Statistic>  
<span className=" flex text-xl font-bold items-center mx-3"> - </span>
<Statistic valueStyle={{'fontSize':'2.2rem'}} prefix={"₦"} value={data.to_price}></Statistic> 

</>:
<Statistic valueStyle={{'fontSize':'2.2rem'}} prefix={"₦"} value={data.price} ></Statistic> }
</p>
</p>


<p className=" mb-1 mt-2 text-gray-500 text-base" style={{
	'fontFamily':'serif'
}}>Exclusive Seller on teba: <span className='ml-2 text-black  font-semibold'> <CheckOutlined className=" text-black text-base mr-0" /> Instock</span></p> 


<Avatar src={BASE_IMG_URL+data.submit_user.image} style={{"width":'35px',
'height':'35px'}} icon={<UserOutlined />}></Avatar> 

<span  className="ml-3 font-bold text-base"><Link href={"/@/"+data.submit_user.agencyname.replace('&','and')}>
<a className="text-lg font-bold mb-0 mx-0 cursor-pointer z-60"> {data.submit_user.agencyname} </a>
</Link>
</span>
<hr className="my-3" />




  



<div className="odd:bg-gray-700 flex flex-col">

  <div onClick={e=>{ setContacts(true);}} className='btn w-full center h-10 flex
   justify-center items-center 
rounded-md mt-3 text-white  hover:bg-blue-500 my-4 bg-blue-700' >

<a className="sm:text-lg text-base font-extrabold text-white w-full "style={{'textAlign':'center'}}
> Show Contacts</a>


</div>

{isLoggedIn ?
  <div onClick={e=>addToCart(data.title)} className='btn w-full center h-10 flex
   justify-center items-center bg-blue-700
rounded-md mt-1 text-white  hover:bg-blue-500 my-4'>

<a className="sm:text-lg text-base text-white font-extrabold "
> Save Product {load &&  <LoadingOutlined />}</a>


</div>


 :<div className='btn w-full center h-10 flex justify-center items-center bg-red-700
rounded-md mt-3 text-white  hover:bg-red-500 my-4'>
<Link href="/login">
<a className="sm:text-lg text-base font-extrabold text-white w-full "style={{'textAlign':'center'}}
> Login to Save to cart</a>
</Link>

</div>

}

<div className=" md:hidden block">

<Description data={data} />




</div>


  <p>  <Table  sortDirections={["ascend","descend"]}  tableLayout="auto" 

      dataSource={contactDataSource} 
      columns={contactColumns} />
      </p>







 {data.submit_user.website &&

<div className='btn w-full cursor-pointer center h-10 flex justify-center items-center bg-teal-700
rounded-md mt-3 text-white  hover:bg-teal-500 my-4'>

<a href={"http://"+data.submit_user.website} className="sm:text-lg text-base font-extrabold text-white w-full "style={{'textAlign':'center'}}
> Visit Website</a>


</div>


}

 <div className="bg-gray-300 font-bold text-lg w-full center py-4 flex items-center flex-col  justify-center " >
 <p className="w-full font-bold text-2xl text-black" style={{'textAlign':'center'}}>Post Ad like this </p>
    <Link href="/upload-item">
    <Button type="primary" size='large'>
    <a className="px-5 py-2 my-4 hover:text-blue-300 cursor-pointer text-white text-base">
    <CloudUploadOutlined /> Ads Hub </a></Button>
  </Link>  </div>









</div>







</div>

}


export default Index