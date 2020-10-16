
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Radio,Empty} from "antd";
import {EnvironmentOutlined} from '@ant-design/icons';
// import {city} from "../../actions/location"
import gistfile1 from '../../contrib/gistfile1'


    


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
<p className="mb-2 font-semibold"> Location <EnvironmentOutlined></EnvironmentOutlined></p>

<div  className="ml-1 h-64 overflow-y-scroll">
<Radio.Group onChange={e=>this.handleChange(e)}  >

{gistfile1 ? Object.values(gistfile1).map((e,index)=>(
  Object.values(e.state.locals).map(city=>(

  <Radio style={{'marginBottom':'8px'}} key={city.name} value={city.name}> { city.name + ', '+e.state.name}</Radio>
    ))
  
)) 


: <Empty description="No City Available">
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