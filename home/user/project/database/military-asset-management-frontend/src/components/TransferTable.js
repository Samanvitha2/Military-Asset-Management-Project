import React from 'react';
import useFetch from '../hooks/useFetch';

const TransferTable = () => {
  const { data, isLoading, error } = useFetch('/api/transfers');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Transferring Base</th>
          <th>Receiving Base</th>
          <th>Equipment Type</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((transfer) => (
          <tr key={transfer.id}>
            <td>{transfer.date}</td>
            <td>{transfer.transferringBase}</td>
            <td>{transfer.receivingBase}</td>
            <td>{transfer.equipmentType}</td>
            <td>{transfer.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransferTable;
