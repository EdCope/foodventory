export const ListFavourites = (props) => {
  console.log("props.recipes is", props.recipes);

  const handleChange = (e) => {
    let div = document
      .getElementById(e.target.id)
      .getElementsByTagName("div")[0];

    if (div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5>My favourite recipes</h5>
          <ul className="list-group" id="recipe-list">
            {props.recipes.map((recipe, i) => {
              return (
                <li
                  key={i}
                  id={`${recipe.recipe.label}-${i}`}
                  className="list-group-item"
                  onClick={handleChange}
                >
                  {recipe.recipe.label}
                  <div
                    id={`${recipe.recipe.label}-${i}`}
                    className="hidden mt-3"
                  >
                    <div className="row">
                      <div className="col-sm-2 col-md-2 col-2">
                        <img
                          src={recipe.recipe.images.THUMBNAIL.url}
                          alt="food"
                        ></img>
                      </div>
                      <div className="col-12 col-md-10 col-sm-12">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Time (mins)</th>
                              <th scope="col">Calories</th>
                              <th scope="col">Portions</th>
                              <th scope="col">Link</th>
                              {/* <th scope='col'>Favourite</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{recipe.recipe.totalTime}</td>
                              <td>
                                {recipe.recipe.calories.toLocaleString(
                                  undefined,
                                  { maximumFractionDigits: 2 }
                                )}
                                kcal
                              </td>
                              <td>{recipe.recipe.yield}</td>
                              <td>
                                <a href={recipe.recipe.url} target="_blank">Link</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 col-2 pr-1">Ingredients:</div>
                      <div className="col">
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
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
