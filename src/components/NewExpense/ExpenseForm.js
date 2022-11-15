import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    console.log(amount);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log(date);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='test' onChange={titleChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min="2019-01-01" onChange={dateChangeHandler}></input>
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
