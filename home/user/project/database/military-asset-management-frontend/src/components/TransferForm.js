import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

const TransferForm = () => {
  const [date, setDate] = useState('');
  const [transferringBase, setTransferringBase] = useState('');
  const [receivingBase, setReceivingBase] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const { postData } = useFetch('/api/transfers');

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ date, transferringBase, receivingBase, equipmentType, quantity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>Transferring Base:</label>
      <input type="text" value={transferringBase} onChange={(e) => setTransferringBase(e.target.value)} />
      <br />
      <label>Receiving Base:</label>
      <input type="text" value={receivingBase} onChange={(e) => setReceivingBase(e.target.value)} />
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

export default TransferForm;
