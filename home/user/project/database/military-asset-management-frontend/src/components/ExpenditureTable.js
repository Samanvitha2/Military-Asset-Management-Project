import React from 'react';
import useFetch from '../hooks/useFetch';

const ExpenditureTable = () => {
  const { data, isLoading, error } = useFetch('/api/expenditures');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Base</th>
          <th>Equipment Type</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((expenditure) => (
          <tr key={expenditure.id}>
            <td>{expenditure.date}</td>
            <td>{expenditure.base}</td>
            <td>{expenditure.equipmentType}</td>
            <td>{expenditure.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenditureTable;
