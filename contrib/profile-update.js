import {Upload,Button,Alert,Input,Modal} from "antd";
import {useState,useEffect} from 'react'
import {EditFilled,MailFilled,PhoneFilled} from '@ant-design/icons';
import axios from 'axios'
import {BASE_URL} from '../settings'




export default function ProfileEdit({data={},update=false,setUpdate,mutateAccount,mutateUser}){
    const [formValue,setFormValue]=useState({})
    const [updateDone,setUpdateDone] = useState(false)
    const [startUpdate,setStartUpdate] = useState(false)


    const transformData=(data)=>{

        let formdata = new FormData()

        for (var x in data){
            formdata.append(x, data[x])

        }

        return formdata

    }

const UploadUpdate= async ()=>{
    setStartUpdate(true)
    const updateData= {
        ...formValue,username:data.user.username
    }
    
   
   await axios.post(BASE_URL + "dashboard/updateprofile/", transformData(updateData),{
        headers:{
            'content-type':'multipart/form-data'
        }
    }).then(res => {
                    
  setUpdateDone(true)
  setStartUpdate(false)
  mutateAccount()
  mutateUser()
    
            }).then(err => {
    
                console.log("error - " + err)
    
            })

  
  }
  
async function UpdateValue(e){

    const data = { ...formValue,[e.target.name]:e.target.value}
    
    setFormValue(data)
    
      }



    const handleImage=(file,FileList)=>{

        const reader = new FileReader()        
        reader.readAsDataURL(file)   
               
        reader.onload=e=>{       
        
          file.thumbUrl=e.target.result
           
          setFormValue({...formValue,image:file})
              
        
        }
    }
    


    return    <Modal visible={update} confirmLoading={startUpdate} centered 
                title={<span className="text-base font-bold uppercase"> <EditFilled /> Update Account: <i>{data && data.agencyname}</i></span>} 
                okType="primary" okText={!updateDone && <a type="primary" onClick={UploadUpdate}> Update  </a>   } 
                cancelText={<a onClick={e=>{e.preventDefault();  setUpdate(false);
                    setUpdateDone(false); setStartUpdate(false) }}
                    
                    >Close </a>}>
  
     { updateDone ? 
  <>
  
  <Alert showIcon type="success" message="Update successful" ></Alert>
  <p> Done...</p>
  </>
  
      :
  
            
  <form>

  <div className="block w-full" style={{'textAlign':'center'}}>
  <Upload className="w-full"    beforeUpload={(file,FileList)=>{handleImage(file,FileList); 
    return false}} listType="picture-card" showUploadList style={{'width':'50px'}}>

  
      <Button type="primary"> SELECT</Button>
  
  
  
  
  </Upload>
  <p className="text-base font-bold w-full"> Drag and drop profile picture to upload</p>
  
  
  
  
  
  </div>
  
  <label  className="text-md font-semibold "  htmlFor="agency">Shop Name </label>
  <Input className="my-3 h-10" name="agency_name" required allowClear 
  onChange={UpdateValue} autoComplete="true"  placeholder={data && data.agencyname}
  />
  
  
  <label  className="text-md font-semibold "  htmlFor="email">E-mail </label>
  <Input className="my-3 h-10" prefix={<MailFilled/>} name="email" required allowClear 
  onChange={UpdateValue}  autoComplete="true"  placeholder={data && data.user.email}
  />
  
  
  <label  className="text-md font-semibold " htmlFor="tel">Phone No: </label>
  <Input className="my-3 h-10" prefix={<PhoneFilled/>} name="tel" required allowClear type="tel" 
  onChange={UpdateValue}  autoComplete="true"  placeholder={data && data.phone_no}
  />
  
  <label  className="text-md font-semibold "  htmlFor="website">Website: </label>
  <Input  className="my-3 h-10" prefix={"www"} name="website" required allowClear 
  onChange={UpdateValue}  autoComplete="true"  placeholder={data && data.website}
  />
  
    
<div className="grp-input">
<label htmlFor="req" className="capitalize text-md font-semibold my-2 ">About Company </label>
<div>
<textarea name="about" className="p-3 my-4 mb-4 rounded w-full h-32 "  
style={{'border':'1px solid silver'}} onChange={UpdateValue} 
 placeholder={data.about ? data.about:"Write about your business or company"} >
</textarea> 
</div>


</div>
  </form>
  
     }
       
  
  
            </Modal>
      }
  