export const DynamicMessage = (props) => {

  const hideMessage = (e) => {
    let div = document.getElementById("message")
    div.classList.add('hidden');
    }

    return <div className={`alert alert-${props.alertStatus} center fade show ${props.classChange} `} id="message" role="alert" >{props.message} <button type="button" onClick={hideMessage} className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button></div>

  }