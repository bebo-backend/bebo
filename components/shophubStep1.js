
import React, { Component,useState } from 'react';
import {Input,Button,Row,Col,Form,Divider,
Modal,Cascader} from "antd";
import {LoadingOutlined,WhatsAppOutlined,MailFilled,PhoneFilled,EnvironmentFilled,
 InfoCircleFilled} from '@ant-design/icons';
import Options from "../contrib/category-options"




const Step1=({handlechange,data})=>{




 return <form className="mb-10 sm:mx-10">
 <h2 className='text-xl md:text-2xl font-bold mb-5 uppercase text-gray-700'> Details:  </h2>
 <hr className="mb-8" />


<div className="grp-input">
<label className="capitalize font-semibold my-2 text-lg  " htmlFor="title">Title * </label>
<div>
<Input name="title" prefix={<InfoCircleFilled />}   className="my-4 h-12 mb-8   " required allowClear
onChange={e=>handlechange(e.target.value,'title')} autoFocus  autoComplete="true" 
 placeholder="eg. 3 Bedroom Flats, New Gks Generator(Black)" value={data['title']} 
/>


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
<Input  className="my-4 h-12 mb-8" name="locn" required allowClear  prefix={<EnvironmentFilled/>}
onChange={e=>handlechange(e.target.value,'location')}
 value={data['location']}  autoComplete="true"  placeholder="eg. Ikeja, Lagos State"
/>

</div>



<div className="grp-input">
<Row gutter={[12, 12]} >
 <Col>
 
 
<label className="capitalize text-lg font-semibold my-2 "  htmlFor="email">E-mail *</label>
<Input  className="my-4 h-12  mb-8 " name="email" required allowClear prefix={<MailFilled/>} type="email"  
onChange={e=>handlechange(e.target.value,'email')}   autoComplete="true" value={data['email']}
  placeholder="eg. beBO@gks.co"
/> 
</Col>

 <Col>  
<label  htmlFor="tel" className="capitalize text-lg font-semibold my-2 " >Phone-No *</label>
<Input className="my-4 h-12   mb-8" name="tel" required allowClear prefix={<PhoneFilled/>} type="tel" 
onChange={e=>handlechange(e.target.value,'tel')}  autoComplete="true"  
value={data['tel']} placeholder="i.e. 08061344475, 08061344475"
/> 


</Col>

</Row>

</div>



<div className="grp-input">

<label htmlFor="tel" className="capitalize text-lg font-semibold my-2 " >Website (Optional) </label>
<Input className="my-4 h-12   mb-8" name="website"  required allowClear prefix={"http://"} type="text"
 onChange={e=>handlechange(e.target.value,'website')} 
 value={data['website']} autoComplete="true"  placeholder="i.e. www.alaba21store.com"
/> 
</div>



<div className="grp-input">

<label htmlFor="tel" className="capitalize text-lg font-semibold my-2 " >Whatsapp Contact (Optional) </label>
<Input className="my-4 h-12 " name="whatsapp_no" required allowClear prefix={<WhatsAppOutlined />} type="text"
onChange={e=>handlechange(e.target.value,'whatsapp_no')}  value={data['whatsapp_no']}   autoComplete="true"  placeholder="Enter your whatsapp contact"
/> 
</div>





</form>

}


export default Step1