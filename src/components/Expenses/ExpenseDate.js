import './ExpenseDate.scss';

const ExpenseDate = (props) => {
  const date = new Date(props.date)
  const month = date.toLocaleString('fr-FR', { month: 'long' });
  const day = date.toLocaleString('fr-FR', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;