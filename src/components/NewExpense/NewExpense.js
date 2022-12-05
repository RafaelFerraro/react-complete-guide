import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  let [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseData = (expenseData) => {
    const updatedExpenseData = {
      ...expenseData,
      id: Math.random().toString()
    }

    props.onSaveExpenseData(updatedExpenseData);
  };

  const handleShowExpenseForm = (value) => {
    setShowExpenseForm(value)
  }

  const showButtonOnly = <button onClick={() => handleShowExpenseForm(true)}>Add new expense</button>

  return (
    <div className='new-expense'>
      {showExpenseForm ? <ExpenseForm onSaveExpenseData={saveExpenseData} onCancelClick={handleShowExpenseForm}/> : showButtonOnly}

    </div>
  )
}

export default NewExpense;
