import React from 'react'
import PropTypes from 'prop-types'
import {Input, Alert} from "antd";
import {MailOutlined,SecurityScanOutlined, GoogleCircleFilled,FacebookFilled,LoadingOutlined} from '@ant-design/icons';
import Link from 'next/link'


const Form = ({ errorMessage, onSubmit,onChange=f=>f,load=false }) => (
  <form className="w-full sm:w-1/2 lg:w-1/3  m-10 rounded-lg shadow-2xl p-5 px-10 py-10
  border-1 bg-white">
  <p className="w-full  justify-center text-3xl text-black font-bold 
 "> Sign in</p>
   
 {errorMessage &&
  <div className="mb-5" ><Alert showIcon type="error" message={errorMessage}></Alert></div> }

  <label className="text-md font-semibold " htmlFor="username">Email</label>
<Input type="email" name="username"  prefix={<MailOutlined/>} allowClear
onChange={onChange}  placeholder="you@domain.com"
 className="my-3 h-10 border-white"
/>


<label  className="text-md font-semibold " >Password</label>

<Input.Password name="password" onChange={onChange} placeholder="Password"
 allowClear prefix={<SecurityScanOutlined></SecurityScanOutlined>}  className="my-3 h-10"
 ></Input.Password>
  


<div className='btn w-full center h-10 flex justify-center items-center bg-red-700
rounded-md mt-3 text-white  hover:bg-red-500'>
<button className="text-md uppercase font-extrabold "  
onClick={onSubmit}>CONTINUE {load && <LoadingOutlined /> }</button>

</div>



  <div className='w-full flex justify-center mt-6 uppercase '>
  
  <p className=" border-b-2 text-gray-500 border-black font-extrabold">Sign in with</p>


  </div>

  <div className="w-full flex justify-center my-3 mb-10">
  
  <GoogleCircleFilled style={{'fontSize':'45px','marginRight':'25px'}} /> 
  <FacebookFilled  style={{'fontSize':'45px','marginRight':'20px'}} />
  </div>

  <div className='btn w-full center h-10 flex justify-center items-center bg-blue-700
rounded-md mt-3 text-white  hover:bg-blue-500'>
<Link href="/signup">
<button className="text-md font-extrabold "
>New to beBO? Sign Up</button>
</Link>

</div>






   
  </form>
)

export default Form

Form.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
