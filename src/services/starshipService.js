// src/services/starshipService.js

const BASE_URL = 'https://swapi.dev/api/starships/';

// Function to retrieve all starships
export const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    
    if (!res.ok) {
      // Throw an error if we get a response that doesn't 
      // hold valid starship data.
      throw new Error('Failed to fetch starships.');
    }
    
    const data = await res.json();
    return data.results; // Return just the results array
  } catch (error) {
    console.error('Error fetching starships:', error);
    throw error;
  }
};