import { useState } from "react";
import { RecipeListItemTable } from "./recipeListItemTable";

export const RecipeListItem = (props) => {
  
  const {i, recipe, ingredientsListArray} = props

  //const[matches, setMatches] = useState([])



  const getMatches = () => {
    let recipeArray = []
 
    recipe.recipe.ingredients
              .map(
                (ingredient, i) =>
                recipeArray.push(ingredient.food.toLowerCase()))
    let removeDuplicate = [...new Set(recipeArray)]
    const matches = removeDuplicate.filter(element => ingredientsListArray.includes(element))
    
    return matches
  }
  const test = getMatches()


  // handleChange is showing and hiding recipe details
  const handleChange = (e) => {
    
    console.log(e.target.id)
    let div = document
      .getElementById(e.target.id)
      .getElementsByTagName('div')[4]

    console.log(div);

    if (div.classList.contains('hidden')) {
      div.classList.remove('hidden');
    } else {
      div.classList.add('hidden');
    }
  };

    return (
      <li
        key={i}
        id={`${recipe.recipe.label}-${i}`}
        className='list-group-item'
        onClick={handleChange}
      >
        <div className="row" >
          <div className='col-2' id={`${recipe.recipe.label}-${i}`}>{test.length} / {recipe.recipe.ingredients.length} </div>
          <div className='col-8' id={`${recipe.recipe.label}-${i}`}>{recipe.recipe.label}</div>
          <div className='col-2' id={`${recipe.recipe.label}-${i}`}><i className="fa-solid fa-heart"></i></div>
        </div>
        
  
        <div id={`${recipe.recipe.label}-${i}`} className='hidden mt-3'>
          <div className='row'>
            <div className='col-2'>
              <img
                src={recipe.recipe.images.THUMBNAIL.url}
                alt='food'
              ></img>
            </div>
            <div className='col-10'>
              <RecipeListItemTable recipe={recipe} />
            </div>
          </div>
          <p>
            Ingredients:{' '}
            {recipe.recipe.ingredients
              .map(
                (ingredient, i) =>
                  //recipeArray.push(ingredient.food[0].toLowerCase())
                  `${
                    ingredient.food[0].toUpperCase() +
                    ingredient.food.slice(1).toLowerCase()
                  }-${ingredient.weight.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}g`
              )
              .join(', ')}
          </p>
        </div>
      </li>
    );
  
}
