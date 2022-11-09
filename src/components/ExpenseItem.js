import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';

function ExpenseItem(expense) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
