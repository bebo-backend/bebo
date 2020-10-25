
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Radio} from "antd";





    


  class DurationFilter extends Component{
        
    
    constructor(props){
    super(props)

  
}



handleChange=(e)=>{

const filterurl = "&duration="+e.target.value

this.props.handleSearch(filterurl,e.target.value,'duration')

}
    
    
    render(){



      return (
<div className="my-3 w-full text-base" >
<p className="mb-2 font-semibold"> Duration </p>
<span className="ml-0">
<Radio.Group onChange={e=>this.handleChange(e)}  buttonStyle="solid">

<Radio value="weekly"> Weekly</Radio><br/>
<Radio value="monthly"> Monthly</Radio><br/>
<Radio value="yearly"> Yearly</Radio>

</Radio.Group>
</span>


        </div>

      )

    }
  }

  
 
  

  
  
  export default DurationFilter