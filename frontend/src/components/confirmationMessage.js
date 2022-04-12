import { DynamicMessage } from "./dynamicMessage"

export const ConfirmationMessage = (props) => {
  let alertStatus
  if(props.message.includes("added")){
    alertStatus = 'success'
    console.log(props.message)
    return <DynamicMessage message={props.message} alertStatus={alertStatus} classChange={""}/>
    
  } else if(props.message.includes("removed")){
    alertStatus = 'danger'
    return <DynamicMessage message={props.message} alertStatus={alertStatus} classChange={""}/>
  } else if(props.message.includes("choose")){
    alertStatus = 'danger'
    return <DynamicMessage message={props.message} alertStatus={alertStatus} classChange={""}/>
  } else if(props.message.includes("already")){
    alertStatus = 'warning'
    return <DynamicMessage message={props.message} alertStatus={alertStatus} classChange={""}/>
  } else if(props.message.includes("There are no ingredients")){
    alertStatus = 'warning'
    return <DynamicMessage message={props.message} alertStatus={alertStatus} classChange={""}/>
  }
  else{
      alertStatus = ''
      return <DynamicMessage message={props.message} alertStatus={alertStatus} classChange={"hidden"} />
    }  
  
}