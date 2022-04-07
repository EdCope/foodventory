import axios from "axios"
import { useState } from "react"

export const DeleteIngredientButton = (props) => {
    const [message, setMessage] = useState('')
    const clickHandler= (e) => { 
        e.preventDefault()
        const postData = {'ingredient': props.ingredient}
        axios.post('http://localhost:8000/pantry/remove', postData).then((res) => { console.log(res)
        props.loadList()
        setMessage(res.data.message)
    })
    }
    return <button id="ingredient-delete" type="button" className="btn btn-danger" onClick={clickHandler}>X</button>
}
