import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const onChangeFilterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(el => el.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler}/>
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList expenses={filteredExpenses}/>
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
