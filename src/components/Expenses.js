import ExpenseItem from "./ExpenseItem.js";
import Card from "./Card.js";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
      })};
    </Card>
  );
};

export default Expenses;
