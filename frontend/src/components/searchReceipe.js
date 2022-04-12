import React, { useState, useEffect } from "react";
import axios from "axios";
import { RecipeList } from "./recipeList";

export const SearchRecipe = (props) => {
  const [recipes, setRecipes] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [ingredientsListArray, setIngredientsListArray] = useState([]);
  const [vegetarian, setVegetarian] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [simple, setSimple] = useState(false);
  const [nutFree, setNutFree] = useState(false);

  const clickForMessage = (e) => {
    const ingredientsList = document.querySelectorAll(
      "input[name=checkbox]:checked"
    );
    if (ingredientsList.length === 0) {
      document.getElementById("message").classList.remove("hidden")
      props.setMessage(`Please choose an ingredient to find a recipe.`);
  }
}
  
  const getListValue = (e) => {
    //   getListValue function gets all of the ingredients in the ingredients list by finding the checked boxes.
    const ingredientsList = document.querySelectorAll(
      "input[name=checkbox]:checked"
    );

    const array = [];
    const searchArray = [];

    ingredientsList.forEach((ingredient) =>
      array.push(`${ingredient.value.toLowerCase()}`)
    );
    ingredientsList.forEach((ingredient) =>
      searchArray.push(`%22${ingredient.value.toLowerCase()}%22`)
    );

    setIngredientsListArray(array);

    if (ingredientsList.length === 0) {
      setRecipes("");
    } else {
      let searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchArray.join(
        "%20"
      )}&app_id=447fe925&app_key=144b9978b2320c00d31fe6fd33e6efbc&excluded=vinegar`;
      if(vegetarian){ searchUrl += "&health=vegetarian" };
      if(gluten){ searchUrl += "&health=gluten-free" };
      if(nutFree){ searchUrl += "&health=tree-nut-free&health=peanut-free" };
      if(simple){ searchUrl += "&ingr=1-5"};
      
      // Url for searching the API - https://developer.edamam.com/edamam-docs-recipe-api

      // axios call to get the url and setting the recipe state with the returned data
      axios.get(searchUrl).then((res) => {
        const recipes = res.data;
        setRecipes(recipes)
        if (recipes.hits.length === 0) {
          props.setMessage(`No recipes found.`);
        } else {
          setSubmitMessage(`Found ${recipes.hits.length} recipes.`);
        }
      });
    }
  };

  useEffect(() => { 
    getListValue()

  }, [])

  const doubleClick = () => {
    clickForMessage()
    getListValue()
  }

  return (
    <div className="card mt-3">
      <div className="card-header">
        <div className="row pt-3 pb-3">
          <div className="col-sm-6 col-12 ">
          <button
            type="button"
            className="btn btn-success mt-2"
            id="recipe-search"
            onClick={doubleClick}
          >
            Search For Recipes
          </button>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="vegetarianSwitch" onChange={(e) => setVegetarian(e.target.checked)}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Vegetarian</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="glutenFreeSwitch" onChange={(e) => setGluten (e.target.checked)}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Gluten Free</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="nutFreeSwitch" onChange={(e) => setNutFree (e.target.checked)}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Nut Free</label>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="simpleSwitch" onChange={(e) => setSimple (e.target.checked)}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Simple Recipes</label>
          </div>
          </div>
        </div>
      </div>
      <RecipeList
        recipes={recipes}
        submitMessage={submitMessage}
        ingredientsListArray={ingredientsListArray}
        getListValue={getListValue}
      />
    </div>
  );
};
