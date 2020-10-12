
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Radio,Empty} from "antd";
import {EnvironmentOutlined} from '@ant-design/icons';
import {city} from "../../actions/location"


    


  class LocationFilter extends Component{
        
    
    constructor(props){
    super(props)

  
}




handleChange=(e)=>{
const filterurl = "&location="+e.target.value

this.props.handleSearch(filterurl,e.target.value,'location')

}
    
    render(){

// console.log('city '+this.props.city())

      return (
<div className="my-3 w-full text-base" >
<p className="mb-1 font-semibold"> Location <EnvironmentOutlined></EnvironmentOutlined></p>

<div  className="ml-5">
<Radio.Group onChange={e=>this.handleChange(e)}    buttonStyle="outline">

{city ? city.map((e,index)=>(
    <Radio key={index} value={e}> {e}</Radio>
)) : <Empty description="No City Available">
City (0) found
</Empty>

}



</Radio.Group>
</div>

        </div>

      )

    }
  }

  
 
  

  
  
  export default LocationFilter