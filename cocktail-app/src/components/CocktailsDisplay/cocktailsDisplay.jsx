import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CocktailDetail from '../CocktailDetail/cocktailDetail';

function CocktailsDisplay(props){

    props.cocktails.map(cocktails => { 
        return <li key={cocktails.id}>
            {cocktails.name} - {cocktails.ingredients} - {cocktails.preparation} - {cocktails.garnish}</li>
    });

    return(
        <div>
                <ul>
                    <CocktailDetail cocktails={props.cocktails} collections={props.collections}
                                selectedCollection={props.selectedCollection}/>
                </ul>  
        </div>
    )
}

export default CocktailsDisplay;