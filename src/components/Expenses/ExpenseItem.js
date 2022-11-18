import React from 'react';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import './ExpenseItem.css';

const ExpenseItem = (expense) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
        <button>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
