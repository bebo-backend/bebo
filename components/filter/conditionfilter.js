
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Radio} from "antd";







    


  class ConditionFilter extends Component{
        
    
    constructor(props){
    super(props);


}



handleChange=(e)=>{

const filterurl = "&condition="+e.target.value

this.props.handleSearch(filterurl,e.target.value,'condition')


}
    
    render(){



      return (
<div className="my-3 text-base" >
<p className="mb-2 font-semibold" > Condition</p>
<span className="ml-0">
<Radio.Group onChange={e=>this.handleChange(e)} buttonStyle="solid">

<Radio value="new">New</Radio><Radio value="used">Used</Radio>


</Radio.Group>
</span>
        </div>

      )

    }
  }

  
 
  

  
  
  export default ConditionFilter