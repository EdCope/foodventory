import useCollapse from "react-collapsed";

export const RecipeList = (props) => {
  //const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const handleChange = (e) => {
    // do something with event.target.checked
    console.log(e.target.innerHTML);
    console.log();
    let div = document
      .getElementById(e.target.id)
      .getElementsByTagName("div")[0];

    if (div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  };

  console.log(props);
  if (props.recipes === "") {
    return <ul id="recipe-list"></ul>;
  } else {
    const list = props.recipes.hits;
    return (
      <div className="card">
        <div className="card-body">
          <h5>What recipes can I make?</h5>
          <ul className="list-group" id="recipe-list">
            {list.map((recipe, i) => {
              return (
                <li
                  id={`${recipe.recipe.label}-${i}`}
                  className="list-group-item"
                  onClick={handleChange}
                >
                  {recipe.recipe.label}
                  <div id={recipe.recipe.label} className="hidden">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src={recipe.recipe.images.THUMBNAIL.url}
                          alt="food"
                        ></img>
                      </div>
                      <div className="col-10">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Time</th>
                              <th scope="col">Calories</th>
                              <th scope="col">Yield</th>
                              <th scope="col">Link</th>
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
                              </td>
                              <td>{recipe.recipe.yield}</td>
                              <td>
                                <a href={recipe.recipe.url}>Link</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        
                      </div>
                      
                    </div>
                    <p>Ingredients: {
                    recipe.recipe.ingredients.map((ingredient, i) => 
                        ingredient.food[0].toUpperCase() + ingredient.food.slice(1).toLowerCase()
                    ).join(", ")}
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
