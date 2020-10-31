
import {BASE_IMG_URL,BASE_URL} from '../settings'
import {myfetcher} from '../lib/ax-fetch'
import axios from 'axios'
import {useState,useEffect} from 'react'
import DailyDeals from './main/daily-deals' 





// const {data:itemsReview,error:RevError,mutate:mutateItemReviews} = useSWR(()=>BASE_URL+'get_reviews/'+data.id+'/',myfetcher)

const Index=({content=[]})=>{

  const [data,setData] = useState()

useEffect(()=>{

   generateCategory()
   return ()=>{
    
    ;
   }



},[content])

const generateCategory= async()=>{

    var returnData=[];
   const excludeData=[]

   if (content instanceof Array){

 Object.values(content).map(
        prop =>{

// console.log('cart -'+prop);
         returnData.push(prop.category);
         excludeData.push(prop.id);
       });
   } else {

  returnData.push(content.category);
         excludeData.push(content.id);

   }

 

  const sendData = {
  category:returnData,
  excludeData
}

const response = await axios.post(BASE_URL+"cartrecommend/",sendData)

setData(response.data)
}


return (

  <DailyDeals data={data} title="Explore related category" />


  )

    
    }


export default Index
