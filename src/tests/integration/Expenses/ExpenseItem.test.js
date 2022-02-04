import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpenseItem from '../../../components/Expenses/ExpenseItem';

describe('INTEGRATION | Component | ExpenseItem', function () {
  describe('When given an item', function () {
    it('should render', function () {
      // given
      const date = new Date('2022-01-01');
      const title = 'Item test';
      const amount = 42;

      // when
      render(<ExpenseItem date={date} title={title} amount={amount} />);

      // then
      expect(screen.getByText('01')).toBeInTheDocument();
      expect(screen.getByText('janvier')).toBeInTheDocument();
      expect(screen.getByText('2022')).toBeInTheDocument();
      expect(screen.getByText('Item test')).toBeInTheDocument();
    });
  });
});
