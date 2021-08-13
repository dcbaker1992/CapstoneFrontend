import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './app.css'
import CollectionsDisplay from './components/CollectionsDisplay/collectionsDisplay';
import CocktailsDisplay from './components/CocktailsDisplay/cocktailsDisplay';
import AddCocktails from './components/AddCocktails/addCocktails';
import AddCollections from './components/AddCollections/addCollections';
import NavBar from './components/NavBar/navBar';
import Registration from './components/Registration/registration';
import Login from './components/Login/Login';
import RandomCocktail from './components/RandomCocktail/RandomCocktail';
import SearchBar from './SearchBar/SearchBar';






function App() {
    const [collections, setCollections] = useState([]);
    const [cocktails, setCocktails] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState(null);
    const [searchCoctails, setSearch] = useState([])

    useEffect(() => {
        getCollections();
        getCocktails();    
    }, []);

    let getCollections = async () => {
        try{
            let response= await axios.get(`http://127.0.0.1:8000/collection/`);
            setCollections(response.data)
        }
        catch(err) {
            console.log(err);
        }
    }
        
    let getCocktails = async (id) => {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/collection/cocktails/${id}/`);
            setCocktails(response.data)
            setSelectedCollection(id);
        }
        catch(err) {
            console.log(err);
        }
    }
    let result=()=>{
        if(searchCoctails){
            return searchCoctails.map((cocktail)=>(
                <div key={cocktail.idDrink}>
                <img src={cocktail.strDrinkThumb} alt='cocktails' height='200' width='200'/>
                <h2>{cocktail.strDrink}</h2>
                <h2>{cocktail.strCategory}</h2>
                </div>
            ));
        }
        else{
            return<div></div>
        }
    }
    

    return(
        <div class="bg_image">
            <NavBar />
            <br/>
            <Registration />
            <br/>
            <br/>
            <Login />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <SearchBar setSearch1 = {setSearch} />
            {result()}
            <br/>
            <br/>
            <br/>
            <RandomCocktail />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>          
            <br/>
            <br/>
            <CollectionsDisplay collections={collections} cocktails={cocktails} getCocktails={getCocktails} selectedCollection={selectedCollection}/>
            <br/>
            <br/>
            <CocktailsDisplay collections={collections} cocktails={cocktails} getCollections={getCollections} getCocktails={getCocktails} selectedCollection={selectedCollection}/>

            <AddCollections collections={collections} cocktails={cocktails} selectedCollection={selectedCollection}/>
            <AddCocktails collections={collections} cocktails={cocktails} selectedCollection={selectedCollection}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            

        </div>
    );

}    

export default App;
