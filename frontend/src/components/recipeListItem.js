import { RecipeListItemTable } from "./recipeListItemTable";
import { AddToFavourites } from "./addToFavourites";

export const RecipeListItem = (props) => {
  
  const {i, recipe, ingredientsListArray} = props

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
    console.log(e.target)

    if (e.target.id === "add-to-favourites") {
  
    } else {

      let div = document
      .getElementById(e.target.id)
      .getElementsByTagName('div')[4]

    if (div.classList.contains('hidden')) {
      div.classList.remove('hidden');
    } else {
      div.classList.add('hidden');
    }
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
          <div className='col-3 col-sm-3' id={`${recipe.recipe.label}-${i}`}>{test.length} / {recipe.recipe.ingredients.length} </div>
          <div className='col-7 col-sm-6' id={`${recipe.recipe.label}-${i}`}>{recipe.recipe.label}</div>
          <div className='col-2 col-sm-3' id={`${recipe.recipe.label}-${i}`}><AddToFavourites recipeId={recipe.recipe.uri.split("#")[1]} getListValue={props.getListValue} /></div>
        </div>
        
  
        <div id={`${recipe.recipe.label}-${i}`} className='hidden mt-3'>
          <div className='row'>
            <div className='col-12 col-md-4 col-sm-4'>
              <img
                src={recipe.recipe.images.SMALL.url}
                alt='food'
              ></img>
            </div>
            <div className='col-12 col-md-8 col-sm-12'>
              <RecipeListItemTable recipe={recipe} />

              <div className="row pl-1">
                      <div className="col-md-3 col-sm-4 col-2 p-1 border-right border-left border-top border-bottom">Ingredients:</div>
                      <div className="col not-centered border-right border-top border-bottom">
                        {recipe.recipe.ingredients.map((ingredient, i) => (
                          <p>
                            {`${
                              ingredient.food[0].toUpperCase() +
                              ingredient.food.slice(1).toLowerCase()
                            } - ${ingredient.weight.toLocaleString(undefined, {
                              maximumFractionDigits: 0,
                            })}g`}
                          </p>
                        ))}
                      </div>
          </div>
            </div>
          </div>

        </div>
      </li>
    );
  
}
