import React, { Fragment, useState } from 'react';

const TransactionList = () => {
  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>400</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </Fragment>
  );
};

export default TransactionList;
