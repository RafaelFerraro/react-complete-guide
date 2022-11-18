import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterExpenses = (year) => {
    setFilteredYear(year)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilterChanges={filterExpenses}/>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
      ))};
    </Card>
  );
};

export default Expenses;
