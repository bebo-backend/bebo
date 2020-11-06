import React from 'react'
import Link from 'next/link'
import useUser from '../../lib/useUser'
import { useRouter} from 'next/router'
import fetchJson from '../../lib/fetchJson'
import {Avatar,Button} from "antd";
import {BASE_IMG_URL,BASE_URL} from '../../settings'
import {UserOutlined, ShoppingFilled,CloudUploadOutlined} from '@ant-design/icons';
import Search from '../search'
import Tag from '../../components/main/tag'
import useSWR from 'swr'
import {myfetcher} from '../../lib/ax-fetch'


const Header = ({tag=true}) => {

 
  const { user, mutateUser } = useUser()
  const {data:cart,error} = useSWR(()=>BASE_URL+"getcartlen/"+user?.username+'/',myfetcher)
  const router = useRouter()

  // console.log('cart-len: '+Object.values(cart?.data))

  return (
    <header className=" bg-white  " >
    <div className="sm:fixed w-full" style={{'z-index':'9999'}}>
      <nav className=" flex inset-y-0 top-0 text-black shadow px-1 w-full md:px-5 items-end justify-center
       sm:justify-start pb-0  h-14 py-0  " style={{'backgroundColor':'white',
       'borderBottom':'0px solid white'}}>
        <ul className="flex-inline sm:flex w-full py-0 my-0 ">

        <div className="w-full sm:w-1/6 sm:px-6 hidden sm:inline sm:relative pt-0 pb-0  
        z-40  md:mr-3 my-0 
        sm:py-0 flex justify-center items-center cursor-pointer bg-white" style={{'textAlign':'center'}}>

     

        <Link href="/">
       <a className=" pt-0 font-extrabold flex justify-center items-end tracking-wide  
       " style={{'fontSize':'42px','fontFamily':'Baskerville'}}>

        <span className="mr-2 " style={{'marginBottom':'15px'}}>
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="32" height="30">
<svg viewBox="0 0 512 512" id="cat-groceries">
<path fill-rule="evenodd" d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"></path></svg>
</svg>
</span>    <span className="text-black p-0">te</span><span className="text-black p-0">ba.</span>
            </a>
        </Link>

        </div>

        <div className="flex-shrink  w-full flex justify-center items-center mt-3 sm:my-1 p-0 mb-3 sm:mb-1  ">
        <Search/>
        </div>

        <div className="flex-shrink pb-2 sm:pb-0 md:m-2 w-full  py-1 md:w-2/3 md:px-3 justify-around md:justify-evenly  flex items-center">

        <Link href='/upload-item'>
        <a className="
      
         cursor-pointer mr-1   leading-loose  hover:bg-blue-500 hover:text-white
         p-1 rounded  px-3 sm:px-6 text-md uppercase  font-mono font-bold text-black border-black

         " style={{'border':'1px solid black'}}>post</a>
                </Link>
        
        
        {
        user?.isLoggedIn ?(
<i className="cursor-pointer hover:border-b-2">
          <Avatar icon={<UserOutlined></UserOutlined>} src={BASE_IMG_URL+user?.image} style={{
            "width":'33px','height':'33px','backgroundColor':'silver'
        }} onClick={e=>router.push('/dashboard/profile')}>
          </Avatar>
          </i>
        ) : (
          <i className="cursor-pointer  hover:border-b-2">
          <Avatar className="cursor-pointer" onClick={e=>router.push('/dashboard/profile')} 
          style={{"width":'33px','height':'33px',
          }} icon={<UserOutlined></UserOutlined>} className=""></Avatar> </i>
        )

      }
      
      
      <Link href="/cart">
    <a className="hover:text-blue-300 text-black">
      <ShoppingFilled  className="mx-4 pr-0 " style={{"fontSize":'35px'}} />
        <span className="font-bold absolute text-white text-base mt-2 mr-1 cursor-pointer "
        style={{'marginLeft':'-38px'}}> {cart?.data.len && cart?.data.len}</span>
 
</a>
      </Link>

      {user?.isLoggedIn ? (

        <Button type='primary' className="
 text-md font-bold 
         cursor-pointer ml-3  leading-loose  text-white 
         pt-1  px-1 border-0  font-sans
 pb-1 w-20 mx-1 uppercase

          "  href='/logout' onClick={async (e) => {
          e.preventDefault()
          await mutateUser(fetchJson('/api/auth/logout'))
          router.push('/login')
        }} style={{'textAlign':'center'}}>
Sign out
        </Button>

      ):(

        <Link href='/login'>
        <Button type='primary' className="
 text-md font-bold
         cursor-pointer ml-3  leading-loose  text-white 
         pt-1  px-1 border-0 
1    pb-1 w-20 mx-1 uppercase   font-sans 
         " style={{'textAlign':'center'}}>Sign in</Button>
                </Link>
      )}



        </div>
    
        </ul>
      </nav>
      </div>
     

    
      
    </header>
  )
}

export default Header