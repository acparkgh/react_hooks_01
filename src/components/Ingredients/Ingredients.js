import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

// function Ingredients() {
const Ingredients = () => {

  const [ userIngredients, setUserIngredients ] = useState([]);

  const addIngredientHandler = ingredient => {
    fetch( 'https://react-hooks-update-a98ff-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      header: { 'Content-Type': 'application/json' }
    } ).then( response => { return response.json() } )
       .then( responseData => {
         setUserIngredients( prevIngredients => {
           return [ ...prevIngredients, { ...ingredient, id: responseData.name } ] 
         } );
       } );
  }

  const removeIngredientHandler = ingredientID => {
    return (
      setUserIngredients( prevIngredients => {
        return (
          prevIngredients.filter( ingredient => { 
            return (
              ingredient.id !== ingredientID
             )
          } )
        );
      } )
    );
  };

  return (
    <div className="App">
      {/* <IngredientForm onAddIngredients={addIngredientHandler} /> */}
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} 
                        onRemoveItem={removeIngredientHandler} 
        />
      </section>
    </div>
  );
}

export default Ingredients;
