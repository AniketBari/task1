// Record.js
import React from 'react';

const Record = ({ record, onDelete }) => {
  const handleDelete = () => {
    onDelete(record.id);
  };

  return (
    <div className="record">
      <span>{record.name}</span>
      <span>{record.qty}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Record;
