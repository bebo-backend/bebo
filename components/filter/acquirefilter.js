
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Radio} from "antd";
import { BASE_IMG_URL,BASE_URL } from '../../settings'




    


  class AcquireFilter extends Component{
        
    
    constructor(props){
    super(props);

  
}

// change=(e)=>{

//   this.setState({...this.state,click:e})

    
// }

handleChange=(e)=>{

const filterurl = "&acquisition="+e.target.value

this.props.handleSearch(filterurl,e.target.value,'acquisition')


}
    
    render(){



      return (
<div className="my-3 text-base" >
<p className="mb-2 font-semibold"> Acquisition</p>
<span className="ml-0">
<Radio.Group onChange={e=>this.handleChange(e)}   buttonStyle="outline">

<Radio value="sale">Sale</Radio><Radio value="rent">Rental</Radio>
<Radio value="exchange">Exchange</Radio>


</Radio.Group>

</span>

        </div>

      )

    }
  }

  
 
  

  
  
  export default AcquireFilter
