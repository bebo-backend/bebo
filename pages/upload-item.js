import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/layout'
import ShopHubForm from '../components/shophubform'
import {Modal, Alert,Steps,Button} from "antd";
import {BASE_URL} from '../settings'
import axios from 'axios'
import { useRouter } from 'next/router'
import {LoadingOutlined} from '@ant-design/icons';
import Step1 from '../components/shophubStep1'
import Step2 from '../components/shophubStep2'
import Step3 from '../components/shophubStep3'
import Step4 from '../components/shophubStep4'
import Step5 from '../components/shophubStep5'







const ShopHub = () => {
  const {user, mutateUser } = useUser({
    redirectTo: '/login'
  })

  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState('')
  const initialFormData = {
    images:[],
    acquire_type:'sale',
    condition:'new',
    negotiable:'no',
    duration:'weekly',
    dur_count:1,
    instock:1,
payment_type:"Bank Transfer, ",
delivery:'no'

  }
  const [formValue, setFormValue] = useState(initialFormData)
  const [updateDone,setUpdateDone] = useState(false)
  const [startUpdate,setStartUpdate] = useState(false)
  const [step, setStep] = useState(0)


const transformData=(data)=>{

      let formdata = new FormData()

      for (var x in data){
          if(x == 'images'){

            for (var image in data[x]){
              // console.log(image+' = '+Object.values(data[x][image] ))

                formdata.append('images', data[x][image])
            }

          } else {

            formdata.append(x, data[x])
          }
      

      }

      return formdata

  }

const submitForm= async ()=>{

  setStartUpdate(true)

  const updateData= {
      ...formValue,username:user.username
  }
  
 
 await axios.post(BASE_URL +"store/upload/", transformData(updateData),{
      headers:{
          'content-type':'multipart/form-data'
      }
  }).then(res => {
                  
setUpdateDone(true)
setStartUpdate(false)

  
          }).then(err => {
  
              console.log("error - " + err)
  
          })


}




  async function onChange(e,type_data){

    if (type_data =="category"){

        const data = {
            ...formValue,
            [type_data]: Object.values(e)[1]
        } 
        setFormValue(data)
     
    } else {
     // console.log(type_data+' = '+e)
        const data = {
            ...formValue,
            [type_data]:e.target && 'value' in Object.keys(e.target) ?e.target.value : e 
        }
        
        setFormValue(data)
    }


  }






const steps=(step)=>{
    return <Steps direction="horizontal"  current={step}>


      <Steps.Step title={<p className="font-bold hidden sm:block"> DETAILS </p>}>

      </Steps.Step>
       <Steps.Step   title={<p className="font-bold hidden sm:block"> MORE DETAILS </p>} >

      </Steps.Step>
      <Steps.Step   title={<p className="font-bold hidden sm:block"> IMAGE(S) UPLOAD </p>}  >

      </Steps.Step>

      <Steps.Step  title={<p className="font-bold hidden sm:block"> DELIVERY </p>} >

      </Steps.Step>
      <Steps.Step  title={<p className="font-bold hidden sm:block"> PAYMENT </p>} >

    </Steps.Step>

    </Steps>

    }


const stepMove=(value)=>{

        return <p className="flex justify-center">


      { value > 0 && 
        <Button type="ghost" className="mx-3 w-24 " 
        onClick={e=>setStep(value-1)}>Back</Button>
      }

      {value < 4 && 
      <Button className="mx-3 w-24 py-2" type="primary" 
      onClick={e=>setStep(value+1)}>Next</Button>
      }
      </p>

       

      }


  return (
    <Layout title="Shop Hub - Upload" >
    <Modal visible={updateDone} centered title="Upload successful"  okType="primary" okText={
        <a onClick={e=>{ setUpdateDone(false); setStartUpdate(false);}}> Upload More </a>
           
                } cancelText={<a onClick={e=>{e.preventDefault();
                     setUpdateDone(false); setStartUpdate(false);
                 router.push('/')
           
               }}
                
                type="ghost">Home </a>}>
           
           <Alert showIcon type="success" message="Upload Successful" ></Alert>
           <h2> Go to Home or Upload more</h2>
           
           
                       </Modal>

     <Modal visible={startUpdate} closable={false} footer={null} centered title={<p className="text-base font-bold">"Uploading..."</p>}>
                           
                          <div className="flex justify-center">
                          
                          <LoadingOutlined className="text-base"/>
                          </div>
                           
                           
                                       </Modal>






<div className="bg-white py-3 mx-5 shadow-2xl my-5">
    <div className="flex w-full justify-center mt-2 mb-0 ">  
    <span className="uppercase text-4xl font-extrabold mb-0">Shop hub</span>
    

    </div>


    <div className="flex w-full justify-center mt-0 mb-2 ">  
    <p className=" text-lg text-gray-600 mx-3">
    Upload product on your shop for Sale, Rental or Exchange
    </p> 
    </div>

</div>

    <div className="mx-10">
    
    {steps(step)}
    </div>


<div className="flex w-full justify-center">
      <div className=" w-full sm:w-3/4 my-8 mx-4 px-5  sm:px-10 mt-0 bg-white py-5 mt-3 shadow-2xl rounded-lg ">

                    {step==0 &&

                        <div>
                      <Step1 handlechange={onChange}   />
                    
                      {stepMove(0)}
                      </div>
                    
                       }


                         
  {step==1 &&
  
    <div>
    
    <Step2 handlechange={onChange} data={formValue}   />
    {stepMove(1)}
    </div>
    }
    
        
  {step==2 &&
  
    <div>
    
    <Step3  formValue={formValue} setFormValue={setFormValue}  />
    {stepMove(2)}
    </div>
    }

      
  {step==3 &&
    <div>
  
  <Step4 handlechange={onChange}   />
  {stepMove(3)}
  </div>
  
  }

  {step==4 &&
  
  
    <div>
  
  <Step5 handlechange={onChange} submitForm={submitForm}  />
  {stepMove(4)}
  </div>
  
  }
  

      </div>      
      </div>

    </Layout>
  )
}

export default ShopHub




  

  

  
