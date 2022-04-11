export const ListFavourites = (props) => {
  console.log('props.recipes is', props.recipes)
  return (
    <>
    {props.recipes.recipe}
    {/* {props.recipes.forEach(element => {
      <li>
        {console.log('each favourite is:' , element)}
        {element.favourite}
      </li> */}
    {/* })} */}
    </>
  )
}