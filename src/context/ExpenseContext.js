import React, { createContext, useState } from 'react';

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

const ExpenseConsumer = (Child) => (props) =>
  (
    <ExpenseContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </ExpenseContext.Consumer>
  );

export { ExpenseProvider, ExpenseConsumer };

export default ExpenseContext;
