import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NexExpense.css';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const showForm = () => {
    setShowExpenseForm(true);
  };

  const hideForm = () => {
    setShowExpenseForm(false);
  };

  const onSaveFormDataHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    hideForm();
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && <button onClick={showForm}>Add New Expense</button>}
      {showExpenseForm && <ExpenseForm onCancel={hideForm} onSaveFormData={onSaveFormDataHandler} />}
    </div>
  )
};

export default NewExpense;
