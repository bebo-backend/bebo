
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css"
import {withRouter} from 'react-router-dom'
import {List,Card,Button} from "antd";
import {connect} from 'react-redux'
import {FilterOutlined,CloseOutlined,HomeOutlined,ArrowLeftOutlined} from '@ant-design/icons';
import AcquireFilter from '../search/acquirefilter'
import PriceFilter from '../search/pricefilter'
import DurationFilter from '../search/durationfilter'
import LocationFilter from '../search/locationfilter'
import AgencyFilter from '../search/agencyfilter'
import FilterCategory from '../search/categoryfilter'
import ConditionFilter from '../search/conditionfilter'
import DeliveryFilter from '../search/deliveryfilter'
import {dailyDeals} from "../../actions/search"
import {updateAjaxRoute} from '../../actions/ajaxroute'
import {setToHome} from '../../actions/contrib'
import {get_current_address} from "../../actions/location"
import {setFilter,setFilterToggle} from "../../actions/filter"
import "../../css/filter.css"








    const mapStateToProps= (state, props)=>({
    
      
        mainData:state.MainData,
        filToggleVal:state.filterToggleStat
      
    })


    


  class FilterPage extends Component{
        
    
    constructor(props){
    super(props)

}

componentWillMount(){

     this.props.setFilter(this.props.mainData,'category')
    // this.props.setSearchPref()

}


clearFilter=(e)=>{

const newValue = {location:this.props.get_current_address()}
    this.props.updateAjaxRoute(true)
this.props.setToHome(true);
     this.props.dailyDeals(newValue)

this.props.history.push('/')

}


closeFilterBtn=(e)=>{
 this.props.setFilterToggle('left')

}



    
    render(){
const {filToggleVal} = this.props
// console.log('filterStat ==='+ filterStat)

  
      return (

        <>

 
<div className="filter-page bw-903" id={filToggleVal=='left' ? "hide":'show'} >
<List style={{'color':'black'}}>

 
  <h3 className="filter-name" >  <ArrowLeftOutlined className="closebtn" onClick={this.closeFilterBtn}/>  FILTERS 
    <Button style={{'borderRadius':'3px'}} type="link" className="filter-clear" onClick={this.clearFilter}

>  <HomeOutlined /> </Button></h3>


<List.Item>

<FilterCategory/>
</List.Item>


<List.Item>

<AcquireFilter></AcquireFilter>
</List.Item>

<List.Item>

<ConditionFilter></ConditionFilter>
</List.Item>


<List.Item>
<AgencyFilter></AgencyFilter>

</List.Item>


<List.Item>

    
    <PriceFilter></PriceFilter>
</List.Item>


<List.Item>
<DeliveryFilter></DeliveryFilter>

</List.Item>
<List.Item>
<LocationFilter></LocationFilter>

</List.Item>



<List.Item>
  <DurationFilter></DurationFilter>
</List.Item>


</List>



        </div>

        </>

      )

    }
  }

  
 
  

  
   export default withRouter(connect(mapStateToProps,{setFilterToggle,setFilter,dailyDeals,get_current_address,setToHome,updateAjaxRoute})(FilterPage))
  

