import React, { useState } from 'react';
import '../styles/LoadDataFromJson.css';

const mockData = { name: 'John Doe', age: 30, occupation: 'Developer' };

function LoadDataFromJson() {
  const [data, setData] = useState({});

  const loadDataFromJson = () => setData({ ...mockData });

  return (
    <div className="load-data-container">
      <button onClick={loadDataFromJson}>Load Data</button>
      {data.name && (
        <>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Occupation: {data.occupation}</p>
        </>
      )}
    </div>
  );
}

export default LoadDataFromJson;