import axios from "axios"

export const DeleteIngredientButton = (props) => {
    const clickHandler= (e) => { 
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem('userdata'))
        const postData = {'ingredient': props.ingredient, 'user': user }
        axios.post('http://localhost:8000/pantry/remove', postData).then((res) => { console.log(res)
        props.loadList()
        props.setMessage(res.data.message)
        document.getElementById("message").classList.remove("hidden")
    })
    }
    return <button id="ingredient-delete" type="button" className="btn btn-small btn-danger" onClick={clickHandler}><i className="fa-solid fa-x"></i></button>
}
