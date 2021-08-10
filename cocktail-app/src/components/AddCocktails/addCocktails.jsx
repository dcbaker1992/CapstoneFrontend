import React, { useState } from 'react';
import axios from 'axios'
import useForm from '../UseForm/UseForm';

const AddCocktails = (props) => {
    const { values, handleChange, handleSubmit } = useForm(addCocktails);
    const [cocktails, setCocktails] = useState(props.cocktails)


    async function addCocktails() {
        const addCocktails = {...values, collection: props.selectedCollection};
        try{
            let response = await axios.post(`http://127.0.0.1:8000/cocktails/`, addCocktails)
            setCocktails(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="container">
            <h1>Add A Favorite Cocktail: </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection Id: 
                    <input type="text" name="collection" onChange={handleChange} value={values.collection} required={true}/>
                </label>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} value={values.name} required={true}/>
                </label>
                <label>
                    Ingredients:
                    <input type="text" name="ingredients" onChange={handleChange} value={values.ingredients} required={true}/>
                </label>
                <label>
                    Preparation: 
                    <input type="text" name="preparation" onChange={handleChange} value={values.preparation} required={true}/>
                </label>
                <label>
                    Garnish: 
                    <input type="text" name="garnish" onChange={handleChange} value={values.garnish} required={true}/>
                </label>
                
                <button type="submit" class="btn btn-secondary">Add Cocktail</button>
            </form>
            <br/>
        </div>
    )
}

export default AddCocktails;