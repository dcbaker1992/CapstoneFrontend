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
    

    return(
        <div class="bg_image">
            <NavBar />
            <br/>
            <Registration />
            <Login />
            <br/>
            <br/>
            
            <SearchBar />
            {/* <Switch>
                <Route path="/addCollection" render={props => {return <AddCollections {...props}/>}}/>
                <Route path="/addCocktail" render={props => {return <AddCocktails {...props}/>}}/>
            </Switch> */}
            <br/>
            <CollectionsDisplay collections={collections} cocktails={cocktails} getCocktails={getCocktails} selectedCollection={selectedCollection}/>
            <br/>
            <br/>
            <CocktailsDisplay collections={collections} cocktails={cocktails} getCollections={getCollections} getCocktails={getCocktails} selectedCollection={selectedCollection}/>
            <br/>
            <br/>
            <RandomCocktail />
            <br/>
            <br/>
            <AddCollections collections={collections} cocktails={cocktails} selectedCollection={selectedCollection}/>
            <AddCocktails collections={collections} cocktails={cocktails} selectedCollection={selectedCollection}/>
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
