import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import './ExpenseItem.css';

const ExpenseItem = (expense) => {
  const [title, setTitle] = useState(expense.title);

  const changeTitle = () => {
    setTitle("New title");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
        <button onClick={changeTitle}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
