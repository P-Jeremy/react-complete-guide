import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('ACCEPTANCE | Component | App', function () {
  describe('when new expense is added', function () {
    it('should render a list', function () {
      // given
      render(<App />);

      const dateInput = screen.getByLabelText('Date');
      userEvent.type(dateInput, '2022-01-01');

      const titleInput = screen.getByLabelText('Title');
      userEvent.type(titleInput, 'An expense');

      const amountInput = screen.getByLabelText('Amount');
      userEvent.type(amountInput, '50');

      const button = screen.getByText('Add Expense')
    
      fireEvent.click(button)

      expect(screen.getByText('01')).toBeInTheDocument();
      expect(screen.getByText('janvier')).toBeInTheDocument();
      expect(screen.getByText('2022')).toBeInTheDocument();
      expect(screen.getByText('An expense')).toBeInTheDocument();
      expect(screen.getByText('50')).toBeInTheDocument();
    });
  });
});
