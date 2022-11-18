import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const INITIAL_EXPENSES = [
  {title:  'Car Insurance', amount: 299.99, date: new Date(2021, 10, 10)},
  {title:  'Dinner', amount: 20.99, date: new Date(2021, 11, 10)},
  {title:  'Paris tickets', amount: 400, date: new Date(2022, 10, 10)},
  {title:  'Supermarket', amount: 80.35, date: new Date(2022, 10, 18)}
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
