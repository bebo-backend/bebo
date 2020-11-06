import React from 'react'
import PropTypes from 'prop-types'
import {Input, Alert} from "antd";
import {MailOutlined,SecurityScanOutlined, GoogleCircleFilled,FacebookFilled,LoadingOutlined} from '@ant-design/icons';
import Link from 'next/link'


const Form = ({ errorMessage, onSubmit,onChange=f=>f,load=false }) => (
  <form className="w-full sm:w-1/2 lg:w-1/3 my-8 sm:mx-4 px-5 sm:m-10 rounded-lg shadow-2xl sm:p-5 sm:px-10 py-10
  border-1 bg-white">
  

 

        <p className="w-full flex border-b-2 border-black pb-3  justify-center text-3xl text-black font-bold 
 ">
 <span> Sign in</span>
 </p>

   
 {errorMessage &&
  <div className="mb-5" ><Alert showIcon type="error" message={errorMessage}></Alert></div> }


<div style={{'marginBottom':'3px'}} className="mt-3">
  <p className="text-md font-semibold " htmlFor="username" >Email</p>

<div className="my-3 mb-6 ">
<Input type="email" name="username"  prefix={<MailOutlined/>} allowClear
onChange={onChange}  placeholder="you@domain.com"
 className="h-12 rounded " 
/>

</div>
</div>

<div>
<p  className="text-md font-semibold  " style={{'marginBottom':'12px'}}>Password</p>
<div className="my-3 mb-6 ">
<Input.Password name="password" onChange={onChange} placeholder="Password" style={{'marginTop':'3px','marginBottom':'5px'}}
 allowClear prefix={<SecurityScanOutlined></SecurityScanOutlined>}  className="h-12"
 ></Input.Password>
  </div>

</div>


<div className='btn w-full center h-12 flex justify-center items-center bg-blue-700
rounded-md my-4 text-white  hover:bg-blue-500'>
<button className="text-md uppercase font-extrabold "  
onClick={onSubmit}>CONTINUE {load && <LoadingOutlined /> }</button>

</div>



 

  <div className='btn w-full center h-12 flex justify-center items-center
rounded-md my-4 text-black  hover:bg-gray-500' style={{'border':'1px solid black'}}>
<Link href="/signup">
<button className="text-md font-extrabold "
>New to teba? Sign Up</button>
</Link>

</div>






   
  </form>
)

export default Form

Form.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
