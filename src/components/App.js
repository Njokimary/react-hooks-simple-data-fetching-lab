import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched dog image URL
        setDogImage(data.message);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false); // Set loading state to false on error
      });
  }, []);

  return (
    <div>
      {/* <h1>Hello, this is the App component!</h1> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
