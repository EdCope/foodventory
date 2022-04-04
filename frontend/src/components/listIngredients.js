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
            <ul>
            {
                this.state.ingredients.map( ingredient => 
            
                <li key={ingredient.id}>{ingredient.name}</li>
            )}
            </ul>

        )
    }


}
