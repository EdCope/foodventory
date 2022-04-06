export const RecipeList = (props) => {
    console.log(props)
    if(props.recipes === "") {
        return <ul id="recipe-list">
    </ul>

    } else{
        const list = props.recipes.hits
        return <ul id="recipe-list">
       {list.map(recipe => {
          return <li> {recipe.recipe.label}</li> 
       })}
    </ul>
    }

}