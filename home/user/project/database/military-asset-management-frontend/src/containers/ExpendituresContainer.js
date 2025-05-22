import React from 'react';
import ExpenditureForm from '../components/ExpenditureForm';
import ExpenditureTable from '../components/ExpenditureTable';

const ExpendituresContainer = () => {
  return (
    <div>
      <h1>Expenditures</h1>
      <ExpenditureForm />
      <ExpenditureTable />
    </div>
  );
};

export default ExpendituresContainer;
