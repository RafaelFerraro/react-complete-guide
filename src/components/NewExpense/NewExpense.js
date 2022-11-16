import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseData = (expenseData) => {
    const updatedExpenseData = {
      ...expenseData,
      id: Math.random().toString()
    }

    props.onSaveExpenseData(updatedExpenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  )
}

export default NewExpense;
