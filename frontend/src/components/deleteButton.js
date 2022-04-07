import axios from "axios"
import { useState } from "react"

export const DeleteIngredientButton = (props) => {
    const clickHandler= (e) => { 
        e.preventDefault()
        const postData = {'ingredient': props.ingredient}
        axios.post('http://localhost:8000/pantry/remove', postData).then((res) => { console.log(res)
        props.loadList()
        props.setMessage(res.data.message)
    })
    //'to be deleted'
    }
    return <button id="ingredient-delete" type="button" className="btn btn-danger" onClick={clickHandler}>X</button>
}
