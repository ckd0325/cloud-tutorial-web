import React from 'react';

const MyComponent = () => {
  const fetchData = () => {
    fetch('http://localhost:8080')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default MyComponent;
