import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { ListFavourites } from '../components/listFavourites';
import { useProtected } from '../hooks/verifyLogin';

export const Favourites = () => {

  const [favouriteRecipes, setFavouriteRecipes] = useState([])
  
  useProtected();

    const user = JSON.parse(localStorage.getItem('userdata'))
    useEffect(() => {
      const loadFavourites = () => {
  
        axios.get(`/user/favourites/${user.uid}`).then((res) => {
          console.log('the favourites returned are:', res.data)
          const data = res.data;
          data.map(recipe => {
            axios.get(`https://api.edamam.com/api/recipes/v2/${recipe}?type=public&app_id=447fe925&app_key=144b9978b2320c00d31fe6fd33e6efbc`)
            .then(res => {
              setFavouriteRecipes(state => ([...state, res.data]));
            })
          })     
        })
      } 
      loadFavourites()
    }, [])

  return (
    <div className='container'>
      <ListFavourites recipes={favouriteRecipes} />
    </div>
  )
}