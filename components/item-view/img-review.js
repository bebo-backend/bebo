import GroupPics from './group-pictures'
import {Empty,Button,Avatar,Input,Rate} from 'antd';
import { BASE_IMG_URL,BASE_URL } from '../../settings'
import {useState} from 'react'
import {LeftOutlined,RightOutlined,ArrowRightOutlined,UserOutlined,HeartOutlined} from '@ant-design/icons';
import Review from './reviews'
import Description from './description'
import ItemInfo from './item-info'
import Link from 'next/link'

import axios from 'axios'
import {mutate} from 'swr'

const Index=({data,user})=>{



const [step, setStep] = useState(0)
const [stateReview, setStateReview] = useState(0)


const submitReview=()=>{

axios.post(BASE_URL+"addreview/"+data.id+'/'+user?.username+'/',{'text':stateReview}).then(e=>{

mutate(BASE_URL+'get_reviews/'+data.id+'/')


})

}

const stepMove=(value)=>{

        return <div className="flex justify-around w-full absolute"><p style={{
        	'marginTop':'180px'}} className=" z-30 w-full   " 
        >


      { value > 0 && 
        <button className="mx-3 p-1  " 
        onClick={e=>setStep(value-1)}><LeftOutlined className="
      shadow-lg text-3xl sm:text-5xl bg-white rounded-full "/></button>
      }

      {value < data.images.length-1 && 
      <button className="mx-3 p-1 " 
      onClick={e=>setStep(value+1)}><RightOutlined className="
      shadow-lg text-3xl sm:text-5xl bg-white rounded-full " /></button>
      }
      </p>
</div>
       

      }





 return <div className="ml-0 md:ml-1 mb-10 md:mx-0 w-full rounded-lg ">
<div className=" p-2 justify-center px-0 md:justify-left md:px-0  flex overflow-y-hidden"
 style={{'maxHeight':'600px'}}>
<GroupPics  images={data.images && data.images} step={step} />


<div className="w-3/4 mx-1 flex absolute justify-end pr-24 pt-5 lg:pr-64 ">  
<HeartOutlined className=" float-right absolute text-2xl 
cursor-pointer hover:border-2 p-2
 rounded-full 
 bg-white shadow-lg" /> 

 </div>


<div className="w-5/6 mx-1 flex" style={{'maxHeight':'530px'}}>  



     <img className="object-scale-down sm:object-cover  rounded  " 
      src={BASE_IMG_URL+data.images[step].images}></img>
     {stepMove(step)}


</div>

</div>
<div>  




<div className="p-3 md:mr-20">
<div>

<Description data={data} />




</div>

<div className="block md:hidden w-full  pb-2 mb-2 md:mx-0 md:px-0 "> 

<ItemInfo data={data} isLoggedIn={user?.isLoggedIn} username={user?.username} />

</div>
        <h2 style={{
  'fontFamily':'serif'
}} className="text-2xl font-bold capitalize pt-6 mt-5 text-gray-700"> ({data.submit_user.rate_count}) 
  ratings
<span className="mx-5"><Rate value={data.submit_user.rate} allowClear={false}
 disabled> </Rate> </span> </h2>


{data?
  <div>

<Review id={data.id} />



</div> :
<Empty description="No available review(s)">

</Empty>
 }








{user?.isLoggedIn ?
  <form className="flex items-center mt-5">
 <Avatar src={BASE_IMG_URL+user.image} icon={<UserOutlined></UserOutlined>}  
 style={{"width":'48px','height':'48px','marginTop':'1px'}} className="mt-3">
</Avatar>
 <Input className="h-12 ml-3 shadow-lg" name="review" required allowClear 
onChange={e=>setStateReview(e.target.value)}  
autoComplete="true"  placeholder="Write a Review on item" 
style={{'width':"50%"}}
/>


<button className="h-12 w-20 bg-blue-500 rounded mx-3"  
 onClick={e=>{ e.preventDefault();submitReview()}}> <ArrowRightOutlined 
  className="text-2xl text-white"/> </button>

</form>
:


  <div className='btn w-full center h-10 flex justify-center items-center 
'>
<Link href="/login">
<button className="text-base font-extrabold w-2/5 h-10  bg-red-700 rounded-md mt-3 text-white  hover:bg-red-500"
>Login to Post Review</button>
</Link>

</div>

 }

</div>




</div>

</div>

}


export default Index