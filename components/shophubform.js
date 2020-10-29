import React from 'react'
import PropTypes from 'prop-types'
import {Input, Alert,Checkbox} from "antd";
import {MailOutlined,SecurityScanOutlined, LoadingOutlined,UserAddOutlined,ShopOutlined,
PhoneOutlined} from '@ant-design/icons';
import Link from 'next/link'


const RegisterForm = ({ errorMessage, onSubmit,onChange=f=>f,load=false }) => (
  <form className="w-full sm:w-1/2 lg:w-1/3  m-10 rounded-lg shadow-2xl p-5 px-10 py-10
  border-1 bg-white">
  <p className="center text-2xl leading-tight text-black font-bold 
 "> Create new Account for your Shop</p>
   


  <label className="text-md font-semibold " htmlFor="agencyname">Full Name * </label>
<Input name="username"  className="my-3 h-12 border-white" required autoCapitalize 
 allowClear prefix={<UserAddOutlined></UserAddOutlined>}
onChange={onChange}  autoFocus autoComplete={true} placeholder="Owner Full Name"
/>

 <label className="text-md font-semibold " htmlFor="store">Shop Name *</label>
<Input name="store"  className="my-3 h-12 border-white" required allowClear  type="text" prefix={<ShopOutlined/>}
onChange={onChange} autoComplete="true"  placeholder="ie. Alaba21store electronics, Odeba Food & Beverages, GS Mall etc."
/>

<label className="text-md font-semibold "  htmlFor="email">E-mail *</label>
<Input name="username"  className="my-3 h-12 border-white" required   allowClear prefix={<MailOutlined/>} type="email" 
onChange={onChange} 
autoComplete={true}placeholder="you@domain.com"
/>


<label className="text-md font-semibold "  htmlFor="tel">Phone Number *</label>
<Input name="tel"  className="my-3 h-12 border-white" required   allowClear prefix={<PhoneOutlined/>} type="tel" 
onChange={onChange} 
 placeholder="08123546778 etc."
/>


<label className="text-md font-semibold my-2 "  htmlFor="website">Website</label>
<Input name="website"  className="my-3 h-12 border-white" allowClear prefix={"WWW"}
onChange={onChange} 
placeholder="www.teba.now.sh"
/>

<label className="text-md font-semibold " >Password *</label>

<Input.Password  className="my-4 h-12 border-white " required name="password" onChange={onChange} placeholder="Password"
 allowClear prefix={<SecurityScanOutlined></SecurityScanOutlined>}
  autoComplete={true}></Input.Password>
  

<div className="my-3">

<Checkbox className="mb-3" required>

By creating an account, you agree to our Terms of Service and Privacy Policy.
</Checkbox>
<p></p>

<Checkbox className="">

Yes, i would like to receive a monthly e-mail on new item near me
</Checkbox>
</div>

{errorMessage &&
  <div className="mb-5" ><Alert showIcon type="error" message={errorMessage}></Alert></div> }


  


<div onClick={onSubmit} className='btn w-full center h-12 flex justify-center items-center bg-red-700
rounded-md mt-5 text-white  hover:bg-red-500'>
<button className="text-md uppercase font-extrabold "  
>CONTINUE {load && <LoadingOutlined /> }</button>

</div>



  <div className='btn w-full center h-12 flex justify-center items-center bg-blue-700
rounded-md mt-3 text-white  hover:bg-blue-500'>
<Link href="/login">
<button className="text-md font-extrabold "
>Already have an account? Log in</button>
</Link>

</div>






   
  </form>
)

export default RegisterForm

RegisterForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
