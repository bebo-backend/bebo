import {tagOptions} from '../../contrib/options'
import Link from 'next/link'
import {Tag} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {useRouter} from 'next/router'

// import {FileJpgOutlined,UserOutlined,ArrowRightOutlined} from '@ant-design/icons';


function Tags(){

const router = useRouter()
const {search,tag} = router.query

// const tagAddr =search? "/search?search="+search.replace("and","&")+"&tags=true":""

return (

    <div className="mt-0 w-full flex flex-row flex-wrap justify-center md:mx-1 w-full " style={{
        'textAlign':'center'
    }}> 
      <Link  href="/">
<a>
    <Tag className="mx-2 cursor-pointer" color={router.asPath==='/'?"grey":""}   style={{
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
    <Tag color={router.asPath.replace("and","")==="/search?search="+data.replace("&","").replace(" ","%20")+"&tags=true"?"grey":""} key={key} className="mx-1 cursor-pointer"   style={{
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