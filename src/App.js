import logo from './logo.svg';
import './App.css';
import React from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses =[
    {
      id: 'e1',
    title:'Toilet Paper',
    amount: 94.17, 
    date: new Date(2020, 7, 28)
    },
    {
      id: 'e2',
      title:'TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
      
    },
    {
      id: 'e3',
      title:'Car Insurance',
      amount: 294.67, 
      date: new Date(2021, 2, 28)
    },
    {id: 'e4',title:'apple' ,amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e5',title:'bear' ,amount: 300.67, date: new Date(2023, 3, 18)},
    {id: 'e6',title:'bag' ,amount: 100.67, date: new Date(2024, 5, 28)}
    ];
    return (//React.createElement(
     // 'div',
      //{},
     //  React.createElement('h2',{},"Let's get started!"),
     //  React.createElement(Expenses, {items: expenses})
     // );
  //(
    <div className="App">
        <NewExpense />
        <Expenses items={expenses}/>
         <p>This is also visible!</p>
    </div>
 ); 
}

export default App;
