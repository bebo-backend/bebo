
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button,Slider,InputNumber,Radio,Typography} from "antd";






    


  class PriceFilter extends Component{
        
    
    constructor(props){
    super(props)
    
    this.state={
      min:0,
      max:10000
    }

  
}


setValue=(e,type='slider')=>{

switch(type){

  case 'slider':{

this.setState({...this.state,min:0,max:e})
break;
  }


  case 'min':{

    this.setState({...this.state,min:e})
    break;
      }

    case 'max':{

      this.setState({...this.state,max:e})
      break;
        }
}

}

handleApply=(e)=>{



const value = this.state.min + "-"+this.state.max

const filterurl = "&configprice="+value

this.props.handleSearch(filterurl,value,'configprice')

// console.log('min--'+this.state.min===null?7:0)

}

handleChange=(e)=>{
const filterurl = "&price="+e.target.value

this.props.handleSearch(filterurl,e.target.value,'price')

}
    



    
    render(){



      return (
<div className="mb-3 mt-4 text-base" >

<p  className="mb-3 font-semibold">Price (₦) </p> 
<table className="ml-0">

<tbody>

<tr>
<Radio.Group  onChange={e=>this.handleChange(e)}   defaultValue="any price" buttonStyle="solid">

<Radio  value="any price"><Typography.Text ellipsis >Any price </Typography.Text>  </Radio><br/>
<Radio value="under 1000"><Typography.Text ellipsis >Under ₦ 1000</Typography.Text> </Radio><br/>
<Radio value="1000 to 10000"><Typography.Text ellipsis >₦ 1000 to ₦ 10000</Typography.Text> </Radio><br/>
<Radio value="10000 to 50000"><Typography.Text ellipsis >₦ 10000 to ₦ 50000</Typography.Text> </Radio><br/>
<Radio value="over 50000"><Typography.Text ellipsis >Over ₦ 50000</Typography.Text> </Radio><br/>

</Radio.Group>


</tr>


<tr  style={{'marginTop':'15px'}}>
<td >

<InputNumber placeholder="Low" decimalSeparator=',' onChange={e=>this.setValue(e,'min')}  >
</InputNumber>
<InputNumber placeholder="High" onChange={e=>this.setValue(e,'max')}  ></InputNumber>
</td>

</tr> </tbody>


</table>

  <div onClick={this.handleApply} className='btn w-full center h-10 flex
   justify-center items-center bg-blue-900 shadow-xl
rounded-md mt-3 text-white  hover:bg-blue-500 my-4 cursor-pointer'>

<span className="text-lg text-white font-extrabold "
> Apply</span>


</div>

        </div>

      )

    }
  }

  
 
  

  
  
  export default PriceFilter