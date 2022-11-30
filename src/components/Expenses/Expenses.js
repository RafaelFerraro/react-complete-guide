import React, { useState } from "react";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterExpenses = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilterChanges={filterExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
