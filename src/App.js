import React from 'react';

import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
import { ExpenseProvider } from './context/ExpenseContext';

const App = () => {

  return (
    <ExpenseProvider>
      <div>
        <NewExpense />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
};

export default App;
