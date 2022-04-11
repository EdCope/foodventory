import './recipeList.css';

import { RecipeListItem } from './recipeListItem';

export const RecipeList = (props) => {
  
  //   if/else statement to check if recipe-list is populated properly and returns empty <ul> if not
  if (props.recipes === '') {
    return (

      <>
        <div className='card-body'>
          <h5>What recipes can I make?</h5>
          <p>Search to find recipes.</p>
        </div>
      </>
    );
  }else {
    const list = props.recipes.hits;
    return (
      <>
        <div className='card-body'>
          <h5>What recipes can I make?</h5>
          <p>{props.submitMessage}</p>
          <ul className='list-group' id='recipe-list'>
            <li key="listtop" className='list-group-item'>
              <div className="row">
                  <div className='col-3'><strong>What do I have ?</strong></div>
                  <div className='col-7'><strong>Recipe Name</strong></div>
                  <div className='col-2'><strong>Favourite</strong></div>
              </div>
            </li>
            {list.map((recipe, i) => {
              return <RecipeListItem recipe={recipe} i={i} ingredientsListArray={props.ingredientsListArray} />
            })}
          </ul>
        </div>
      </>
    )
  }
};
