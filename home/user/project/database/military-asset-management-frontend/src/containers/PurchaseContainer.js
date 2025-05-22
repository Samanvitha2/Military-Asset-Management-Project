import React from 'react';
import PurchaseForm from '../components/PurchaseForm';
import PurchaseTable from '../components/PurchaseTable';

const PurchasesContainer = () => {
  return (
    <div>
      <h1>Purchases</h1>
      <PurchaseForm />
      <PurchaseTable />
    </div>
  );
};

export default PurchasesContainer;
