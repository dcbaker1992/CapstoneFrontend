import React, { useState } from 'react';
import axios from 'axios'
import FormHandler from '../FormHandler/formHandler';

const AddCollections = (props) => {
    const { values, handleChange, handleSubmit } = FormHandler(addCollections);
    const [collections, setCollections] = useState(props.collections)



    async function addCollections() {
        const addCollections = {...values, collection: props.selectedCollection};
        try{
            let response = await axios.post(`http://127.0.0.1:8000/collection/`, addCollections)
            setCollections(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    
    return (
        <div className="bg-dark text-light">
            <h1>Add A Collection: </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection Name: 
                    <input type="text" name="name" onChange={handleChange} value={values.name} required={true}/>
                </label>

                <button type="submit" class="btn btn-success">Add Collection</button>
            </form>
            <br/>
        </div>
    )
}

export default AddCollections;