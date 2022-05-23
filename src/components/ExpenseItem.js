import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28ht</div>
      <div className="expense-item__description">
        <h2>Car Insure</h2>
        <div className="expense-item__price">$250.56</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
