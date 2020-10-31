import GroupPics from './group-pictures'
import {Empty,Button,Avatar,Input,Rate} from 'antd';
import { BASE_IMG_URL,BASE_URL } from '../../settings'
import {useState} from 'react'
import {CaretLeftOutlined,CaretRightOutlined,ArrowRightOutlined,UserOutlined,ClockCircleFilled,
EyeFilled} from '@ant-design/icons';
import Review from './reviews'
import Description from './description'
import ItemInfo from './item-info'
import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from 'axios'
import {mutate} from 'swr'
import moment from 'moment'


const Index=({data,user})=>{



const [step, setStep] = useState(0)
const [stateReview, setStateReview] = useState(0)
const router = useRouter()

const createDate=(date)=>{
const newdate = date.split('T')[0]
const time = date.split('T')[1].split('.')[0]

return newdate+ " at " +time



}

const submitReview=()=>{

axios.post(BASE_URL+"addreview/"+data.id+'/'+user?.username+'/',{'text':stateReview}).then(e=>{

mutate(BASE_URL+'get_reviews/'+data.id+'/')


})

}

const stepMove=(value)=>{

        return <div style={{
          'marginTop':'180px'}} className="flex justify-around absolute  
        w-full">
  

      { value > 0 && 
        <button className="mx-3 p-1  " 
        onClick={e=>setStep(value-1)}><CaretLeftOutlined className="
      shadow-lg text-3xl sm:text-5xl bg-white rounded-full "/></button>
      }

      {value < data.images.length-1 && 
      <button className="mx-3 p-1 " 
      onClick={e=>setStep(value+1)}><CaretRightOutlined className="
      shadow-lg text-3xl sm:text-5xl bg-white rounded-full " /></button>
      }

</div>
       

      }





 return <div className="mx-0 md:ml-3 mb-2 md:mx-0 w-full rounded-lg ">
<div className=" p-2 justify-left px-0 md:px-0  flex overflow-y-hidden"
 style={{'maxHeight':'600px'}}>
<GroupPics  images={data.images && data.images} step={step} />





<div className="w-full md:w-5/6 mx-0 mb-4 p-2 md:p-0 flex justify-center" style={{'maxHeight':'530px'}}>  
{stepMove(step)}


   <img className="object-cover sm:object-contain  w-full  " 
   onClick={e=>router.push(BASE_IMG_URL+data.images[step].images)}
      src={BASE_IMG_URL+data.images[step].images}></img>
 

     


</div>

</div>

<div className="flex text-gray-700">
<p className="mx-3"><ClockCircleFilled className="mr-2 text-base" /> Posted {createDate(data.created)} </p> | <p className="mx-3">
<EyeFilled  className="mr-2 text-base" /> {data.views} views </p>

</div>
<div>  




<div className="p-3 md:mr-20">
<div className=" hidden md:block">

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
 style={{"width":'35px','height':'32px','marginTop':'1px'}} className="mt-3">
</Avatar>
 <Input className="h-12 ml-3 " name="review" required allowClear 
onChange={e=>setStateReview(e.target.value)}  
autoComplete="true"  placeholder="Write a Review on item" 

/>


<button className="h-12 w-20 bg-blue-500 rounded mx-3 text-white hover:bg-blue-300"  
 onClick={e=>{ e.preventDefault();submitReview()}}> <ArrowRightOutlined 
  className="text-md sm:text-2xl text-white"/> </button>

</form>
:


  <div className='btn w-full center h-10 flex justify-center items-center 
'>
<Link href="/login">
<button className="text-base font-extrabold w-full sm:w-2/5 h-10  bg-red-700 rounded-md mt-3 text-white  hover:bg-red-500"
>
<a className="sm:text-lg text-base font-extrabold text-white w-full "style={{'textAlign':'center'}}
> 
Login to Post Review</a>
</button>
</Link>

</div>

 }

</div>




</div>

</div>

}


export default Index