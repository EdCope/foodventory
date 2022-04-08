import axios from 'axios';
import React, {useState} from 'react';

export const AddIngredient = (props) => {

  const [ingredient, setIngredient] = useState('')
  
  const submitHandler = (e) => {
    e.preventDefault()
    const postData = {ingredient}
    console.log(postData)
    axios.post(`http://localhost:8000/pantry/add`, postData ).then((res) => {
        console.log(res)
        setIngredient('')
        props.setMessage(res.data.message)
        props.loadList();
      })
    }
    return (
      <div className="card" id="input-form">
        <div className="card-body">
        <form onSubmit={submitHandler} id="ingredient-form">
          <div className="form-row">
            <div className="col-md-10 col-sm-10 form-group">
            <input className="form-control" type="text" name="ingredient" id="ingredient-input" value={ingredient} onChange={(e) => {setIngredient(e.target.value)}}></input>
            </div>
            <div className="col-md-2 col-sm-2 form-group">
              <button className='btn btn-primary' id="ingredient-button" type="submit">Add Ingredient</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    )
    }
