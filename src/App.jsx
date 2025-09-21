// src/App.jsx
import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
import { index } from './services/starshipService';

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [lastSearchTerm, setLastSearchTerm] = useState('');

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starships = await index();
        setStarshipsData(starships);
        setDisplayedStarships(starships);
      } catch (error) {
        console.error('Error loading starships:', error);
      }
    };

    fetchStarships();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      // If search is empty, show all starships
      setDisplayedStarships(starshipsData);
      setLastSearchTerm('');
      return;
    }

    // Filter starships based on case-insensitive partial name match
    const filteredStarships = starshipsData.filter(starship =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedStarships(filteredStarships);
    setLastSearchTerm(searchTerm);
  };

  const handleResetSearch = () => {
    setDisplayedStarships(starshipsData);
    setLastSearchTerm('');
  };

  return (
    <div>
      <h1>Star Wars API</h1>
      <StarshipSearch 
        onSearch={handleSearch}
        lastSearchTerm={lastSearchTerm}
        onReset={handleResetSearch}
        showReset={!!lastSearchTerm}
      />
      <StarshipList starships={displayedStarships} />
    </div>
  );
}

export default App
