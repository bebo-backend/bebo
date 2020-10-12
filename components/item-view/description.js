
import {Comment,Avatar} from 'antd';
import PropTypes from 'prop-types'
import {BASE_IMG_URL,BASE_URL} from '../../settings'
import {LoadingOutlined,UserOutlined} from '@ant-design/icons';
import {useState} from 'react'




const Review=({data})=>{
	const [show,setShow] = useState(0)

return (

	<div className="my-10">  
{data.description && 
	      <span onClick={e=>setShow(0)} style={{
'backgroundColor':show === 0 && "red"
}} className="md:text-base cursor-pointer font-extrabold bg-blue-600 p-2  mx-1 p-2 mt-10 text-white rounded  uppercase hover:bg-blue-300">
description  
 </span>

}




{data.exchange_item && 
	      <span onClick={e=>setShow(1)}  style={{
'backgroundColor':show === 1 && "red"
}} className="md:text-base rounded cursor-pointer font-extrabold bg-blue-600 p-2  mx-1 p-2 mt-10 text-white  uppercase hover:bg-blue-300">
exchangable item
 </span>

}

{data.requirement && 
	      <span onClick={e=>setShow(2)}  style={{
'backgroundColor':show === 2 && "red"
}} className="md:text-base rounded cursor-pointer  font-extrabold bg-blue-600 p-2  mx-1 p-2 mt-10 text-white  uppercase hover:bg-blue-300">
requirement 
 </span>

}


{data.issue && 
	      <span onClick={e=>setShow(3)} style={{
'backgroundColor':show === 3 && "red"
}} className="md:text-base rounded cursor-pointer  font-extrabold bg-blue-600 p-2  mx-1 p-2 mt-10 text-white  uppercase hover:bg-blue-300">
issue  
 </span>

}
<hr className="mt-2"/>

{show === 0 && <pre className="my-6 text-base text-black whitespace-pre-wrap"> {data.description} </pre>}

{show === 1 && <pre className="my-6 text-base text-black whitespace-pre-wrap"> {data.exchange_item} </pre>}

{show === 2 && <pre className="my-6 text-base text-black whitespace-pre-wrap"> {data.requirement} </pre>}

{show === 3 && <pre className="my-6 text-base text-black whitespace-pre-wrap"> {data.issue} </pre>}




 </div>)
    
    }


export default Review