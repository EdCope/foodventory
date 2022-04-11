import './recipeList.css';

import { RecipeListItem } from './recipeListItem';

export const RecipeList = (props) => {
  
  //   if/else statement to check if recipe-list is populated properly and returns empty <ul> if not
  if (props.recipes === '') {
    return <>
    <h5>{props.submitMessage}</h5>
    <ul id='recipe-list'></ul>
    </>
  }else {
    const list = props.recipes.hits;
    return (
      <>
      <h5>{props.submitMessage}</h5>
      <div className='card'>
        <div className='card-body'>
          <h5>What recipes can I make?</h5>
          <ul className='list-group' id='recipe-list'>
            <li className='list-group-item'>
              <div className="row">
                  <div className='col-2'><strong>What do I have ?</strong></div>
                  <div className='col-8'><strong>Recipe Name</strong></div>
                  <div className='col-2'><strong>Favourite</strong></div>
              </div>
            </li>
            {list.map((recipe, i) => {
              return <RecipeListItem recipe={recipe} i={i} ingredientsListArray={props.ingredientsListArray} />
            })}
          </ul>
        </div>
      </div>
      </>
    )
  }
};
