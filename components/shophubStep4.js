
import {Radio,Select} from "antd";
import {CarFilled} from '@ant-design/icons';
import deliveries from '../contrib/deliveries'




const Step4=({handlechange})=>{



return <div className="mb-10">

 <h2  className='text-xl md:text-2xl font-bold mb-5'> DELIVERY OPTION(S) <CarFilled className="mx-5"/></h2>
 <hr className="mb-3" />
 
<div className="deli-input">
<label className="uppercase text-md font-semibold my-2 " htmlFor="delivery">With Delivery: </label> <br/>

<Radio.Group style={{'marginTop':'13px','marginBottom':'19px'}}   onChange={e=>handlechange(e.target.value,'delivery')}  name="delivery" 
defaultValue={"no"} buttonStyle="outline">

<Radio value="yes">Yes</Radio><Radio value="no">No</Radio>

</Radio.Group>


</div>



<div className="deli-input w-1/2">

<label className="uppercase text-md font-semibold my-2 "  htmlFor="deli-comp">Delivery Channel</label> <br/>


<Select style={{'marginTop':'13px','marginBottom':'19px'}} allowClear={true} showSearch={true} onChange={(value)=>handlechange(value,"delivery_comp")}
 placeholder={"Select Delivery Company"} 
 >
{Object.values(deliveries).map((e,index)=>(
<Select.Option value={e} key={index}>{e}</Select.Option>

	))}

<Select.Option value="Other">Others</Select.Option>

</Select> 

</div>


<p className="flex justify-center text-2xl font-bold 
text-gray-400">Watch out for beBo Courier - Currently not available  </p>
</div>

}

export default Step4