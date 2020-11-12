
import {useState} from 'react'
import Link from 'next/link'
import {Input} from "antd";
import {SearchOutlined,LoadingOutlined} from '@ant-design/icons';

import {useRouter} from 'next/router'


function Search(){
const router = useRouter()
const searched = router.query.search
const [inputdata,setInput] = useState('all')
// const router = useRouter()

const handleInput=async e=>{
	await setInput(e.target.value)
}


return (

    <div className="w-full mx-1 flex justify-center  m-0 items-start"> 
   
<Input  className="h-10 rounded " allowClear 
onChange={handleInput} defaultValue={searched} bordered={false} style={{'backgroundColor':'#e7e9ec',
'color':'#c53030','borderRadius':'4px'}}
placeholder="Search for anything on shoplist"

 suffix={<Link href={"/search?search="+inputdata}><i className="cursor-pointer font-bold hover:text-gray-600"><SearchOutlined style={{
    'fontSize':'20px'
}}  /></i></Link>}
/>  




     </div>
)

}

export default  Search