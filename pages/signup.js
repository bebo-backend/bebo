import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/layout'
import RegisterForm from '../components/auth/RegisterForm'
import fetchJson from '../lib/fetchJson'
import {Modal, Alert} from "antd";
import { useRouter } from 'next/router'
import {BASE_URL} from '../settings'
import axios from 'axios'



const Signup = () => {
  const { mutateUser } = useUser({
    redirectTo: '/dashboard/profile-sg',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')
  const [userForm, setForm] = useState({})
  const [Load, setLoad] = useState(false)
  const [created, setCreated] = useState(false)






  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg("")
    const body = userForm
    setLoad(true);

    try {

        
    
     
    // const {message,error} = await fetchJson('/api/auth/signup', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(body),
    //     })
const data = {user:{}}

data.user.username = userForm.username
data.user.password = userForm.password
 data.user.email = userForm.username
  data.phone_no = userForm.tel
  data.agencyname = userForm.store

    // const {message,error,user} = await axios.post(BASE_URL+"signup/", data);

    await axios.post(BASE_URL+"signup/", data).then(res=>{
      // console.log('response: '+res)
    setCreated(true)
    setLoad(false)
  },
  error=>{
    setLoad(false)
    setErrorMsg("E-mail already exists, enter a new email account")
  // console.log('error: '+error)
   
  })



  
   
    } catch (error) {
      console.error('An unexpected error happened:', error)
     
      setErrorMsg(error.message)
    }
  }


  async function onChange(e){

const data = {
    ...userForm,
    [e.target.name]:e.target.value
}

setForm(data)

  }

  return (
    <Layout title="Sign up" >
      <div className=" flex w-full justify-center flex-no-wrap bg-teal-900">

      <Modal visible={created} centered title="Registration successful"  okType="primary" okText={
     <a onClick={e=>router.push('/login')}> Login to Continue </a>
        
             } cancelText={<a onClick={e=>{e.preventDefault();
              router.push('/')
        
            }}
             
             type="ghost">Home </a>}>
        
        <Alert showIcon type="success" message="Signup Successful" ></Alert>
        <h2> Login to continue,or go to Home</h2>
        
        
                    </Modal>
        <RegisterForm  errorMessage={errorMsg} onSubmit={handleSubmit} onChange={onChange} load={Load} />
      </div>      

    </Layout>
  )
}

export default Signup