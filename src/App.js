import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const App = () => {
  const expenses = [
    {title:  'Car Insurance', amount: 299.99, date: new Date(2021, 10, 10)},
    {title:  'Dinner', amount: 20.99, date: new Date(2021, 11, 10)},
    {title:  'Paris tickets', amount: 400, date: new Date(2022, 10, 10)},
    {title:  'Supermarket', amount: 80.35, date: new Date(2022, 10, 18)}
  ];

  const saveExpenseData = (expenseData) => {
    console.log("A new expense was added");
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseData}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
