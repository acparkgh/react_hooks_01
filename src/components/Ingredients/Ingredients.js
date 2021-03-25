import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

// function Ingredients() {
const Ingredients = () => {

  const [ userIngredients, setUserIngredients ] = useState([]);

  const addIngredientHandler = ingredient => { 
    setUserIngredients( prevIngredients => {
      // return [ ...prevIngredients, { id: Math.random().toString(), ...ingredient } ]
      return [ ...prevIngredients, { ...ingredient, id: Math.random().toString() } ]
     } ); 
  }

  const removeIngredientHandler = ingredientID => {
    return (
      setUserIngredients( prevIngredients => {
      // debugger
        return (
          prevIngredients.filter( ingredient => { 
            return (
              ingredient.id !== ingredientID
            ); 
          } )
        );
      } )
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients = {userIngredients} 
                        onRemoveItem={removeIngredientHandler} 
        />
      </section>
    </div>
  );
}

export default Ingredients;
