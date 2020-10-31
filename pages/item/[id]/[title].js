import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import { BASE_URL } from '../../../settings'
import axios from 'axios'
import {LoadingOutlined} from '@ant-design/icons';
import ImgReview from '../../../components/item-view/img-review'
import ItemInfo from '../../../components/item-view/item-info'
import useUser from '../../../lib/useUser'
import Cartrecommend from '../../../components/cartrecommend'
import Link from 'next/link'
import {Breadcrumb,Typography} from "antd";
import {fetcher} from '../../../lib/ax-fetch'
import useSWRInfinite from "swr";




const Item = ({id}) =>{



  const router = useRouter();
  const { user, mutateUser } = useUser()
const response = axios.get(BASE_URL+"addview/"+id)

const {data,error,mutate,size,setSize,isReachingEnd}=useSWRInfinite((index,previousPageData)=>{

if (previousPageData && previousPageData.length === 0) return null
if (!index || index===0) return BASE_URL+'toview/'+id

return BASE_URL+'toview/'+id

},fetcher)

if (!data) return  <p className="flex justify-center items-center h-screen w-sreen text-4xl text-pink-600"> <LoadingOutlined /> </p>;




return (

  <Layout title={data && data.title}>

   {data && <p className=" text-2xl flex justify-between pt-3 pb-3 sm:pb-0 m-0 mb-0  px-3 sm:px-5 center leading-tight w-full
    text-white" style={{'backgroundColor':'#01718f'}} >
<p className="  w-full">
<Breadcrumb className="flex w-full" >

  <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-white"  >Ad
       </Breadcrumb.Item>

     <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-white"  >
     <Link href={"/search?search="+data.category}><a className='text-white' style={{'color':'white'}}>
     {data.category} </a></Link>
       </Breadcrumb.Item>
     

      <Breadcrumb.Item className="font-extrabold  leading-tight capitalize text-md text-white"  >{data.title}
       </Breadcrumb.Item>
      
 
      </Breadcrumb> 

      </p> 
      </p>
}


  { data && 
<div className="flex-inline sm:flex mt-0 pl-1 shadow-none pt-5 md:pl-1 w-full bg-white sm:pr-5"> 

<div className="sm:w-3/4 w-full flex  "> 



<ImgReview data={data} user={user} />


</div>


<div className="hidden md:block w-full order-3 sm:w-1/4  pb-2 mb-2 mx-4 px-3 md:mx-0 md:px-0 rounded-lg"> 

<ItemInfo data={data} isLoggedIn={user?.isLoggedIn} username={user?.username} />

</div>


</div>


}


{Object.keys(data).length > 0 && <Cartrecommend content={data} /> }

  </Layout>
)
}


export default Item





// export const getStaticPaths= async ()=>{

// const  response = await axios.get(BASE_URL+'getallitem')

//   const paths = response.data.map((item) => ({
//     params: { 'id': String(item.id),'title':String(item.title)},
//   }))



//   return {
//     paths,
//     fallback:true
//   }
// }




export const getServerSideProps = async({query})=>{

const {id}=query

// const  response = await axios.get(BASE_URL+'toview/'+id)
axios.get(BASE_URL+"addview/"+id)


  return {
    props:{
      // data:response.data ?response.data:[],
      id
    }
  }


}