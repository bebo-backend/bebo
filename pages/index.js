import Layout from '../components/layout'
import PopularCategory from '../components/main/popularcategory'
import UploadItem from '../components/main/upload-item'
import UploadDetail from '../components/main/upload-detail'
import TopCompany from '../components/main/top-company'
import DailyDeals from '../components/main/daily-deals'
import { BASE_URL } from '../settings'
import axios from 'axios'
import {Select} from "antd";
import {EnvironmentFilled} from '@ant-design/icons';
import gistfile1 from '../contrib/gistfile1'
import {useRouter} from 'next/router'




const Home = ({topCompany,dailyDeals}) => {

const router = useRouter()

const handleChange=(e)=>{

const page=1
const LIMIT=44

const url ="search?search="+e+"&page="+page+"&limit="+LIMIT


router.push(url)

}
    


  return (
  <Layout>


    <div className="m-0 px-2 py-2" >   







  <p className="text-lg md:text-3xl  font-extrabold rounded-lg
  mt-3 text-black  sm:px-5 py-3 md:py-1 center w-full
     " style={{'textAlign':'center'}}>
    Find things you'll love. Support independent sellers. Only on beBO.

    </p>

<p className="bg-white h-12 flex items-center rounded" style={{'border':'1px solid silver'}}>
    <Select  className="w-full" style={{'opacity':'1'}} onChange={value=>handleChange(value)} 
 placeholder={<span className="font-bold"> <EnvironmentFilled className="mr-2" /> Pick Region</span>} 
 showSearch={true} allowClear={true} bordered={false}>

{gistfile1 && Object.values(gistfile1).map((e,index)=>(
  Object.values(e.state.locals).map(city=>(
   <Select.Option value={city.name} key={city.name}>{ city.name + ', '+e.state.name}</Select.Option>
 
    ))
  
)) 
  }



    </Select> 
    </p>
     </div>  





    <TopCompany data={topCompany} />

 <div style={{'backgroundColor':'#01718f'}} className="flex  flex-wrap md:flex-no-wrap justify-evenly mb-8 py-5 mx-0  md:px-5 ">


 <UploadItem />
  <PopularCategory />
 <UploadDetail />



 </div>

 <DailyDeals data={dailyDeals} />

  </Layout>
)
}

export default Home

export const getStaticProps = async()=>{


  // const topCompany = [{

  //   submit_user:{
  //     agencyname:'niyi ogun',
  //     image:null,
  //     rate:3,
  //     rate_count:16},
  //   images:null
  // },
  // {

  //   submit_user:{
  //     agencyname:'jkl',
  //     image:null,
  //     rate:4,
  //     rate_count:16},
  //   images:null
  // }]
  // const dailyDeals=[{

  //   submit_user:{
  //     agencyname:'niyi ogun',
  //     image:null,
  //     rate:3,
  //     rate_count:16},
  //   images:null,
  //   acquire_type:'sale',
  //   price:100,
  //   from_price:140,
  //   to_price:4000,
  //   instock:1,
  //   title:"Huaweil 4s6 flip smartphone"
  // },
  // {

  //   submit_user:{
  //     agencyname:'jkl',
  //     image:null,
  //     rate:4,
  //     rate_count:16},
  //   images:null,
  //   acquire_type:'exchange',
  //   price:0,
  //   from_price:140,
  //   to_price:4000,
  //   instock:4,
  //   title:"new genertroe rtb black"
  // }]

const  response = await axios.get(BASE_URL+'getTopCompany')
const  dailydeals = await axios.get(BASE_URL+'mainsearch')


// const data = await postFetch('/api/auth/getdata', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({'url':'getTopCompany'}),
// })
// console.log('data]]]'+Object.keys(topCompany))



  return {
    props:{
      topCompany:response.data ?response.data:[],
      // topCompany,
      // dailyDeals
      dailyDeals:dailydeals.data ? dailydeals.data:[]
    },
    revalidate:1,
  }


}