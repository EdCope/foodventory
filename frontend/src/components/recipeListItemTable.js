import { AddToFavourites } from "./addToFavourites";

export const RecipeListItemTable = (props) => {
  const { recipe } = props

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Calories</th>
          <th scope="col">Yield</th>
          <th scope="col">Link</th>
          {/* <th scope='col'>Favourite</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{recipe.recipe.totalTime}</td>
          <td>
            {recipe.recipe.calories.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}{" "}
            kcal
          </td>
          <td>{recipe.recipe.yield}</td>
          <td>
            <a href={recipe.recipe.url}>Link</a>
          </td>
          <td>
            <AddToFavourites recipeId={recipe.recipe.uri.split("#")[1]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

