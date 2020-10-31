
import { BASE_IMG_URL } from '../../settings'



const GrpPics=({images,step})=>{




 return <div className="hidden lg:flex md:flex-inline w-1/7 p-0 overflow-y-scroll ">

<ul className="h-screen scrolling-touch">
       {images.map((e,index)=>(
    
        <li><img key={index} style={{'height':'85px','width':'90px',
        'border':index==step && '2px solid red'}} className="rounded 
        object-cover m-1 p-1  " src={BASE_IMG_URL+e.images}></img></li>
        
    )
        )
    }
       </ul>



</div>

}


export default  GrpPics