
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Select,Empty} from "antd";
import {EnvironmentFilled} from '@ant-design/icons';
import gistfile1 from '../../contrib/gistfile1'


    


  class LocationFilter extends Component{
        
    
    constructor(props){
    super(props)

this.state= {
}
  
}


componentDidMount(){

  this.setState({mobile:this.isMobile()})
}

handleChange=(e)=>{
const filterurl = "&location="+e

this.props.handleSearch(filterurl,e,'location')

}

isMobile=(e)=>{
// console.log('width ',window.innerWidth <= 761)
return window.innerWidth <= 600 
}

    
    render(){

// console.log('city '+this.props.city())

      return (
<div className="my-3 w-full text-base"  >
<p className="mb-2 font-semibold"><EnvironmentFilled className="mr-2" /> Region </p>

<div  className="ml-0" style={{'height':'310px'}} >






<Select  className="w-full mr-10" onChange={value=>this.handleChange(value)} 
 placeholder="Pick region" showSearch={true} allowClear={true} open={this.state.mobile ?
 this.props.menu?false:true : this.props.menu ? true:false}>




{gistfile1 && Object.values(gistfile1).map((e,index)=>(
  Object.values(e.state.locals).map(city=>(
   <Select.Option value={city.name} key={city.name}>{ city.name + ', '+e.state.name}</Select.Option>
 
    ))
  
)) 




  }




    

    </Select> 




</div>

        </div>

      )

    }
  }

  
 
  

  
  
  export default LocationFilter