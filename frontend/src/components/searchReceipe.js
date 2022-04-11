import React, { useState } from "react";
import axios from "axios";
import { RecipeList } from "./recipeList";

export const SearchRecipe = () => {
  const [recipes, setRecipes] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [ingredientsListArray, setIngredientsListArray] = useState([])
  const getListValue = (e) => {
    //   getListValue function gets all of the ingredients in the ingredients list by finding the checked boxes.
    e.preventDefault();

    const ingredientsList = document.querySelectorAll(
      "input[name=checkbox]:checked"
    );

    const array = [];
    const searchArray = [];

    ingredientsList.forEach((ingredient) => array.push(`${ingredient.value.toLowerCase()}`));
    ingredientsList.forEach((ingredient) => searchArray.push(`%22${ingredient.value.toLowerCase()}%22`));

    setIngredientsListArray(array)

    if (ingredientsList.length === 0) {
      setSubmitMessage(`Please choose and ingredient to find a recipe.`);
    } else {
      // Url for searching the API - https://developer.edamam.com/edamam-docs-recipe-api
      const searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchArray.join(
        "%20"
      )}&app_id=447fe925&app_key=144b9978b2320c00d31fe6fd33e6efbc&excluded=vinegar`;

      // axios call to get the url and setting the recipe state with the returned data
      axios.get(searchUrl).then((res) => {
        const recipes = res.data;
        setRecipes(recipes);
        if (recipes.hits.length === 0) {
          setSubmitMessage(`No recipes found.`);
        } else {
          setSubmitMessage(`Found ${recipes.hits.length} recipes.`);
        }
        
      });
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success mb-3"
        id="recipe-search"
        onClick={getListValue}
      >
        Search For Recipe
      </button>

      <RecipeList recipes={recipes} submitMessage={submitMessage} ingredientsListArray={ingredientsListArray} />
    </div>
  )
};
