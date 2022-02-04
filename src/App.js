import ExpenseItem from './components/Expenses/ExpenseItem';

function App() {
  const date = new Date('2022-01-01')
  const amount = 50;
  const title = 'Fake Item';
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={title} amount={amount} date={date}/>
    </div>
  );
}

export default App;
