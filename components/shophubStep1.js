
import React, { Component,useState } from 'react';
import {Input,Button,Row,Col,Form,Divider,
Modal,Cascader} from "antd";
import {LoadingOutlined,WhatsAppOutlined,MailOutlined,PhoneOutlined,EnvironmentOutlined,
 InfoCircleOutlined} from '@ant-design/icons';
import Options from "../contrib/category-options"




const Step1=({handlechange,data})=>{




 return <form className="mb-10 sm:mx-10">
 <h2 className='text-xl md:text-2xl mb-2 text-gray-900'> Enter product details  </h2>
 <hr className="mb-8 " />


<div className="grp-input">
<label className="capitalize font-semibold my-2 text-lg  " htmlFor="title">Title * </label>
<div>

<div className="my-4 mb-8 " >
<Input name="title" prefix={<InfoCircleOutlined />}   className="h-12 " required allowClear
onChange={e=>handlechange(e.target.value,'title')} autoFocus  autoComplete="true" 
 placeholder="eg. 3 Bedroom Flats, New Gks Generator(Black)" value={data['title']} 
/>


</div>
</div>

</div>

<div className="grp-input">
<label className="capitalize text-lg font-semibold my-2 "  htmlFor="cate">Category * </label>

<p className="bg-white my-4 mb-8 py-1  flex items-center w-full  rounded" style={{'border':'1px solid silver'}}>
<Cascader  className="h-8 w-full  hover:border-2 hover:border-blue-300" bordered={false}
displayRender={(e,f)=>e } expandTrigger="hover" 
 options={Options} onChange={e=>handlechange(e,'category')} 
placeholder={ data['category'] ?data['category']:"Select Category"}
 />

</p>
</div>




<div className="grp-input">

<label className="capitalize text-lg font-semibold my-2 " htmlFor="locn">Address * </label>
<div className="my-4 mb-8 " >

<Input  className="h-12" name="locn" required allowClear  prefix={<EnvironmentOutlined/>}
onChange={e=>handlechange(e.target.value,'location')}
 value={data['location']}  autoComplete="true"  placeholder="eg. Ikeja, Lagos State"
/>

</div>
</div>



<div >
<div className="w-full flex sm:flex-row flex-col">
 <div className="w-full sm:w-1/2 mr-4">
 
 
<label className="capitalize text-lg font-semibold my-2 "  htmlFor="email">E-mail *</label>
<div className="my-4 mb-8 " >

<Input  className="h-12  " name="email" required allowClear prefix={<MailOutlined />} type="email"  
onChange={e=>handlechange(e.target.value,'email')}   autoComplete="true" value={data['email']}
  placeholder="eg. teba@gks.co"
/> 
</div>
</div>

 <div className="w-full sm:w-1/2">  
<label  htmlFor="tel" className="capitalize text-lg font-semibold my-2 " >Phone-No *</label>
<Input className="my-4 h-12   mb-8" name="tel" required allowClear prefix={<PhoneOutlined/>} type="tel" 
onChange={e=>handlechange(e.target.value,'tel')}  autoComplete="true"  
value={data['tel']} placeholder="i.e. 08061344475, 08061344475"
/> 


</div>

</div>

</div>



<div className="grp-input">

<label htmlFor="tel" className="capitalize text-lg font-semibold my-2 " >Website (Optional) </label>

<div className="my-4 mb-8 " >

<Input className="h-12" name="website"  required allowClear prefix={"http://"} type="text"
 onChange={e=>handlechange(e.target.value,'website')} 
 value={data['website']} autoComplete="true"  placeholder="i.e. www.alaba21store.com"
/> 
</div>
</div>



<div className="grp-input">

<label htmlFor="tel" className="capitalize text-lg font-semibold my-2 " >Whatsapp Contact (Optional) </label>
<div className="my-4 mb-8 " >

<Input className="h-12 " name="whatsapp_no" required allowClear prefix={<WhatsAppOutlined />} type="text"
onChange={e=>handlechange(e.target.value,'whatsapp_no')}  value={data['whatsapp_no']}   autoComplete="true"  placeholder="Enter your whatsapp contact"
/> 
</div>
</div>





</form>

}


export default Step1