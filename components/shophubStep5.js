
import {Radio,Select,Alert} from "antd";
import {PayCircleFilled, CloudUploadOutlined} from '@ant-design/icons';


const Step5=({handlechange,submitForm,data,error})=>{




return <div className="mb-10 sm:mx-10">

<h2  className='text-xl md:text-2xl font-bold mb-2  text-gray-900'> Enter payment option(s) </h2>
<hr className="mb-8" />


<div className="deli-input">


<label htmlFor="payment_type" className="capitalize text-lg font-semibold my-2 ">Approved Payment Channel </label> <br/>

<p className="bg-white my-5 py-2  flex items-center  " style={{'border':'1px solid silver'}}>

<Select bordered={false} className="w-full"   onChange={(value)=>handlechange(value,"payment_type")} placeholder="Payment Type"
defaultValue={data['payment_type']? data['payment_type']:"Bank Transfer "} mode="multiple" 
>
<Select.Option value="Negotiable ">Negotiable</Select.Option>
<Select.Option value="Cash ">Cash</Select.Option>
<Select.Option value="Bank Transfer ">Bank Transfer</Select.Option>
<Select.Option value="Online Transfer ">Online Transfer</Select.Option>
<Select.Option value="Crypto ">Crypto Currency</Select.Option>
<Select.Option value="Paypal ">PayPal</Select.Option>
<Select.Option value="Other ">Other</Select.Option>


</Select> 
</p>
</div>


{Object.keys(error).length >0 && error.map((value,index)=>(
  <div className="mb-5" ><Alert showIcon type="error" message={value}></Alert></div>
	))

  }

<div className="flex justify-center items-center"> 
<div onClick={submitForm} className='btn w-full sm:w-1/2 center h-12 flex justify-center items-center  bg-blue-700
rounded-md my-10  text-white  hover:bg-blue-500'>

<button className="text-base capitalize font-extrabold my-10 "  
>VERIFY & UPLOAD <CloudUploadOutlined className="ml-3 text-base"/> </button>

</div>

</div>
</div>

}
export default Step5