import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/detail/${searchTerm}`);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchComponent;