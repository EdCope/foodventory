import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { ListFavourites } from '../components/listFavourites';
import { useProtected } from '../hooks/verifyLogin';

export const Favourites = () => {

  const [favouriteRecipes, setFavouriteRecipes] = useState([])
  const [recipes, setRecipes] = useState([]);

  useProtected();
  const getListValue = (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('userdata'))

    axios.get(`http://localhost:8000/user/favourites/${user.uid}`).then((res) => {
      console.log('the favourites returned are:', res.data)
        const data = res.data;
        setRecipes( data )
        return data
      }).then(data => {
        const favouriteArray = []
        data.map(recipe => {
          console.log('each recipe is', recipe)
          axios.get(`https://api.edamam.com/api/recipes/v2/${recipe.favourite}?type=public&app_id=447fe925&app_key=144b9978b2320c00d31fe6fd33e6efbc`)
          .then(res => {
            favouriteArray.push(res.data)
            console.log('favouriteArray is: ',favouriteArray)
          })
          .then(data => {
            setFavouriteRecipes(favouriteArray)
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
    <ListFavourites recipes={favouriteRecipes}/>
    {/* <RecipeList /> */}
    </>
  )

}