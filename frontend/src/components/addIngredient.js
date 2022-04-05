import axios from 'axios';
import React, {useState} from 'react';

export const AddIngredient = () => {

  const [ingredient, setIngredient] = useState('')

  const submitHandler = (e) => {

    e.preventDefault()

    const postData = {ingredient}
    console.log(postData)

    axios.post(`http://localhost:8000/pantry/add`, postData ).then((res) => {
      console.log(res)
    })

  }
  
  


    return (
      <div className="card">
        <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-10">
            <input className="form-control" type="text" name="ingredint" value={ingredient} onChange={(e)=>{setIngredient(e.target.value)}}></input>
            </div>
            <div className="col-2">
              <button className='btn btn-primary' type="submit">Add Ingredient</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    )
  }
