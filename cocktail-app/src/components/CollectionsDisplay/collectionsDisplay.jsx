import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CollectionsDisplay(props){

    let collections= props.collections.map(collection => {
        if(props.selectedCollection == collection.id){
            return <ul onClick={() => props.getCocktails(collection.id)}  key={collection.id}>{collection.id}:     {collection.name}</ul>
        }
        else{
            return <ul onClick={() => props.getCocktails(collection.id)}  key={collection.id}>{collection.id}:    {collection.name}</ul>
        }
    });

    return(
        <div className=" bg-dark text-light">
            <h1><u>Collections:</u></h1>
            <p>(Please click on a collection below to display Cocktails)</p>
            <h5>{collections}</h5>
            <br/>
        </div>
    )
}

export default CollectionsDisplay