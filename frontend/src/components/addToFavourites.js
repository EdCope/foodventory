import axios from 'axios';
import { useState } from "react"

export const AddToFavourites = (props) => {

  const clickHandler = (e) => {
    e.preventDefault()
    const postData = {favourite: props.recipeId}
    console.log('this is the post Data', postData)
    axios.post(`http://localhost:8000/user/add`, postData ).then((res) => {
        console.log('this is the post result', res)
        props.setMessage(res.data.message)
      })
  }

  return (
    <button id="add-to-favourites" type="button" className="btn btn-warning" onClick={clickHandler}>
      Add to Favourites
    </button>
  )
}