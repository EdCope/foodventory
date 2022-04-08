export const ListFavourites = (props) => {
  console.log('props.recipes is', props.recipes)
  return (
    <>
    {props.recipes.forEach(element => {
      <li>
        {element.favourite}
      </li>
    })}
    </>
  )
}