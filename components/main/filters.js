
import Link from 'next/link'
import {Empty,Rate,Avatar,Tag,Statistic,List,Button} from "antd";
import {BASE_IMG_URL} from '../../settings'
import {ArrowRightOutlined} from '@ant-design/icons';
import {last} from 'lodash'
import AcquireFilter from '../filter/acquirefilter'
import PriceFilter from '../filter/pricefilter'
import DurationFilter from '../filter/durationfilter'
import LocationFilter from '../filter/locationfilter'
import AgencyFilter from '../filter/agencyfilter'
import FilterCategory from '../filter/categoryfilter'
import ConditionFilter from '../filter/conditionfilter'
import DeliveryFilter from '../filter/deliveryfilter'




function Filters({search="",handleSearch=e=>e,clearFilters,menu}){

return (

    <div className="px-2  m-0 bg-white min-h-screen mx-2 sm:mx-14 
    md:mx-0 py-2 pl-6 sm:border-b-0 border-b-2 border-gray-400  " > 

<div className="flex justify-end">
            <span className="
 text-md 
         cursor-pointer ml-3  leading-loose flex items-end bg-teal-600 text-white hover:bg-teal-300
         pt-1  px-2 border-0 
1  px-3  pb-1 w-20 mx-1

          "  onClick={clearFilters}>Clear x</span>
    </div>

 




<LocationFilter search={search} handleSearch={handleSearch} menu={menu} ></LocationFilter>
<AcquireFilter search={search} handleSearch={handleSearch}></AcquireFilter>


<ConditionFilter  search={search} handleSearch={handleSearch}></ConditionFilter>



<FilterCategory search={search} handleSearch={handleSearch}/>

    
    <PriceFilter search={search} handleSearch={handleSearch}></PriceFilter>
    <AgencyFilter search={search} handleSearch={handleSearch}></AgencyFilter>

<DeliveryFilter search={search} handleSearch={handleSearch}></DeliveryFilter>




  <DurationFilter search={search} handleSearch={handleSearch}></DurationFilter>

   



     </div>
)

}

export default  Filters