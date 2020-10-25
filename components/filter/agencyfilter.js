
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Radio,Empty,Avatar} from "antd";
import {BASE_IMG_URL,BASE_URL} from '../../settings'
import axios from 'axios';
import {UserOutlined} from '@ant-design/icons';







  class AgencyFilter extends Component{
        
    
    constructor(props){
    super(props);
    this.state={
   bgStyles:[
'golden','red','green','silver','blue']
    }

  
}
componentDidMount(){

axios.get(BASE_URL+"getTopCompany").then(res=>{

  const data = res.data

  this.setState({
    ...this.state,
    getTopCompany:data
  })
})

}


handleClick=(e)=>{

const filterurl = "&shop="+e

this.props.handleSearch(filterurl,e,'shop')

}
    
    render(){



const {getTopCompany} = this.state
// console.log(getTopCompany && 'getTopCompany '+Object.keys(getTopCompany[0]))


      return (
<div className="my-3 text-base" >
<p className="mb-0 font-semibold"> Shops</p>

<div  className="address">
<ul className="ml-0" style={{'paddingLeft':'0px',
'overflowY':'scroll','overflow-x':'hidden','maxHeight':'300px'}}>

{getTopCompany ? getTopCompany.map((e,index)=>(
    <li className="cursor-pointer  hover:border-b-2 hover:border-black"
    key={index} onClick={f=>this.handleClick(e.submit_user.agencyname)} style={{'listStyle':'none',
    'marginLeft':'0px'}} > 
    <Avatar  src={e.submit_user.image && BASE_IMG_URL+e.submit_user.image} 
    style={{"width":'35px','height':'35px',
  'marginTop':'10px'}} className="avatar" icon={<UserOutlined/>}></Avatar>
  <span className="mx-3">{e.submit_user.agencyname}</span></li>
)) : <Empty description="No Shops Available">
Company (0) found
</Empty>

}



</ul>
</div>

        </div>

      )

    }
  }

  
 
  

  
  
  export default AgencyFilter

  