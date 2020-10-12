import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import { BASE_URL } from '../../../settings'
import axios from 'axios'
import {LoadingOutlined} from '@ant-design/icons';
import ImgReview from '../../../components/item-view/img-review'
import ItemInfo from '../../../components/item-view/item-info'
import useUser from '../../../lib/useUser'
import Cartrecommend from '../../../components/cartrecommend'






const Item = ({data}) =>{


  {data && axios.get(BASE_URL+"addview/"+data.id)}

  const router = useRouter();
  const { user, mutateUser } = useUser()


const arrayData = []
if(data){
  arrayData.push(data)}

  if (router.isFallback) {
    return <div className="w-full flex justify-center my-20 text-lg font-semibold">loading <LoadingOutlined /></div>
  }


return (

  <Layout title={data && data.title}>

  { data && 
<div className="flex-inline sm:flex mt-0 pl-2 shadow-none pt-5 md:pl-5 w-full bg-white pr-5"> 

<div className="sm:w-3/4 w-full flex  "> 



<ImgReview data={data} user={user} />


</div>


<div className="hidden md:block w-full order-3 sm:w-1/4  pb-2 mb-2 mx-4 px-3 md:mx-0 md:px-0 rounded-lg"> 

<ItemInfo data={data} isLoggedIn={user?.isLoggedIn} username={user?.username} />

</div>


</div>


}


{Object.keys(arrayData).length > 0 && <Cartrecommend content={arrayData} /> }

  </Layout>
)
}


export default Item





export const getStaticPaths= async ()=>{

const  response = await axios.get(BASE_URL+'getallitem')

  const paths = response.data.map((item) => ({
    params: { 'id': String(item.id),'title':String(item.title)},
  }))



  return {
    paths,
    fallback:true
  }
}




export const getStaticProps = async({params})=>{

const {id}=params

const  response = await axios.get(BASE_URL+'toview/'+id)



  return {
    props:{
      data:response.data ?response.data:[]
    },revalidate:1
  }


}