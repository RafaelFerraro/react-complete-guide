import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const INITIAL_EXPENSES = [
  {id: "1", title:  'Car Insurance', amount: 299.99, date: new Date(2021, 10, 10)},
  {id: "2", title:  'Dinner', amount: 20.99, date: new Date(2021, 11, 10)},
  {id: "3", title:  'Paris tickets', amount: 400, date: new Date(2022, 10, 10)},
  {id: "4", title:  'Supermarket', amount: 80.35, date: new Date(2022, 10, 18)}
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const filterExpenses = (filteredYear) => {
    setFilteredExpenses(
      expenses.filter(expense => parseInt(expense.date.getFullYear()) === parseInt(filteredYear))
    );
  };

  const saveExpenseData = (expenseData) => {
    /*
      The prevExpenses is supplied by react, which supplies the previous
      state of the refered object.
    */
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseData}/>
      <Expenses items={filteredExpenses} onFilterExpensesChanges={filterExpenses}/>
    </div>
  );
}

export default App;
