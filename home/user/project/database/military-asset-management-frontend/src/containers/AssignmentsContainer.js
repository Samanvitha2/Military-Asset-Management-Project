import React from 'react';
import AssignmentForm from '../components/AssignmentForm';
import AssignmentTable from '../components/AssignmentTable';

const AssignmentsContainer = () => {
  return (
    <div>
      <h1>Assignments</h1>
      <AssignmentForm />
      <AssignmentTable />
    </div>
  );
};

export default AssignmentsContainer;
