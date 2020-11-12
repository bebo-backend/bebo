import React from 'react'
import Link from 'next/link'
import useUser from '../../lib/useUser'
import { useRouter, Router } from 'next/router'
import fetchJson from '../../lib/fetchJson'
import {Avatar} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {UserOutlined, ShoppingCartOutlined,TwitterCircleFilled,FacebookOutlined,LinkedinOutlined } from '@ant-design/icons';
import {getFetch} from '../../lib/ax-fetch'
import useSWR from 'swr'

const Footer = () => {
  const { user, mutateUser } = useUser()
  const router = useRouter()
  // console.log('use user: '+user?.isLoggedIn)

  return (
    <footer className="sm:border-t-2 sm:shadow-md border-gray-200 inset-y-0 bottom-0   ">
    <p className="text-gray-400 mt-4 hidden sm:block">Please do not use Opera mini for better performance </p>
   <div className="flex justify-evenly 
    flex-wrap mt-4 sm:ml-6  md:mt-1">

  

    <ul className="m-3" > 
    <h2 className="text-lg font-bold"> Buy & Sell </h2>
    
    <li className=" text-base">Registration </li>
    <li  className=" text-base"> Advertise</li>
    <li  className=" text-base"> Start selling </li>

    
    
    </ul>


    <ul className="m-3" > 
    <h2 className="text-lg font-bold">Stay Connected  </h2>
    
    <li  className=" text-base"> <a href="https://www.facebook.com/shoplist"> <FacebookOutlined></FacebookOutlined> Facebook </a> </li>
    <li  className=" text-base"> <a href="https://www.twitter.com/shoplist"> <TwitterCircleFilled></TwitterCircleFilled> Twitter </a>  </li>
    <li  className=" text-base"><a href="https://www.linkedin.com/shoplist"><LinkedinOutlined></LinkedinOutlined>  Linkedin </a></li>
    
    
    </ul>

    <ul className="m-3" > 
    <h2 className="text-lg font-bold"> About shoplist  </h2>
    
    <li className=" text-base">Contacts  </li>
    <li className=" text-base">We are hiring </li>
    <li  className=" text-base"> Faq</li>
    <li  className=" text-base"> Policies </li>
    
    
    
    </ul>


    <ul className="m-3" > 
    <h2 className="text-lg font-bold">  Shoplist sites </h2>
    
    <li className=" text-base"> 
    <span className="text-green-700 bg-green-700 ">-</span>
     <span className="text-white bg-white">--</span> 
      <span className="text-green-700 bg-green-700 ">-</span>  Nigeria </li>

    <li  className=" text-base">  Powered by Gks Inc. </li>
   
    
    
    
    </ul>

</div>

      
    </footer>
  )
}

export default Footer