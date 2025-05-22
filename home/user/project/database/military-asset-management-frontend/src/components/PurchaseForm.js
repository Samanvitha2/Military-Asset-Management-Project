import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

const PurchaseForm = () => {
  const [date, setDate] = useState('');
  const [base, setBase] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const { postData } = useFetch('/api/purchases');

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ date, base, equipmentType, quantity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>Base:</label>
      <input type="text" value={base} onChange={(e) => setBase(e.target.value)} />
      <br />
      <label>Equipment Type:</label>
      <input type="text" value={equipmentType} onChange={(e) => setEquipmentType(e.target.value)} />
      <br />
      <label>Quantity:</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PurchaseForm;
