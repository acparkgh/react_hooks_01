import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  
  // const inputState = useState({ title: '', amount: '' });
  // const [ inputState, setInputState ] = useState({ title: '', amount: '' });
  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');
  
  // debugger
  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };
  
  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" 
                   id="title" 
                  //  value={inputState.title} 
                   value={enteredTitle} 
                   onChange={ (event) => {
                    //  const newTitle = event.target.value;
                    //  return ( 
                    //    setInputState( (prevInputState) => { 
                    //      return ({
                    //        title: newTitle,
                    //        amount: prevInputState.amount                     
                    //      })
                    //    } ) 
                    //  )  
                    setEnteredTitle(event.target.value);
                   } }
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" 
                   id="amount" 
                   value={enteredAmount} 
                   onChange={ event => setEnteredAmount(event.target.value) }
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
