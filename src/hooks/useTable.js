import { useState, useEffect } from 'react';

export function useTable({ url }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update state
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [url]);

  return {
    data
  }
   
}