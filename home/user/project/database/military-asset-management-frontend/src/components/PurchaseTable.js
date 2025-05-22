import React from 'react';
import useFetch from '../hooks/useFetch';

const PurchaseTable = () => {
  const { data, isLoading, error } = useFetch('/api/purchases');

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
        {data.map((purchase) => (
          <tr key={purchase.id}>
            <td>{purchase.date}</td>
            <td>{purchase.base}</td>
            <td>{purchase.equipmentType}</td>
            <td>{purchase.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PurchaseTable;
