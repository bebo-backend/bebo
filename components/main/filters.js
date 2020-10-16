
import Link from 'next/link'
import {Empty,Rate,Avatar,Tag,Statistic,List} from "antd";
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




function Filters({search="",handleSearch=e=>e,clearFilters}){

return (

    <div className="px-2  m-0 bg-white min-h-screen mx-2 sm:mx-14 
    md:mx-0 py-2 pl-6 border-b-2 border-gray-400  " > 

<div className="flex justify-end">
    <span className="bg-blue-500 text-white  p-2 px-1 
    rounded cursor-pointer hover:bg-blue-300" onClick={clearFilters}>Clear x</span>
    </div>
       
    <p className="text-3xl font-bold px-0 mb-6  py-0 leading-tight w-full text-black
     " style={{'textAlign':'left','fontFamily':'serif'}}>
{search ? search :'All'}
    </p>

 





<AcquireFilter search={search} handleSearch={handleSearch}></AcquireFilter>


<ConditionFilter  search={search} handleSearch={handleSearch}></ConditionFilter>



<FilterCategory search={search} handleSearch={handleSearch}/>

    
    <PriceFilter search={search} handleSearch={handleSearch}></PriceFilter>
    <AgencyFilter search={search} handleSearch={handleSearch}></AgencyFilter>

<DeliveryFilter search={search} handleSearch={handleSearch}></DeliveryFilter>

<LocationFilter search={search} handleSearch={handleSearch}></LocationFilter>


  <DurationFilter search={search} handleSearch={handleSearch}></DurationFilter>

   



     </div>
)

}

export default  Filters