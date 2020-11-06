import gistfile1 from './gistfile1'
import {Typography} from 'antd'



export function getRegion(){
    
    
return gistfile1 && gistfile1.map(state=>(

{
value: state.name,
    label: <Typography.Text>{state.name}</Typography.Text>,
    disabled: false,
    children: [...getChildren(state)]

}
	)).join('')



  //   const result=[];
  // for (var x in gistfile1){
  
  // result.push({
  //   value: gistfile1[x].state.name,
  //   label: <Typography.Text>{gistfile1[x].state.name}</Typography.Text>,
  //   disabled: false,
  //   children: [...getChildren(gistfile1[x].state)]
  
  // })
  // }
  
  // return result;
  
  }

function getChildren(state=[]){
    
    const result=[{
      value: state.name,
      label: <Typography.Text>All {state.name}</Typography.Text>,
      disabled: false,
  }];

  for (var x in state.locals){
  
  result.push({
    value: state.locals[x].name,
    label: <Typography.Text>{state.locals[x].name}</Typography.Text>,
    disabled: false,
  
  })
  }
  
  return result;
  
  }



