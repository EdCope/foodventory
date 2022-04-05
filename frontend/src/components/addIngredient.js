import React from 'react';

export class AddIngredient extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className="card">
        <div className="card-body">
        <form>
          <div className="row">
            <div className="col-10">
            <input className="form-control" type="text"></input>
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
}