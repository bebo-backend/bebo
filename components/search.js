
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
placeholder="Search for anything on teba" prefix={  <Link href="/">
       <a className="text-2xl tracking-wider font-sans font-extrabold flex justify-center items-end  sm:hidden
pt-2     ">
<span className="mr-1 " style={{'marginBottom':'10px'}}>
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="28" height="24">
<svg viewBox="0 0 512 512" id="cat-groceries">
<path fill-rule="evenodd" d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"></path></svg>
</svg>
</span>
            <span className="text-black">te</span><span className="text-red-700">ba.</span>
            </a>
        </Link>}

 suffix={<Link href={"/search?search="+inputdata}><i className="cursor-pointer font-bold hover:text-gray-600"><SearchOutlined style={{
    'fontSize':'20px'
}}  /></i></Link>}
/>  




     </div>
)

}

export default  Search