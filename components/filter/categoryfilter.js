
import {Tag,Pagination,Select} from "antd";
import {useRouter} from 'next/router'
import {filterOptions} from '../../contrib/options'


    


  const FilterCategory=()=>{
        
  const router = useRouter()



const handleClickTag=(data)=>{


router.push("/search?search="+data.replace('&','and')+"&page="+1)
// const filterurl = "&category="+data
// this.props.handleSearch(filterurl,data,'category')
    
}




      return (
<div className="my-3 w-full text-base" >
<p className="mb-3 font-semibold"> Categories</p>
<span className="">
<Select  className="w-full mr-10" onChange={(value)=>handleClickTag(value.replace('&','and'))}
 placeholder="Select category">




    {filterOptions.map((k,index)=>(
   <Select.Option value={k}>{k}</Select.Option>
    ))
  }




    

    </Select> 


</span>
        </div>

      )

    }
  

  
 
  

  
  
  export default FilterCategory

