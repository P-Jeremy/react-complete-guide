import React, { useState } from 'react';
import { ExpenseConsumer } from '../../context/ExpenseContext';
import ExpenseInput from '../ExpenseInput/ExpenseInput';

import './ExpenseForm.scss';

const ExpenseForm = ({ expenses, setExpenses }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const clearStates = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const onUserSubmit = (event) => {
    event.preventDefault();

    setExpenses([
      ...expenses,
      {
        id: Math.ceil(Math.random() * 20),
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate,
      },
    ]);

    return clearStates();
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const titleInputAttributes = {
    type: 'text',
    value: enteredTitle ?? '',
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const amountInputAttributes = {
    type: 'number',
    min: '0.01',
    step: '0.01',
    value: enteredAmount ?? '',
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const dateInputAttributes = {
    id: 'date-input',
    type: 'date',
    min: '2019-01-01',
    max: '2022-12-31',
    value: enteredDate ?? '',
  };

  return (
    <form onSubmit={onUserSubmit}>
      <div className='new-expense__controls'>
        <ExpenseInput
          label={'Title'}
          attributes={titleInputAttributes}
          onChange={titleChangeHandler}
        />
        <ExpenseInput
          label={'Amount'}
          attributes={amountInputAttributes}
          onChange={amountChangeHandler}
        />
        <ExpenseInput
          label={'Date'}
          attributes={dateInputAttributes}
          onChange={dateChangeHandler}
        />
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseConsumer(ExpenseForm);
