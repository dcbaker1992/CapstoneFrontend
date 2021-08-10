import React, { Component } from 'react';
import axios from 'axios';


class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cocktails:[],
        }
    }
    changeHandler = (e) =>{
        let options = {
            method: 'GET',
            url: `https://the-cocktail-db.p.rapidapi.com/filter.php?i=orange`,
            headers: {
                'x-rapidapi-key': '492e2cab5dmshbb7bcc8e4124726p1b2b17jsn2a3be5521a8e',
                'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
    });

    }
    result=()=>{
        const data=this.state.cocktails.drinks;
        if(data){
            return data.map((cocktail)=>(
                <div key={cocktail.idDrink}>
                <img src={cocktail.strDrinkThumb} alt='cocktails' height='200' width='200'/>
                <h2>{cocktail.strDrink}</h2>
                </div>
            ));
        }
    }
    submitHandler = (e) =>{
        e.preventDefault();
    }
    
    render() {
        var results = this.state.cocktails.drinks
        return (
        <div className="container">
            <h1>Search for Cocktails by Ingredient</h1>
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="search" />
                        <br />
                        <button className="submit-btn" onClick={this.changeHandler}>SEARCH</button>
                    </div>
                </form>
            </div>
            {this.result()}
        </div>
        )
    }
}


export default SearchBar;