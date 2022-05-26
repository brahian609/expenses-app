import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NexExpense.css';

const NewExpense = (props) => {
  const onSaveFormDataHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveFormData={onSaveFormDataHandler} />
    </div>
  )
};

export default NewExpense;
