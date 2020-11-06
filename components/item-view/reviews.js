
import {Comment,Avatar} from 'antd';
import PropTypes from 'prop-types'
import {BASE_IMG_URL,BASE_URL} from '../../settings'
import {myfetcher} from '../../lib/ax-fetch'
import useSWR from 'swr'

import {LoadingOutlined,UserOutlined} from '@ant-design/icons';





// const {data:itemsReview,error:RevError,mutate:mutateItemReviews} = useSWR(()=>BASE_URL+'get_reviews/'+data.id+'/',myfetcher)

const Review=({id})=>{

 const {data:content,error:RevError,mutate:mutateItemReviews} = useSWR(()=>BASE_URL+'get_reviews/'+id+'/',myfetcher)

if (content){

return (
    
        <div className="w-full md:mx-16 md:mr-20">

<p className="text-lg pb-2 mb-8  border-b-2 font-bold">
 Reviews for this item <Avatar className="ml-3"> 
<p className="text-base">{content.data.reviews && content.data.reviews.length}</p> </Avatar> </p>



{content.data.reviews.map((data,index)=> (
<span>
  <Comment datetime={<p className="text-base font-gray-900">{data.created.split("T")[0]}</p>} key={index}
 style={{"textAlign":"left"}} author={<p style={{
	'fontFamily':'serif'
}} className="text-base underline font-black">{data.account.user.username}</p>}
  avatar={data.account.image ? <img className="object-fit rounded-lg" style={{'width':'33px','height':'33px'}} src={BASE_IMG_URL+data.account.image} /> : <UserOutlined style={{'width':'33px','height':'33px'}} /> }


 content={<p className="text-base font-gray-900 md:pr-20">{data.text}</p>}> 
 


 </Comment> </span>

  ))}

  
  

    
        </div>
    )
} 
if(!content) {

 return <LoadingOutlined />
}

    
    
    }


export default Review