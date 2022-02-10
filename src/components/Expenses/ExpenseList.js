import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './ExpenseList.scss';
import { ExpenseConsumer } from '../../context/ExpenseContext';

const ExpenseList = ({ expenses }) => {
  return (
    expenses.length && (
      <Card className='expenses'>
        {expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </Card>
    )
  );
};

export default ExpenseConsumer(ExpenseList);
