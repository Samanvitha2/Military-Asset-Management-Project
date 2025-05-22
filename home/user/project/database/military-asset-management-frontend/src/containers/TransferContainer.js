import React from 'react';
import TransferForm from '../components/TransferForm';
import TransferTable from '../components/TransferTable';

const TransfersContainer = () => {
  return (
    <div>
      <h1>Transfers</h1>
      <TransferForm />
      <TransferTable />
    </div>
  );
};

export default TransfersContainer;
