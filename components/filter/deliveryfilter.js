
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Radio} from "antd";




    


  class DeliveryFilter extends Component{
        
    
    constructor(props){
    super(props)
  
}


handleChange=(e)=>{

const filterurl = "&delivery="+e.target.value

this.props.handleSearch(filterurl,e.target.value,'delivery')

}
    
    render(){



      return (
<div className="my-3 w-full text-base" >
<p className="mb-2 font-semibold"> With Delivery</p>
<span className="ml-0">
<Radio.Group  onChange={e=>this.handleChange(e)} >

<Radio value="yes">Yes</Radio><Radio value="no">No</Radio>


</Radio.Group>
</span>
        </div>

      )

    }
  }

  
 
  

  
  
  export default DeliveryFilter