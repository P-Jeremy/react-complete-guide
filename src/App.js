import ExpenseDate from './components/Expenses/ExpenseDate';

function App() {
  const date = new Date('2022-01-01')
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseDate date={date}/>
    </div>
  );
}

export default App;
