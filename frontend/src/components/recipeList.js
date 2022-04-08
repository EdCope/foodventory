import { AddToFavourites } from "./addToFavourites";

export const RecipeList = (props) => {
  // handleChange is showing and hiding recipe details
  const handleChange = (e) => {
    let div = document
      .getElementById(e.target.id)
      .getElementsByTagName('div')[0];

    if (div.classList.contains('hidden')) {
      div.classList.remove('hidden');
    } else {
      div.classList.add('hidden');
    }
  };
  //   if/else statement to check if recipe-list is populated properly and returns empty <ul> if not
  if (props.recipes === '') {
    return <ul id='recipe-list'></ul>;
  } else {
    const list = props.recipes.hits;
    return (
      <div className='card'>
        <div className='card-body'>
          <h5>What recipes can I make?</h5>
          <ul className='list-group' id='recipe-list'>
            {list.map((recipe, i) => {
              return (
                <li
                  id={`${recipe.recipe.label}-${i}`}
                  className='list-group-item'
                  onClick={handleChange}
                >
                  {recipe.recipe.label}
                  <div id={`${recipe.recipe.label}-${i}`} className='hidden mt-3'>
                    <div className='row'>
                      <div className='col-2'>
                        <img
                          src={recipe.recipe.images.THUMBNAIL.url}
                          alt='food'
                        ></img>
                      </div>
                      <div className='col-10'>
                        <table className='table'>
                          <thead>
                            <tr>
                              <th scope='col'>Time</th>
                              <th scope='col'>Calories</th>
                              <th scope='col'>Yield</th>
                              <th scope='col'>Link</th>
                              <th scope='col'>Favourite</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{recipe.recipe.totalTime}</td>
                              <td>
                                {recipe.recipe.calories.toLocaleString(
                                  undefined,
                                  { maximumFractionDigits: 2 }
                                )}{' '}
                                kcal
                              </td>
                              <td>{recipe.recipe.yield}</td>
                              <td>
                                <a href={recipe.recipe.url}>Link</a>
                              </td>
                              <td>
                                <AddToFavourites />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      Ingredients:{' '}
                      {recipe.recipe.ingredients
                        .map(
                          (ingredient, i) =>
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
            })}
          </ul>
        </div>
      </div>
    );
  }
};
