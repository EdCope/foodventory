import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { ListFavourites } from '../components/listFavourites';
import { RecipeList } from '../components/recipeList';

export const Favourites = () => {

  const [favouriteRecipes, setFavouriteRecipes] = useState([])
  const [recipes, setRecipes] = useState([]);
  const getListValue = (e) => {
    e.preventDefault()

    axios.get(`http://localhost:8000/user/favourites`).then((res) => {
      console.log('the favourites returned are:', res.data)
        const data = res.data;
        setRecipes( data )
        return data
      }).then(data => {
        data.map(recipe => {
          console.log('each recipe is', recipe)
          axios.get(`https://api.edamam.com/api/recipes/v2/${recipe}?type=public&app_id=447fe925&app_key=144b9978b2320c00d31fe6fd33e6efbc`)
          .then(res => {
            setFavouriteRecipes(res.data)
            console.log(favouriteRecipes)
          })
        })     
  })

      }
  console.log('favouriteRecipes array is', favouriteRecipes)
  // return favouriteRecipes

  return (
    <>
    
    <button
        type='button'
        className='btn btn-success mb-3'
        id='recipe-search'
        onClick={getListValue}
      >
      You favourite recipes...
      </button>
    <ListFavourites recipes={recipes}/>
    {/* <RecipeList /> */}
    </>
  )

}