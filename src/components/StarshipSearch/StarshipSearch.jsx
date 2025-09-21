// src/components/StarshipSearch/StarshipSearch.jsx
import { useState } from 'react';

const StarshipSearch = ({ onSearch, lastSearchTerm, onReset, showReset }) => {
  const [searchInput, setSearchInput] = useState('');
  const [prevSearchTerm, setPrevSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the search function passed from App
    onSearch(searchInput);
    
    // Save the current search term for display
    setPrevSearchTerm(searchInput);
    
    // Reset the input field
    setSearchInput('');
  };

  const displayedSearchTerm = prevSearchTerm || lastSearchTerm;

  return (
    <div>
      <h2>Search</h2>
      
      {/* Search metadata */}
      {displayedSearchTerm && (
        <p>Last search: "{displayedSearchTerm}"</p>
      )}
      
      {/* Search form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Term: </label>
        <input
          id="search"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter starship name..."
        />
        <button type="submit">Search</button>
      </form>
      
      {/* Reset button - only show if there's an active search */}
      {showReset && (
        <button 
          onClick={() => {
            onReset();
            setPrevSearchTerm('');
          }}
          style={{ marginTop: '10px' }}
        >
          Show all starships
        </button>
      )}
    </div>
  );
};

export default StarshipSearch;