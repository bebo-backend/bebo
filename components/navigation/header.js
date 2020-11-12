import React, {useState} from 'react'
import Link from 'next/link'
import useUser from '../../lib/useUser'
import { useRouter} from 'next/router'
import fetchJson from '../../lib/fetchJson'
import {Avatar,Button} from "antd";
import {BASE_IMG_URL,BASE_URL} from '../../settings'
import {UserOutlined, ShoppingFilled,CloudUploadOutlined,SearchOutlined} from '@ant-design/icons';
import Search from '../search'
import Tag from '../../components/main/tag'
import useSWR from 'swr'
import {myfetcher} from '../../lib/ax-fetch'


const Header = ({tag=true}) => {

 
  const { user, mutateUser } = useUser()
  const {data:cart,error} = useSWR(()=>BASE_URL+"getcartlen/"+user?.username+'/',myfetcher)
  const router = useRouter()
  const [showSearch,setShowSearch] = useState(false)

  // console.log('cart-len: '+Object.values(cart?.data))

  return (
    <header className=" bg-white  " >
    <div className="sm:fixed w-full" style={{'z-index':'9999'}}>
      <nav className=" w-full flex inset-y-0 top-0 text-black shadow px-1 w-full md:px-5 items-end justify-center
       sm:justify-start pb-0  h-14 py-0  " style={{'backgroundColor':'white',
       'borderBottom':'3px solid teal'}}>
        <ul className="flex-inline sm:flex w-full py-0 my-0 ">

        <div className="w-full sm:w-1/6 px-4 sm:px-6  sm:relative pt-4 sm:pt-0 pb-0  
        z-40  md:mr-3 my-0 
        sm:py-0 flex sm:justify-center items-center cursor-pointer bg-white mb-3 sm:mb-0" style={{'textAlign':'center'}}>

     

        <Link href="/">
       <a className=" pt-0 font-extrabold flex justify-center items-end tracking-wide  
       " style={{'fontSize':'30px','fontFamily':'Baskerville'}}>

        <span className="mr-2 " style={{'marginBottom':'10px'}}>
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="30" height="30" >
<svg viewBox="0 0 512 512" id="cat-groceries" >
<path fill="red" fill-rule="evenodd" d="M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"></path></svg>
</svg>
</span>    <span className="text-black p-0">shoplist</span>
            </a>
        </Link>

     <span className="sm:hidden  w-full flex justify-end font-extrabold hover:text-blue-500">
        <SearchOutlined onClick={e=>setShowSearch(!showSearch)} style={{'fontSize':'25px',"color":showSearch && 'blue'}}  /> </span>



        </div>

{ showSearch && 
        <div className="flex-shrink  w-full flex justify-center items-center mt-3 sm:my-1 p-0 mb-3 sm:mb-1 sm:hidden  ">
        <Search/>
        </div>
      }

 <div className="flex-shrink  w-full flex justify-center items-center mt-2 p-0 sm:mb-1 hidden sm:inline  ">
        <Search/>
        </div>


        <div className="flex-shrink pb-4 sm:pb-0 md:m-2 w-full  py-1 md:w-2/3 md:px-3 justify-around md:justify-evenly  flex items-center">

        <Link href='/upload-item'>
        <a className="
      
         cursor-pointer mr-1   leading-loose  hover:bg-blue-500 hover:text-white
         p-1 rounded  px-4 sm:px-6 text-md uppercase  font-mono font-bold text-black border-black

         " style={{'border':'1px solid black'}}>post</a>
                </Link>
        
        
        {
        user?.isLoggedIn ?(
<i className="cursor-pointer hover:border-b-2 text-red-500">
          <Avatar  src={BASE_IMG_URL+user?.image} style={{
            "width":'33px','height':'33px','backgroundColor':'silver'
        }} onClick={e=>router.push('/dashboard/profile')}>
        {user?.username.slice(0,2)}
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