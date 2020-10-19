
import {useState} from 'react'
import Link from 'next/link'
import {Input} from "antd";
import {SearchOutlined,LoadingOutlined} from '@ant-design/icons';

import {useRouter} from 'next/router'


function Search(){
const router = useRouter()
const [inputdata,setInput] = useState('all')
// const router = useRouter()

const handleInput=async e=>{
	await setInput(e.target.value)
}


return (

    <div className="w-full mx-10 flex justify-center  m-0 items-start"> 
   
<Input  className="h-8 " allowClear 
onChange={handleInput} 
placeholder="Search for anything on beBO" prefix={<p className="m-1 rounded-full 
p-1 font-extrabold text-xl text-yellow-500 ">B</p>}
 suffix={<Link href={"/search?search="+inputdata}><i className="cursor-pointer"><SearchOutlined style={{
    'fontSize':'23px'
}}  /></i></Link>}
/>  




     </div>
)

}

export default  Search