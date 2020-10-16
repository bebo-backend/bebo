import {tagOptions} from '../../contrib/options'
import Link from 'next/link'
import {Tag} from "antd";
import {BASE_IMG_URL} from '../../settings'
// import {FileJpgOutlined,UserOutlined,ArrowRightOutlined} from '@ant-design/icons';


function Tags(){

return (

    <div className="mt-0 w-full flex-inline justify-center mx-1 " style={{
        'textAlign':'center'
    }}> 
    {

Object.keys(tagOptions).length >0 && tagOptions.map((data,key)=>(

    <Link key={key} href={"/search?search="+data.replace('&','and')+"&tags=true"}>
<a>
    <Tag color="grey" key={key} className="mx-1 cursor-pointer"   style={{
        'borderRadius':"20px",'border':'0px solid',
        'fontSize':'13px','cursor':'pointer'
         }} > {data}</Tag>


</a>
    </Link>

))
        }
     </div>
)

}

export default Tags