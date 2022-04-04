import axios from "axios";
import React from "react";

export class ListIngredients extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ingredients:[]};
      }


    componentDidMount() {
        axios.get(`http://localhost:8000/`).then(res => {
            const ingredients = res.data;
            this.setState({ingredients})
        })
    }

    render() {
        return (
            <div id="ingredients-list">
            
            <h5>Whats in my Pantry?</h5> 
            <ul className="list-group">
            {
                this.state.ingredients.map( ingredient => 
            
                <li className="list-group-item" key={ingredient.id}>{ingredient.name}</li>
            )}
            </ul>
            </div>
        )
    }


}
