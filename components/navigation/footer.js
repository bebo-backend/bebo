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
    <footer className="sm:border-t-2 sm:shadow-md border-gray-200 inset-y-0 bottom-0  ">
    <p className="text-gray-400">Please do not use Opera mini for better performance </p>
   <div className="sm:flex justify-evenly 
    sm:flex-wrap mt-4 ml-6  md:mt-10">

  

    <ul className="m-3" > 
    <h2 className="text-2xl font-bold"> Buy & Sell </h2>
    
    <li className=" text-base">Registration </li>
    <li  className=" text-base"> Buying & renting help</li>
    <li  className=" text-base"> Start selling </li>
    <li  className=" text-base">Delivery </li>
    
    
    </ul>


    <ul className="m-3" > 
    <h2 className="text-2xl font-bold">Stay Connected  </h2>
    
    <li  className=" text-base"> <a href="https://www.facebook.com/beBO"> <FacebookOutlined></FacebookOutlined> Facebook </a> </li>
    <li  className=" text-base"> <a href="https://www.twitter.com/beBO"> <TwitterCircleFilled></TwitterCircleFilled> Twitter </a>  </li>
    <li  className=" text-base"><a href="https://www.linkedin.com/beBO"><LinkedinOutlined></LinkedinOutlined>  Linkedin </a></li>
    
    
    </ul>

    <ul className="m-3" > 
    <h2 className="text-2xl font-bold"> About beBO  </h2>
    
    <li className=" text-base">Company info  </li>
    <li  className=" text-base">  Advertise with us</li>
    <li  className=" text-base"> Policies </li>
    
    
    
    </ul>


    <ul className="m-3" > 
    <h2 className="text-2xl font-bold">  beBo sites </h2>
    
    <li className=" text-base">Lagos </li>

    <li  className=" text-base">  Powered by Gks </li>
   
    
    
    
    </ul>

</div>

      
    </footer>
  )
}

export default Footer