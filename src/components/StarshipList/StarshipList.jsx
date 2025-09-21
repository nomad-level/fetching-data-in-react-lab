// src/components/StarshipList/StarshipList.jsx
import StarshipCard from '../StarshipCard/StarshipCard';

const StarshipList = ({ starships }) => {
  if (!starships.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Starships</h2>
      <p>Number of results: {starships.length}</p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '1rem',
        marginTop: '1rem'
      }}>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </div>
    </div>
  );
};

export default StarshipList;