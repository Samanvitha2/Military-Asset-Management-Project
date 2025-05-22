import React from 'react';
import useFetch from '../hooks/useFetch';

const AssignmentTable = () => {
  const { data, isLoading, error } = useFetch('/api/assignments');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Personnel ID</th>
          <th>Base</th>
          <th>Equipment Type</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((assignment) => (
          <tr key={assignment.id}>
            <td>{assignment.personnelId}</td>
            <td>{assignment.base}</td>
            <td>{assignment.equipmentType}</td>
            <td>{assignment.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssignmentTable;
