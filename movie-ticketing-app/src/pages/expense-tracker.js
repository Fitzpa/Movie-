import React, { Fragment } from 'react';
import Balance from '../components/balance';
import IncomeExpenses from '../components/income-expenses';
import TransactionList from '../components/transaction-list';
import AddTransaction from '../components/add-transaction';

import '../styles/expense-tracker.css';

const ExpenseTracker = () => {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </section>
      <section className="section"></section>
    </Fragment>
  );
};

export default ExpenseTracker;
