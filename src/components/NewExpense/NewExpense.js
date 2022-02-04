import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';

const NewExpense = (props) => {
  return (
    <div className='new-expense'>
      <ExpenseForm onSubmit={props.onSubmit}/>
    </div>
  );
};

export default NewExpense;