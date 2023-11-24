import React, {useState} from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import ExpensesFilter from '../Expenses/ExpensesFilter';
import './ExpensesFilter.css';
const Expenses = (props) => {
    const [filteredYear,setFilteredYear ] = useState('2020');
    
    //let filterInfoText='2019,2021 & 2022';
    
     // if (filteredYear === '2019') {
     ///   filterInfoText = '2020, 2021 & 2022';
    //    }else if (filteredYear === '2020') {
   //          filterInfoText ='2019, 2021 & 2022';
      //  }else if (filteredYear === '2021') {
        //     filterInfoText = '2019, 2020 & 2022';
     //   }else {
       //      filterInfoText='2019, 2020 & 2021';
            
     //   }
    
    
    const filterChangeHanbler = (selectedYear) => {
        setFilteredYear(selectedYear);
        
    };
    
return (
    <div>
      <Card className="expenses">
       <ExpensesFilter
       selected={filteredYear} 
       onChangeFilter ={ filterChangeHanbler}
       />
      {
  /* <p>Data for years {filterInfoText} is hidden.</p> */
        }
        {props.items.map((expense) =>(
        <ExpenseItem 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>
        ))}
       
       {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
       <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      />
       <ExpenseItem
        title={props.items[5].title}
        amount={props.items[5].amount}
        date={props.items[5].date}
      />*/}
      
    </Card>
    </div>
      );
    
}
export default Expenses;