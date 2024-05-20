// FilterDropdown.js
import React from 'react';

const FilterDropdown = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">All</option>
      <option value="sell">Sell</option>
      <option value="rent">Rent</option>
      <option value="service">Service</option>
    </select>
  );
};

export default FilterDropdown;
