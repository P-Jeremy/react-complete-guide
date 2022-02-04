import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './ExpenseList.scss';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.items.map((item) => (
        <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount}/>
      ))}
    </Card>
  );
};

export default Expenses;
