
import {Input,Button,Row,Col,Form,Divider,Radio,Select,
InputNumber,Collapse} from "antd";
import {InfoCircleOutlined, UploadOutlined,PlusCircleOutlined,
LoadingOutlined,FileImageOutlined,UpCircleOutlined,WhatsAppOutlined,
CarOutlined,PayCircleOutlined,CheckOutlined} from '@ant-design/icons';








const Step2=({handlechange, data})=>{


return <div className="mb-10 sm:mx-10">

 <h2 className='text-xl md:text-2xl mb-2 text-gray-900'> Enter additional details for product  </h2>

 
<hr className="mb-8" />


<div className="grp-input mb-5">

<label className="capitalize text-lg font-semibold my-2 " htmlFor="acquire_type">Acquire Type </label>

<div>

<Radio.Group style={{'marginTop':'14px','marginBottom':'15px'}}   autoFocus 
onChange={e=>handlechange(e.target.value,'acquire_type')}  
name="acqure_type" defaultValue={data['acqure_type']? data['acqure_type']:"sale"}  buttonStyle="outline">

<Radio value="sale">Sale</Radio>
<Radio value="rent">Rental</Radio>
<Radio value="exchange">Exchange</Radio>

</Radio.Group> 
 
</div>

</div>



<div className="grp-input mb-5">
<label htmlFor="condtion" className="capitalize text-lg font-semibold my-2 ">Condition </label> 
<div>

<Radio.Group style={{'marginTop':'14px','marginBottom':'15px'}} onChange={e=>handlechange(e.target.value,'condition')}  
name="condition" defaultValue={data['condition']? data['condition']:"new"} buttonStyle="outline">

<Radio value="new">New</Radio><Radio value="used">Used</Radio>

</Radio.Group>
</div>
</div>

<Row gutter={[12,12]} className="price-row">

<Col span={12}>

<div className="grp-input mb-5">

<label htmlFor="price" className="capitalize text-lg font-semibold my-2 mr-2 ">Price *</label>

<div className="my-5 h-12">
<Input value={data['price']}    className="h-12" name="price" required allowClear prefix={"NGN(₦)"} type="number" 
onChange={e=>handlechange(e.target.value,'price')}  autoComplete="true"  placeholder="10,000" autoFocus
/> 

</div>
</div>


</Col>


<Col span={8}>


<div className="grp-input mb-4">
<label htmlFor="negotiable" className="capitalize text-lg font-semibold my-2 ml-10 ">Negotiable</label>

<div>
 <Radio.Group style={{'marginLeft':'39px','marginTop':'22px'}} onChange={e=>handlechange(e.target.value,'negotiable')} 
  name="negotiable"  defaultValue={data['negotiable']? data['negotiable']:"no"} >

<Radio value="yes">Yes</Radio><Radio value="no">No</Radio>
</Radio.Group> 
</div>
</div>
</Col>

</Row>

<Row gutter={[12, 12]} >

<Col> 





<div className="grp-input mb-5" >
<Collapse accordion className="item-price-adv w-full"  >
<Collapse.Panel key={1} header={"Price (Advanced)"}>

From: 
 <InputNumber   className="my-4 h-12 " defaultValue={data['from_price']? data['from_price']:0} onChange={e=>handlechange(e,'from_price')}  >

</InputNumber>  

To: <InputNumber    className="my-4 h-12 " defaultValue={data['to_price']? data['to_price']:10000} onChange={e=>handlechange(e,'to_price')} >

</InputNumber>
</Collapse.Panel>


</Collapse>
</div>




</Col>

</Row>


<Row gutter={[12,12]}>

<Col span={7}>
{data && data['acquire_type']==="rent" ? 
<>

<div className="grp-input mb-2">
<label className="capitalize text-lg font-semibold my-2 " htmlFor="price">Duration</label>

<p className="bg-white my-5 py-2  flex items-center  " style={{'border':'1px solid silver'}}>


<Select bordered={false} className="w-full"   onChange={(value)=>handlechange(value,"duration")} 
placeholder={data['duration']? data['duration']:"Duration"} defaultValue="weekly"
>
<Select.Option value="weekly">Weekly</Select.Option>
<Select.Option value="monthly">Monthly</Select.Option>
<Select.Option value="yearly">Yearly</Select.Option>

</Select> 



</p>
</div>
</>

:<></>
}



</Col>

<Col>

{data && data['acquire_type']==="rent" ? 

<div className="grp-input">

<label  className="capitalize text-lg font-semibold my-2 " htmlFor="rent_dur_year">Duration Count</label>

<div className="my-5 ">
<Input   className="h-12" name="dur_count" minLength={1} maxLength={50} minLength={1} required allowClear  type="number"
onChange={e=>handlechange(e.target.value,'dur_count')}   placeholder="3" 
defaultValue={data['dur_count']? data['dur_count']:1}
/>

</div>
</div>
:<></> 
   }

   </Col>
   </Row>


<div className="grp-input">
<label className="capitalize text-lg font-semibold my-2 mr-10 " htmlFor="instock">Available inStock: </label> 

<div className="my-4 ">
<InputNumber   className="h-12 py-0 px-24 "  onChange={e=>handlechange(e,'instock')} 
 defaultValue={data['instock']? data['instock']:1}>

</InputNumber> 
 
</div>
</div>

<Row>
<Col span={24}>

<div className="grp-input mt-4">
<label htmlFor="descr" className="capitalize text-lg font-semibold my-2 ">Descriptions </label>
<div>
<textarea className="p-3 my-5  rounded w-full h-64 "  style={{'border':'1px solid silver'}} onChange={e=>handlechange(e.target.value,'description')}
 placeholder={"More descriptions on item"}  value={data['description'] && data['description']}
 ></textarea>

</div>
</div>

</Col>
</Row>

<Row>
<Col span={24}>
{data && data['acquire_type']==="rent" ?


<div className="grp-input">
<label htmlFor="req" className="capitalize text-lg font-semibold my-2 ">Requirements (Optional) </label>
<div>
<textarea className="p-3 my-4 rounded w-full h-64 "  style={{'border':'1px solid silver'}} onChange={e=>handlechange(e.target.value,'requirement')} 
 placeholder={"Enter requirement(s), if any"} value={data['requirement'] && data['requirement']} >
</textarea> 
</div>


</div>

:<p></p>

}

</Col>
</Row>







<Row>
<Col span={24}>

{data && data['acquire_type']==="exchange" ?
<div className="grp-input">
<label htmlFor="req" className="capitalize text-lg font-semibold my-2 ">Exchangable Items (Optional)</label> 
<div>
<textArea className="p-3 my-4 rounded w-full h-64 "  style={{'border':'1px solid silver'}} onChange={e=>handlechange(e.target.value,'exchange_items')} 
 placeholder={"Enter Exchangable item(s), if any"} value={data['exchange_items'] && data['exchange_items']}>
</textArea>

</div>

</div>

:<p></p>

}

</Col>
</Row>


<Row>
<Col span={24}>

{data && data['condition']==="used" &&
<div className="grp-input">
<label htmlFor="req" className="capitalize text-lg font-semibold my-2 ">Issues (Optional)</label> 
<div>
<textarea className="p-3 my-4 rounded w-full h-64 "  style={{'border':'1px solid silver'}} onChange={e=>handlechange(e.target.value,'issue')} 
 placeholder={"Enter Item issue(s), if any"} value={data['issue'] && data['issue']}>
</textarea>

</div>
</div>



}

</Col>
</Row>

</div>
}

export default Step2