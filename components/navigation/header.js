import React from 'react'
import Link from 'next/link'
import useUser from '../../lib/useUser'
import { useRouter} from 'next/router'
import fetchJson from '../../lib/fetchJson'
import {Avatar} from "antd";
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
    <header className=" bg-white  ">
      <nav className=" flex inset-y-0 top-0 text-black px-0 w-full md:px-5 items-end justify-center
       sm:justify-start pb-0  ">
        <ul className="flex-inline sm:flex w-full py-0 my-0 shadow mb-3">

        <div className="w-full sm:w-1/6 mx-0 fixed sm:relative bg-blue-900 sm:bg-white pt-1 pb-2  
        z-40  md:mr-3 my-0 
        sm:py-0 flex justify-center items-center bg-white ">
       
        <Link href="/">
         <h2 className="font-extrabold text-2xl sm:text-lg px-2 rounded sm:mt-0 mt-1 mb-0
          border-2 border-white sm:border-0   text-white cursor-pointer mb-0
          relative sm:p-1 sm:bg-black">beBO</h2>
        </Link>

        </div>

        <div className="flex-shrink  w-full flex justify-center items-center my-3 p-0 mt-16 sm:mt-3 ">
        <Search/>
        </div>

        <div className="flex-shrink md:m-2 w-full  py-1 md:w-2/3 md:px-3 justify-around md:justify-evenly flex items-start">

        <Link href='/upload-item'>
        <a className="
      capitalize
         cursor-pointer mr-3   leading-loose  hover:text-purple-300 
         p-1 rounded-sm  px-3 text-gray-900 text-base 

         "><CloudUploadOutlined className=" text-base ml-4 sm:ml-1 mr-1" /> sell</a>
                </Link>
        
        
        {
        user?.isLoggedIn ?(
<i className="cursor-pointer hover:border-b-2">
          <Avatar  src={BASE_IMG_URL+user?.image} style={{"width":'35px','height':'35px',
        }} onClick={e=>router.push('/dashboard/profile')}><h2 className="text-base font-bold 
        uppercase">
          {user?.username.slice(0,2)}</h2>
          </Avatar>
          </i>
        ) : (
          <i className="cursor-pointer  hover:border-b-2">
          <Avatar className="cursor-pointer" onClick={e=>router.push('/dashboard/profile')} style={{"width":'35px','height':'35px',
          }} icon={<UserOutlined></UserOutlined>} className=""></Avatar> </i>
        )

      }
      
      
      <Link href="/cart">
    <a className="text-black">
      <ShoppingFilled  className="mx-4 pr-0 " style={{"fontSize":'35px'}} />
        <span className="font-bold absolute text-white text-base mt-2 mr-1 cursor-pointer "
        style={{'marginLeft':'-38px'}}> {cart?.data.len && cart?.data.len}</span>
 
</a>
      </Link>

      {user?.isLoggedIn ? (

        <a type='ghost' className="
 text-md 
         cursor-pointer ml-3  leading-loose flex items-end hover:bg-teal-600 text-gray-900 
         pt-1  px-5 border-0 border-teal-700 border-2 rounded
1  px-3 border-0 border-blue-500 border-1 rounded

          " href='/logout' onClick={async (e) => {
          e.preventDefault()
          await mutateUser(fetchJson('/api/auth/logout'))
          router.push('/login')
        }}>
Logout
        </a>

      ):(

        <Link href='/login'>
        <a type='ghost' className="
 text-md 
         cursor-pointer ml-3  leading-loose flex items-end hover:bg-teal-600 text-gray-900 
         pt-1  px-5 border-0 border-teal-700 border-2 rounded

         ">Login</a>
                </Link>
      )}



        </div>
    
        </ul>
      </nav>
     
{tag && (  <div className="flex inline-flex w-full px-0 md:px-1 mx-0 pb-2 pt-1">
<Tag />
</div>)}
    
      
    </header>
  )
}

export default Header