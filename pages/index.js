import Layout from '../components/layout'
import PopularCategory from '../components/main/popularcategory'
import UploadItem from '../components/main/upload-item'
import UploadDetail from '../components/main/upload-detail'
import TopCompany from '../components/main/top-company'
import DailyDeals from '../components/main/daily-deals'
import { BASE_URL } from '../settings'
import axios from 'axios'





const Home = ({topCompany,dailyDeals}) => (
  <Layout>


    <div className="m-0 px-4 py-4" style={{'backgroundColor':'#01718f'}}>   

  <p className="text-lg md:text-3xl  font-extrabold rounded-lg
  mt-3 text-white  sm:px-5 py-4 md:py-1 center w-full
     " style={{'textAlign':'center'}}>
    Find things you'll love. Support independent sellers. Only on beBO.

    </p>
     </div>  





    <TopCompany data={topCompany} />

 <div className="flex  flex-wrap md:flex-no-wrap justify-evenly mb-8 pt-5 mx-0  md:px-5 ">


 <UploadItem />
  <PopularCategory />
 <UploadDetail />



 </div>

 <DailyDeals data={dailyDeals} />

  </Layout>
)

export default Home

export const getStaticProps = async()=>{


  const topCompany = [{

    submit_user:{
      agencyname:'niyi ogun',
      image:null,
      rate:3,
      rate_count:16},
    images:null
  },
  {

    submit_user:{
      agencyname:'jkl',
      image:null,
      rate:4,
      rate_count:16},
    images:null
  }]
  const dailyDeals=[{

    submit_user:{
      agencyname:'niyi ogun',
      image:null,
      rate:3,
      rate_count:16},
    images:null,
    acquire_type:'sale',
    price:100,
    from_price:140,
    to_price:4000,
    instock:1,
    title:"Huaweil 4s6 flip smartphone"
  },
  {

    submit_user:{
      agencyname:'jkl',
      image:null,
      rate:4,
      rate_count:16},
    images:null,
    acquire_type:'exchange',
    price:0,
    from_price:140,
    to_price:4000,
    instock:4,
    title:"new genertroe rtb black"
  }]

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