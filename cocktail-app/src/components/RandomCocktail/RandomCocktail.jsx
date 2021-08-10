import React, {Component} from 'react';
import axios from 'axios';

let options = {
    method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
        headers: {
            'x-rapidapi-key': '492e2cab5dmshbb7bcc8e4124726p1b2b17jsn2a3be5521a8e',
            'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
            }
    };

class RandomCocktail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: "",
            name : "",
            category: "",
            instructions: '',
            ingredients: "",
            measures: ""
        }
    }
    

    
    DisplayRandomCocktail=()=> { 
        let _this = this;
        axios.request(options).then(function (response) {
        
            _this.setState({
                image: response.data.drinks[0].strDrinkThumb, 
                name: response.data.drinks[0].strDrink,
                category: response.data.drinks[0].strCategory,
                instructions: response.data.drinks[0].strInstructions,
                ingredient1: response.data.drinks[0].strIngredient1,
                ingredient2: response.data.drinks[0].strIngredient2,
                ingredient3: response.data.drinks[0].strIngredient3,
                ingredient4: response.data.drinks[0].strIngredient4, 
                ingredient5: response.data.drinks[0].strIngredient5,
                ingredient6: response.data.drinks[0].strIngredient6,
                measure1: response.data.drinks[0].strMeasure1,
                measure2: response.data.drinks[0].strMeasure2,
                measure3: response.data.drinks[0].strMeasure3,
                measure4: response.data.drinks[0].strMeasure4,
                measure5: response.data.drinks[0].strMeasure5,
                measure6: response.data.drinks[0].strMeasure6,
                
            })
            console.log(_this.state.name)
        // console.log(response.data);
        }).catch(function (error) { 
            console.error(error);
    
        });
    }
    
    render() {
        return <div className="container">
            <h1>Click for a Random Cocktail!</h1>
            <button class="btn btn-danger" onClick={this.DisplayRandomCocktail.bind(this)}>Random Cocktail</button>
            <h3>{this.state.name}</h3>
            <h6>{this.state.category}</h6>
            <h6>{this.state.instructions}</h6>
            <h6>{this.state.measure1}       {this.state.ingredient1}</h6>
            <h6>{this.state.measure2} {this.state.ingredient2}</h6>
            <h6>{this.state.measure3} {this.state.ingredient3}</h6>
            <h6>{this.state.measure4} {this.state.ingredient4}</h6>
            <h6>{this.state.measure5} {this.state.ingredient5}</h6>
            <h6>{this.state.measure6} {this.state.ingredient6}</h6>
            <img src={this.state.image} alt="img" width="200" height="200"/>

            </div>
        
    }
    

        
}

export default RandomCocktail;