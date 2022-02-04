import './ExpenseInput.scss';

const ExpenseInput = (props) => {
  return (
    <div className='expense-input'>
      <label >
        {props.label}
        <input
          {...props.attributes}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

export default ExpenseInput;
