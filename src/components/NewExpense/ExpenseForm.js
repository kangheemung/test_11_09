import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    
   // const [userInput,setUserInput] = useState({
     //   enteredTitle:'',
       // enteredAmount:'',
    //    enteredDate:''
    //});
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);//書いた値をセーブする
       //===================
       //setUserInput({
         //  ...userInput,//すべてのキーとvalueを新しい個体に追加する
         // enteredTitle: event.target.value,
      // })<=updateに考慮しないと行けない問題が多い
      //=======================----
      //setUserInput((prevState) => {
        //  return {//以前状態からキーとvalueをコピーしevent.target.valueでオーバーナイトします。
          //こっちがもっと安全な書き方です。アップデートに使う書き方
          //以前状態でstateをアップデートするときこれを使いましょう
          
         // ...prevState,enteredTitle: event.target.value};
     // });
    };
    
    //色んな状態Stateはどう管理すればいい？
    //何回でも呼べばい
    //const[enteredDate, setEnteredDate]=useState('');みたいに
    //例え数字でもevent.target.valueの場合その値は文字列になります。
    
    const amountChageHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //  ...userInput,
        //enteredAmount: event.target.value,
        //setUserInput((prevState) => {
          //  return{
            //     ...prevState,enteredAmount: event.target.value};
       //})
        
    };   
       const dayChageHandler = (event) => {
          setEnteredDate(event.target.value);
           //setUserInput({
           // ...userInput,   
           // enteredDate: event.target.value,
            //setUserInput((prevState) => {
            //return{
              //   ...prevState,enteredDate: event.target.value};
   
       })
        
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