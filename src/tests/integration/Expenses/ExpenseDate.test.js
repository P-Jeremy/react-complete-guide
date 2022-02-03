import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpenseDate from '../../../components/Expenses/ExpenseDate';

describe('INTEGRATION | Component | ExpenseDate', function () {
  describe('When given a date', function () {
    it('should render', function () {
      // given
      const date = new Date('2022-01-01');

      // when
      render(<ExpenseDate date={date} />);

      // then
      expect(screen.getByText('01')).toBeInTheDocument();
      expect(screen.getByText('janvier')).toBeInTheDocument();
      expect(screen.getByText('2022')).toBeInTheDocument();
    });
  });
});
