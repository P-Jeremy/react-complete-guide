import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpenseList from '../../../components/Expenses/ExpenseList';

describe('INTEGRATION | Component | ExpenseList', function () {
  describe('When given a items list', function () {
    it('should render', function () {
      // given
      const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date('2022-7-14'),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date('2020-2-28'),
        },
      ];

      // when
      render(<ExpenseList expenses={expenses}/>);
      // then
      expect(screen.getByText('Toilet Paper')).toBeInTheDocument();
      expect(screen.getByText('14')).toBeInTheDocument();
      expect(screen.getByText('juillet')).toBeInTheDocument();
      expect(screen.getByText('2022')).toBeInTheDocument();
      expect(screen.getByText('Car Insurance')).toBeInTheDocument();
      expect(screen.getByText('28')).toBeInTheDocument();
      expect(screen.getByText('février')).toBeInTheDocument();
      expect(screen.getByText('2021')).toBeInTheDocument();

    });
  });
});
