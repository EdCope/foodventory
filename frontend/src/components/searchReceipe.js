import React, { useState } from 'react';
import axios from 'axios';
import { RecipeList } from './recipeList'


export const SearchRecipe = () => {

    const [recipes, setRecipes] = useState("") 
   const getListValue = (e) => {
    e.preventDefault()
    const ingredientsList = document.getElementById('ingredientsList').querySelectorAll('li')

    const array = []
    ingredientsList.forEach((ingredient) => array.push(ingredient.innerText))

    const searchUrl=`https://api.edamam.com/api/recipes/v2?type=public&q=${array.join('%20')}&app_id=447fe925&app_key=144b9978b2320c00d31fe6fd33e6efbc&ingr=5` 

    axios.get(searchUrl).then((res) => {
        const recipes = res.data
        setRecipes(recipes)
        
    })


    }

    return(
    <div> 
    <button type="button" className="btn btn-success mb-3" id="recipe-search" onClick={getListValue}>Search For Recipe</button>

        <RecipeList recipes={recipes} />
        </div>
    )

}