import Layout from '../components/layout'
import PopularCategory from '../components/main/popularcategory'
import UploadItem from '../components/main/upload-item'
import UploadDetail from '../components/main/upload-detail'
import TopCompany from '../components/main/top-company'
import DailyDeals from '../components/main/daily-deals'
import { BASE_URL } from '../settings'
import axios from 'axios'
import {Select,Menu,Cascader} from "antd";
import {EnvironmentFilled} from '@ant-design/icons';
import gistfile1 from '../contrib/gistfile1'
import {getRegion} from '../contrib/region'
import Category from '../components/category-menu'
import {useRouter} from 'next/router'
import Link from 'next/link'




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


    <div className=" px-0 py-2 mt-3 sm:mt-16 w-full " >   







  <p className="text-lg md:text-3xl  font-extrabold 
  my-0  text-black  sm:px-5 py-2 sm:px-3  w-full 
     " style={{'textAlign':'center'}}>
    Find things you'll love. Support independent sellers. Only on teba.

    </p>





    <p className=" px-2 bg-teal-200 h-16 flex sm:text-lg items-center justify-center  my-2 font-bold  " 
    style={{'border':'0px solid silver'}}>
   <span className="">Find in your area </span><Select  className="sm:w-64 w-full" style={{'opacity':'1'}}  
 placeholder={<span className="font-bold"> <EnvironmentFilled className="mr-2" /> Pick Region</span>} 
 showSearch={true} allowClear={true} bordered={false}>

{gistfile1 && Object.values(gistfile1).map((e,index)=>(
  <>
    <Select.Option value={e.state.name} key={e.state.name}>
  <Menu>
  
  <Menu.SubMenu title={e.state.name}>


<Menu.Item >
  <Link key={index} href={"/search?search="+e.state.name.replace(' ','').replace('State','')}>
<span className=""> All {e.state.name}</span>
</Link>
</Menu.Item>


{Object.values(e.state.locals).map((city,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+city.name.replace('&','and')}>
{city.name}

</Link>
</Menu.Item>

))}




  </Menu.SubMenu>


</Menu>
</Select.Option>


  
</>)) 
  }



    </Select> 
    </p>



 
        </div>

<div className=" sm:flex sm:px-6 px-0 ">
<div>
<Category />

</div>
<div className="w-full">

 <div  className="  flex-wrap md:flex-no-wrap justify-evenly mb-4 py-2 mx-0  md:px-2 hidden sm:flex">


 <UploadItem />
  <PopularCategory />
 <UploadDetail />



 </div>

<DailyDeals data={dailyDeals} />

 <div className="mx-auto mt-4 mb-4 w-full flex justify-center">

    <Link href="/search?search=all">
          <a style={{'border':'1px solid #1890ff'}}
            className=" hover:bg-blue-500
            hover:text-white font-bold py-2 px-8 rounded"
       
          >
              See all
          </a>
   </Link>
      
        </div>
        </div>

</div>



    <TopCompany data={topCompany} />




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