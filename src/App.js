// App.js
import React, { useState } from 'react';
import './App.css';
import jsonData from './data.json';
import Record from './components/Record';
import FilterDropdown from './components/FilterDropdown';

const App = () => {
  const [records, setRecords] = useState(jsonData);
  const [filter, setFilter] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = (id) => {
    const updatedRecords = records.filter(record => record.id !== id);
    setRecords(updatedRecords);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const matchSearch = (record) => {
    return record.name.toLowerCase().includes(searchText.toLowerCase()) ||
           record.qty.toLowerCase().includes(searchText.toLowerCase());
  };

  const filteredRecords = records.filter(record => {
    return (!filter || record.type === filter) && (!searchText || matchSearch(record));
  });

  const sortedRecords = filteredRecords.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="app">
      <div>
        <h1>Record List</h1>
        <FilterDropdown value={filter} onChange={handleFilterChange} />
        <input
          type="text"
          placeholder="Search by Name or Quantity"
          value={searchText}
          onChange={handleSearchChange}
        />
        <div className="record-list">
          {sortedRecords.map(record => (
            <Record key={record.id} record={record} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
