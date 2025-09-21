// src/components/StarshipCard/StarshipCard.jsx

const StarshipCard = ({ starship }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem', borderRadius: '8px' }}>
      <h3>{starship.name}</h3>
      <p><strong>Class:</strong> {starship.starship_class}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Model:</strong> {starship.model}</p>
    </div>
  );
};

export default StarshipCard;