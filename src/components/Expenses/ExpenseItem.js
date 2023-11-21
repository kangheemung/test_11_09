import React,{ useState }from 'react';

import ExpenseDate from '../Expenses/ExpenseDate';
import '../Expenses/ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) {
    const[title,setTitle]= useState(props.title);
    
    //削除可能になる。
// const expenseDate = new Date(2021, 2, 28);
 //const expenseTitle = 'Car Insurance';
 //const expenseAmount = 294.67;
 //EoebseDate.jsにこのロジックを移動します。
 //const month = props.date.toLocaleString('en-US', { month: 'long' });
 //const day = props.date.toLocaleString('en-US', { day: '2-digit' });
 //const year = props.date.getFullYear();
 const clickHandler = () => {
  setTitle('update!');
      console.log(title);
 };
    return(
      <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className= " expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Chage Title</button>
      </Card>
    );

}
export default ExpenseItem;
