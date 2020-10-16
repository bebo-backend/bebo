
import {Input,Button,Row,Col,Form,Divider,Radio,Select,
InputNumber,Collapse} from "antd";
import {InfoCircleOutlined, UploadOutlined,PlusCircleOutlined,
LoadingOutlined,FileImageOutlined,UpCircleOutlined,WhatsAppOutlined,
CarOutlined,PayCircleOutlined,CheckOutlined} from '@ant-design/icons';








const Step2=({handlechange, data})=>{


return <div className="mb-10">

<h2 className='text-xl md:text-2xl font-bold mb-5'> ADDITIONAL DETAILS </h2>
 
<hr className="mb-3" />


<div className="grp-input">

<label className="uppercase text-md font-semibold my-2 " htmlFor="acquire_type">Acquire Type </label>

<div>

<Radio.Group style={{'marginTop':'8px','marginBottom':'15px'}}   autoFocus 
onChange={e=>handlechange(e.target.value,'acquire_type')}  
name="acqure_type" defaultValue={"sale"}  buttonStyle="outline">

<Radio value="sale">Sale</Radio>
<Radio value="rent">Rental</Radio>
<Radio value="exchange">Exchange</Radio>

</Radio.Group> 
 
</div>

</div>



<div className="grp-input">
<label htmlFor="condtion" className="uppercase text-md font-semibold my-2 ">Condition </label> 
<div>

<Radio.Group style={{'marginTop':'8px','marginBottom':'15px'}} onChange={e=>handlechange(e.target.value,'condition')}  
name="condition" defaultValue={"new"} buttonStyle="outline">

<Radio value="new">New</Radio><Radio value="used">Used</Radio>

</Radio.Group>
</div>
</div>

<Row gutter={[12,12]} className="price-row">

<Col span={12}>

<div className="grp-input">

<label htmlFor="price" className="uppercase text-md font-semibold my-2 mr-2 ">Price (*)</label>

<Input   className="my-4 h-12 " name="price" required allowClear prefix={"NGN(₦)"} type="number" 
onChange={e=>handlechange(e.target.value,'price')}  autoComplete="true"  placeholder="10,000" autoFocus
/> 

</div>


</Col>


<Col span={8}>


<div className="grp-input">
<label htmlFor="negotiable" className="uppercase text-md font-semibold my-2 ml-10 ">Negotiable (*)</label>

<div>
 <Radio.Group style={{'marginLeft':'39px','marginTop':'10px'}} onChange={e=>handlechange(e.target.value,'negotiable')} 
  name="negotiable" defaultValue={"no"} >

<Radio value="yes">Yes</Radio><Radio value="no">No</Radio>
</Radio.Group> 
</div>
</div>
</Col>

</Row>

<Row gutter={[12, 12]} >

<Col> 





<div className="grp-input" >
<Collapse accordion className="item-price-adv"  >
<Collapse.Panel key={1} header={"Price (Advanced)"}>

From: 
 <InputNumber   className="my-4 h-12 " defaultValue={0} onChange={e=>handlechange(e,'from_price')}  >

</InputNumber>  

To: <InputNumber    className="my-4 h-12 " defaultValue={10000} onChange={e=>handlechange(e,'to_price')} >

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

<div className="grp-input">
<label className="uppercase text-md font-semibold my-2 " htmlFor="price">Duration</label>

<div>


<Select  style={{'marginTop':'13px','marginBottom':'19px'}}  onChange={(value)=>handlechange(value,"duration")} 
placeholder={"Duration"} defaultValue="weekly"
>
<Select.Option value="weekly">Weekly</Select.Option>
<Select.Option value="monthly">Monthly</Select.Option>
<Select.Option value="yearly">Yearly</Select.Option>

</Select> 



</div>
</div>
</>

:<></>
}



</Col>

<Col>

{data && data['acquire_type']==="rent" ? 

<div className="grp-input">

<label  className="uppercase text-md font-semibold my-2 " htmlFor="rent_dur_year">Duration Count</label>

<Input   className="my-4 h-12 " name="dur_count" minLength={1} maxLength={50} minLength={1} required allowClear  type="number"
onChange={e=>handlechange(e.target.value,'dur_count')}   placeholder="3" 
defaultValue={1}
/>

</div>
:<></> 
   }

   </Col>
   </Row>


<div className="grp-input">
<label className="uppercase text-md font-semibold my-2 mr-10 " htmlFor="instock">Available inStock (*): </label> 

<InputNumber   className="my-4 h-12 py-0 px-24 "  onChange={e=>handlechange(e,'instock')} 
 defaultValue={1}>

</InputNumber> 
 
</div>

<Row>
<Col span={24}>

<div className="grp-input">
<label htmlFor="descr" className="uppercase text-md font-semibold my-2 ">Descriptions (*) </label>
<div>
<textarea className="p-3 my-4 border-gray-300 border-2 rounded w-full " onChange={e=>handlechange(e.target.value,'description')}
 placeholder={"More descriptions on item"}
 ></textarea>

</div>
</div>

</Col>
</Row>

<Row>
<Col span={24}>
{data && data['acquire_type']==="rent" ?


<div className="grp-input">
<label htmlFor="req" className="uppercase text-md font-semibold my-2 ">Requirements (Optional) </label>
<div>
<textarea className="p-3 my-4 border-gray-300 border-2 rounded w-full " onChange={e=>handlechange(e.target.value,'requirement')} 
 placeholder={"Enter requirement(s), if any"} >
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
<label htmlFor="req" className="uppercase text-md font-semibold my-2 ">Exchangable Items (Optional)</label> 
<div>
<textArea className="p-3 my-4 border-gray-300 border-2 rounded w-full " onChange={e=>handlechange(e.target.value,'exchange_items')} 
 placeholder={"Enter Exchangable item(s), if any"}>
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
<label htmlFor="req" className="uppercase text-md font-semibold my-2 ">Issues (Optional)</label> 
<div>
<textarea className="p-3 my-4 border-gray-300 border-2 rounded w-full " onChange={e=>handlechange(e.target.value,'issue')} 
 placeholder={"Enter Item issue(s), if any"}>
</textarea>

</div>
</div>



}

</Col>
</Row>

</div>
}

export default Step2