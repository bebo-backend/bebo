import {tagOptions} from '../../contrib/options'
import Link from 'next/link'
import {Tag} from "antd";
import {BASE_IMG_URL} from '../../settings'
// import {FileJpgOutlined,UserOutlined,ArrowRightOutlined} from '@ant-design/icons';


function Tags(){

return (

    <div className="mt-0 w-full inline justify-around md:mx-1 " style={{
        'textAlign':'center'
    }}> 
      <Link  href="/">
<a>
    <Tag className="mx-2 cursor-pointer" color="grey"   style={{
        'borderRadius':"20px",'borderBottom':'0px solid black',
        'fontSize':'13px','cursor':'pointer','marginBottom':'9px','borderLeft':'0px solid',
        'borderRight':'0px solid','borderTop':'0px solid','marginRight':'12px'
         }} > Home</Tag>


</a>
    </Link>

    {

Object.keys(tagOptions).length >0 && tagOptions.map((data,key)=>(

    <Link key={key} href={"/search?search="+data.replace('&','and')+"&tags=true"}>
<a>
    <Tag color="" key={key} className="mx-1 cursor-pointer"   style={{
        'borderRadius':"20px",'border':'0px solid',
        'fontSize':'13px','cursor':'pointer','marginBottom':'9px','marginRight':'12px'
         }} > {data}</Tag>


</a>
    </Link>

))
        }
     </div>
)

}

export default Tags