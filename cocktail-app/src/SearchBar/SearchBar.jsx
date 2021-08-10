import React, { Component } from 'react';
import axios from 'axios';


class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cocktails:[],
        }
    }
    handleThing = (thing) =>{
        this.props.setSearch1(thing)
    }
    changeHandler = (e) =>{
        let options = {
            method: 'GET',
            url: `https://the-cocktail-db.p.rapidapi.com/filter.php?i=vodka`,
            headers: {
                'x-rapidapi-key': '492e2cab5dmshbb7bcc8e4124726p1b2b17jsn2a3be5521a8e',
                'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
            }
        };
        axios.request(options).then( (response) => {
            console.log(response.data);
            this.handleThing(response.data.drinks)

        }).catch(function (error) {
            console.error(error);
    });

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
                        <button className="btn btn-secondary" onClick={this.changeHandler}>SEARCH</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}


export default SearchBar;