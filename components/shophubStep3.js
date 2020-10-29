


import {useState} from 'react';

import {
Upload,Typography,Button} from "antd";
import {InfoCircleOutlined, CloudUploadOutlined,PlusCircleOutlined,
FileImageOutlined,UpCircleOutlined} from '@ant-design/icons';








function Step3({formValue,setFormValue}){




function updateImage(file,FileList){


          
            const reader = new FileReader()

            reader.readAsDataURL(file)


            reader.onload=e=>{

              file.thumbUrl=e.target.result
              const imageList = [...formValue.images,file]

            	setFormValue({...formValue,images:imageList})

              
              }



            }


function removeImage(file){

    const imageList = formValue.images.filter(image=>image != file)

    setFormValue({...formValue,images:imageList})

return true

}






 return <div className="mb-20 sm:mx-10">

 <h2 className='text-xl md:text-2xl font-bold mb-5  text-gray-700'> PICTURE(S) UPLOAD <CloudUploadOutlined className="mx-5"/>  </h2>
 <hr className="mb-5" />

<div className="p-4 bg-gray-200" style={{'border':'1px dashed '}}>
 <div className="block w-full">
<div className="flex justify-center" style={{'textAlign':'center'}}>
<Upload onRemove={file=>removeImage(file)} beforeUpload={(file,FileList)=>{updateImage(file,FileList); 
  return false}} listType="picture-card" multiple showUploadList>

  

  <Button type="primary" className="mx-5"> SELECT</Button> </Upload>

  </div>



</div>

<div className="w-full my-5 " style={{'textAlign':'center'}}>
<p className="font-bold text-lg"> Drag and drop image files to upload</p>
  <p className="font-bold text-base"> You can upload multiple images</p>

<p className="text-base mb-5" > By uploading your product or item to teba, you 
acknowledge that you agree to teba Shop's<Button type="link">Terms of  Service and 
Community Guidelines </Button> </p>


</div>
</div>



</div>
 


}



export default Step3