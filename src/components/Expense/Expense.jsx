import React from 'react'
import { useState } from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import NewExpense from '../NewExpense/NewExpense';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import './Expense.css'

function Expense() {

    const [year,setYear] = useState("");
    const [expenses, setExpenses] = useState([
      {
        id: Math.floor(Math.random() * 10000),
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { 
        id: Math.floor(Math.random() * 10000), 
        title: 'New TV', 
        amount: 799.49, 
        date: new Date(2021, 2, 12) },
      {
        id: Math.floor(Math.random() * 10000),
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: Math.floor(Math.random() * 10000),
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },  
    ]);

      const newExpensesHandler = (expense) => {
        setExpenses([expense,...expenses]);
        console.log(expenses);        
      }

      const changeYear = (year) => {
        setYear(year);
      }

    return (
        <div className='container'>
            <NewExpense onSaveNewExpenses={newExpensesHandler} />
            <ExpensesFilter onChangeYear={changeYear}/>
            {expenses.map(item => {
              if(item.date.getFullYear() == year){
                return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
              }
                
            })}
        </div>
    );
}

export default Expense
