import {useState} from 'react'
import useUser from '../../lib/useUser'
import Layout from '../../components/layout'
import useSWR from 'swr'
import { BASE_URL,BASE_IMG_URL } from '../../settings'
import {myfetcher,fetcher} from '../../lib/ax-fetch'
import {ProfileInfo, ItemInfo} from '../../components/dashboard'
import {UserOutlined,EditFilled} from '@ant-design/icons';
import {Empty,Rate,Avatar} from "antd";
import ProfileEdit from '../../contrib/profile-update'
import useSWRInfinite from "swr";




const SgProfile = () => {
  const { user,mutateUser } = useUser({ redirectTo: '/login' })
const LIMIT = 25
const [page,setPage] = useState(1)
const [update,setUpdate] = useState(false)

  const {data:account,error:AccError,mutate:mutateAccount} = useSWR(()=>BASE_URL+'dashboard/profile/'+user.username+'/',myfetcher)
  // const {data:property,error:propError,mutate:mutateProperty} = useSWR(()=>BASE_URL+'dashboard/myproperty/'+account.data.user.username+'/',myfetcher)

const {data:property,error,mutate:mutateProperty,size,setSize}=useSWRInfinite((index,previousPageData)=>{

if (previousPageData && previousPageData.length === 0) {return null}
if (!index || index===0) return BASE_URL+'dashboard/myproperty/'+account.data.user.username+'/?page='+page+"&limit="+LIMIT;

return BASE_URL+'dashboard/myproperty/'+account.data.user.username+'/?page='+index+"&limit="+LIMIT
},fetcher)

if (!property) return null;








  if (!user || user.isLoggedIn === false) {
    return <Layout>loading...</Layout>
  }

if(account && property){

  return (
    <Layout title={user.username}>

    <ProfileEdit data={account.data} update={update} setUpdate={setUpdate} mutateAccount={mutateAccount} mutateUser={mutateUser} />
<div className=" "> 
    <div className="flex flex-col sm:flex-row w-full justify-center  pl-1 pt-10 pb-20  "
   >
<div className="flex flex-col sm:flex-row self-center">
    <i className="ml-10 sm:ml-0 pl-4 sm:pl-1 hover:border-b-2 mr-0 md:mr-5 z-20 ">

    <Avatar className="shadow" src={BASE_IMG_URL+account.data.image} 
style={{"width":'137px','height':'137px'
    }} icon={<UserOutlined className="text-6xl object-center mt-4" ></UserOutlined>} className="">
    </Avatar >


    <EditFilled onClick={e=>setUpdate(true)} className="relative bg-white p-3 rounded-full" style={{
      'top':'43px','marginLeft':'-14px'
    }} /> </i>

<div className="block">
<h1 className="text-4xl font-extrabold m-0 px-5">{account.data.agencyname}</h1> 
<span  className="pl-5 text-gray-600 m-0 text-base wrap">www.bebo.now.sh/shop/{account.data.agencyname}  </span>
<table className="table m-2">

<tr >
<td ><span className="mx-3 text-3xl center">{account.data.rate_count}</span></td>
<td><span className="mx-3 text-3xl center">{property.res && Object.keys(property.res).length}</span></td>
<td><span className="mx-3 text-3xl center">{account.data.rate}</span></td>
</tr>

<tr>
<td><span className="mx-3 text-base font-semibold">Ratings </span></td>
<td><span className="mx-3 text-base font-semibold">Collections</span>
</td><td><span className="mx-3 text-base font-semibold">Stars </span></td>

</tr>


</table>
</div>
 
</div>
    </div>
    
    <div className="block sm:flex w-full  md:px-3">

    <ProfileInfo data={account.data} mutateAccount={mutateAccount} />
    <ItemInfo itemdata={property && property} page={page} setPage={setPage} mutateProperty={mutateProperty} />

    </div>

    </div>

 
    </Layout>
  )
} else {

  return  <Layout>loading...</Layout>
}





 
}



export default SgProfile










