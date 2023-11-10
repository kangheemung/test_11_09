import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses'
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
    {id: 'e6',title:'bag' ,amount: 100.67, date: new Date(2024, 5, 28)}];
  return (
    <div className="App">
       <h2>Let's get started!</h2>
       <Expenses items={expenses}/>
       <p>This is also visible!</p>
    </div>
  );
}

export default App;
