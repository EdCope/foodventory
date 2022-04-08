import axios from "axios"
import { useState } from "react"

export const AddToFavourites = (props) => {

  const favouritesArray = []

  const clickHandler = (e) => {
    e.preventDefault()
    favouritesArray.push(props.recipeId)
    console.log('this is what recipeId is: ',props.recipeId)
  }

  return (
    <button id="add-to-favourites" type="button" className="btn btn-warning" onClick={clickHandler}>
      Add to Favourites
    </button>
  )
}