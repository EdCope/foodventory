import axios from "axios";
import React from "react";

export class ListIngredients extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ingredients:[]};
      }


    componentDidMount() {
        axios.get(`http://localhost:8000/pantry/all`).then(res => {
            const ingredients = res.data;
            this.setState({ingredients})
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
            <div id="ingredients-list">
            
            <h5>Whats in my Pantry?</h5> 
            <ul className="list-group">
            {
                this.state.ingredients.map( (ingredient, i) => 
            
                <li className="list-group-item" key={i}>{ingredient}</li>
            )}
            </ul>
            </div>
            </div>
            </div>
        )
    }


}
