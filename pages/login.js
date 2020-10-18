import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/layout'
import Form from '../components/auth/Form'
import fetchJson from '../lib/fetchJson'
import { useRouter } from 'next/router'



const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/dashboard/profile',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')
  const [userInput, setUsername] = useState('')
  const [userPass, setPassword] = useState('')
  const [Load, setLoad] = useState(false)




  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg("")
    const body = {
      username: userInput,
      password:userPass
    }

    setLoad(true);

    try {

    
     
    const {message,error} = await fetchJson('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })

        
        mutateUser();


   if (message){
    router.push('/')
   }

      console.log('err: '+error)
      setLoad(false)
      setErrorMsg(error)
      
   
    } catch (error) {
      console.error('An unexpected error happened:', error)
     
      setErrorMsg(error.data.message)
    }
  }


  async function onChange(e){
if (e.target.name === "username"){

  setUsername(e.target.value)
} else {

  setPassword(e.target.value)
}

  }

  return (
    <Layout title="Sign in">
      <div className=" flex w-full justify-center flex-no-wrap " style={{'backgroundColor':'#01718f'}}>
        <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} onChange={onChange} load={Load} />
      </div>
      
      
      

    </Layout>
  )
}

export default Login