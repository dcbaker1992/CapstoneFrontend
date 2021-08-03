import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CollectionsDisplay(props){

    let collections= props.collections.map(collection => {
        if(props.selectedCollection == collection.id){
            return <ul className="bg-secondary container" onClick={() => props.getCocktails(collection.id)}  key={collection.id}>{collection.id}:     {collection.name}</ul>
        }
        else{
            return <ul className="bg-secondary container" onClick={() => props.getCocktails(collection.id)}  key={collection.id}>{collection.id}:    {collection.name}</ul>
        }
    });

    return(
        <div class="container">
            <h1><u>Collections:</u></h1>
            <p>(Please click on a collection below to display Cocktails)</p>
            <h3>{collections}</h3>
            <br/>
        </div>
    )
}

export default CollectionsDisplay