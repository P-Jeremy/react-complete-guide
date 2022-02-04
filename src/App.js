import React, { useState } from 'react';

import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const onSubmit = (expense) => {

    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <NewExpense onSubmit={onSubmit} />
      {expenses.length && <ExpenseList items={expenses} />}
    </div>
  );
};

export default App;
