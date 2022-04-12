import axios from 'axios';
import React, {useState} from 'react';

export const AddIngredient = (props) => {

  const [ingredient, setIngredient] = useState('')

  const searchUrl = `https://api.edamam.com/search?q=${ingredient}&app_id=447fe925&app_key=144b9978b2320c00d31fe6fd33e6efbc&from=0&to=1`;
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('userdata'))
    const postData = { ingredient: ingredient, user: user }
    const validIngredient = await axios.get(searchUrl);
    if(validIngredient.data.hits.length < 1){
      setIngredient('');
      props.setMessage('There are no ingredients with this name in the database')
    } else {
      console.log('this is the ingredient post Data', postData)
      axios.post(`http://localhost:8000/pantry/add`, postData ).then((res) => {
      setIngredient('')
      props.setMessage(res.data.message);
      props.loadList();
    })
  }
  document.getElementById("message").classList.remove("hidden")
    
  }
  return (
    <div id="input-form">
      <div className="card-body">
      <form onSubmit={submitHandler} id="ingredient-form">
        <div className="form-row">
          <div className="col-md-10 col-sm-10 col-10">
          <input className="form-control" type="text" name="ingredient" placeholder="Enter ingredients..." id="ingredient-input" value={ingredient} onChange={(e) => {setIngredient(e.target.value)}}></input>
          </div>
          <div className="col-md-2 col-sm-2 col-1">
            <button className='btn btn-green btn-center' id="ingredient-button" type="submit"><i className="fa-solid fa-carrot"> </i> Add</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
  }
