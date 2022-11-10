import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import "./Expenses.css";

const Expenses = (props) => {
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
