import React from 'react';
import useFetch from '../hooks/useFetch';

const Dashboard = () => {
  const { data, isLoading, error } = useFetch('/api/dashboard');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Opening Balance: {data.openingBalance}</p>
      <p>Closing Balance: {data.closingBalance}</p>
      <p>Net Movement: {data.netMovement}</p>
      <p>Assigned: {data.assigned}</p>
      <p>Expended: {data.expended}</p>
    </div>
  );
};

export default Dashboard;
