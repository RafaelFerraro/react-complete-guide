import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title:  'Car Insurance', amount: 299.99, date: new Date(2021, 10, 10)},
    {title:  'Dinner', amount: 20.99, date: new Date(2021, 11, 10)},
    {title:  'Paris tickets', amount: 400, date: new Date(2022, 10, 10)},
    {title:  'Supermarket', amount: 80.35, date: new Date(2022, 10, 18)}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => {
        return <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
      })};
    </div>
  );
}

export default App;
