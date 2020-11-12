
import {Radio,Select} from "antd";
import {CarFilled} from '@ant-design/icons';
import deliveries from '../contrib/deliveries'




const Step4=({handlechange,data})=>{



return <div className="mb-10 sm:mx-10">

 <h2  className='text-xl md:text-2xl mb-2  text-gray-900'> Delivery options (if available) </h2>
 <hr className="mb-8" />
 
<div className="deli-input mb-5">
<label className="capitalize text-lg font-semibold my-2 " htmlFor="delivery">With Delivery: </label> <br/>

<Radio.Group style={{'marginTop':'17px','marginBottom':'19px'}}   onChange={e=>handlechange(e.target.value,'delivery')}  name="delivery" 
defaultValue={data['delivery']? data['delivery']:"no"} buttonStyle="outline">

<Radio value="yes">Yes</Radio><Radio value="no">No</Radio>

</Radio.Group>


</div>


{data['delivery'] == "yes" && <div className="deli-input">

<label className="capitalize text-lg font-semibold my-2 "  htmlFor="deli-comp">Delivery Channel</label> <br/>

<p className="bg-white my-5 py-2  flex items-center rounded w-full  " style={{'border':'1px solid silver'}} >

<Select bordered={false} className="w-full"  allowClear={true} showSearch={true} onChange={(value)=>handlechange(value,"delivery_comp")}
 placeholder={"Select Delivery Company"} 
 >
{Object.values(deliveries).map((e,index)=>(
<Select.Option value={e} key={index}>{e}</Select.Option>

	))}

<Select.Option value="Other">Others</Select.Option>

</Select> 
</p>
</div>

}
<p className="flex justify-center text-lg 
text-gray-400">Watch out for shoplist jet delivery  </p>
</div>

}

export default Step4