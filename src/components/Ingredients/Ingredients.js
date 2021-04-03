import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Counter from './Counter';
import Search from './Search';

// function Ingredients() {
const Ingredients = () => {

  const [ userIngredients, setUserIngredients ] = useState([]);

  useEffect( () => {
    fetch( 'https://react-hooks-update-a98ff-default-rtdb.firebaseio.com/ingredients.json' )
      .then( response => { return response.json()} )
      .then( responseData => {
        // console.log(responseData)
        const loadedIngredients = [];
        for (const key in responseData) {
          // debugger
          loadedIngredients.push({
              id: key,
              title: responseData[key].title,
              amount: responseData[key].amount
            })
          }
          // console.log(loadedIngredients)
          setUserIngredients( loadedIngredients );
      } )
  }, [] );

  const filteredIngredientsHandler = useCallback( filteredIngredients => {
    setUserIngredients(filteredIngredients)
  }, [] )

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
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} 
                        onRemoveItem={removeIngredientHandler} 
        />
        
      </section>
    </div>
  );
}

export default Ingredients;
