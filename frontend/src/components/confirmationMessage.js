export const ConfirmationMessage = (props) => {
  if(props.message.includes("added")){
    var alertStatus = 'success'
  } else if(props.message.includes("removed")){
    var alertStatus = 'danger'
  } else if(props.message.includes("already")){
    var alertStatus = 'warning'
  }
    else{
      var alertStatus = ''
    }
  return <div className={`alert alert-${alertStatus} alert-dismissible fade show`} role="alert" >{props.message} <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></div>
}