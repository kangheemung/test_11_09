import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);//書いた値をセーブする
    };
    const amountChageHandler = (event) => {
         setEnteredAmount(event.target.value);
        
    };   
       const dayChageHandler = (event) => {
          setEnteredDate(event.target.value);
        
    };  

    return(
    <form>
        <div className = 'new-expense__controls'>
            <div className = 'new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'  min='0.01'  step='0.01' onChange={amountChageHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type ='date' min="2019-01-01" max="2022-12-31" onChange={dayChageHandler}/>
            </div>
        </div>
        <div className="new-expense__actions"></div>
        <button type="submit">Add Expense</button>
    </form>
    );
};
export default ExpenseForm;