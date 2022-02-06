import React, { useState } from 'react';
import ExpenseInput from '../ExpenseInput/ExpenseInput';

import './ExpenseForm.scss';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const onSubmit = (event) => {
    event.preventDefault()
    return props.onSubmit({
      id: Math.ceil(Math.random() * 20),
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    });
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const titleInputAttributes = {
    type: 'text',
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const amountInputAttributes = {
    type: 'number',
    min: '0.01',
    step: '0.01',
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const dateInputAttributes = {
    id: 'date-input',
    type: 'date',
    min: '2019-01-01',
    max: '2022-12-31',
  };

  return (
    <form onSubmit={onSubmit}>
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

export default ExpenseForm;
