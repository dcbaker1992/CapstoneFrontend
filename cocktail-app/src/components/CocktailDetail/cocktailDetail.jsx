import React, { useState } from 'react';
// import EditCard from '../EditFlashcards/editFlashcards';


function CocktailDetail(props) {

    const [cocktailNumber, setCocktailNumber] = useState(0);

    if(props.cocktails.length === 0){
        return(null)
    }

    else{
        function goToNextCocktail(){
            let tempCocktailNumber = cocktailNumber;
            tempCocktailNumber++;
            if(tempCocktailNumber === props.cocktails.length){
                tempCocktailNumber = 0;
            }
            setCocktailNumber(tempCocktailNumber)
        }

        function goToPreviousCocktail(){
            let tempCocktailNumber = cocktailNumber;
            tempCocktailNumber--;
            if(tempCocktailNumber < 0){
                tempCocktailNumber = props.cocktails.length - 1
            }
            setCocktailNumber(tempCocktailNumber)
        }

        return(
            <div className="container">
                <div className ='col-md-4'>
                    <button class="btn btn-secondary" onClick={() => goToPreviousCocktail()}>Previous Cocktail</button>
                </div>
                <br/>
                <table class="table table-light">
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <th>Ingredients:</th>
                            <th>Preparation:</th>
                            <th>Garnish:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.cocktails[cocktailNumber].name}</td>
                            <td>{props.cocktails[cocktailNumber].ingredients}</td>
                            <td>{props.cocktails[cocktailNumber].preparation}</td>
                            <td>{props.cocktails[cocktailNumber].garnish}</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-secondary" onClick={() => goToNextCocktail()}>Next Cocktail</button>
                <h2>{cocktailNumber + 1}/{props.cocktails.length}</h2>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            // <div className='row row-spacer container'>
            //     <div className ='col-md-4'>
            //         <button class="btn btn-success" onClick={() => goToPreviousCocktail()}>Previous Cocktail</button>
            //     </div>
            //     <div className='col-md-4'>
            //         <h1>{props.cocktails[cocktailNumber].name}</h1>
            //         <h4>{props.cocktails[cocktailNumber].ingredients}</h4>
            //         <h4>{props.cocktails[cocktailNumber].preparation}</h4>
            //         <h4>{props.cocktails[cocktailNumber].garnish}</h4>
            //         <h2>{cocktailNumber + 1}/{props.cocktails.length}</h2>
            //     </div>
            //     <div className='col-md-4'>
            //         <button class="btn btn-success" onClick={() => goToNextCocktail()}>Next Cocktail</button>
            //     </div>
            //     {/* <EditCocktail cards={props.flashcards[flashcardNumber]} collections={props.collections}
            //                 selectedCollection={props.selectedCollection}/> */}
            // </div>
    )}
}


export default CocktailDetail;