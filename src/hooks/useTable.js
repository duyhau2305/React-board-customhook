import { useState, useEffect } from 'react';

export function useTable({ resource }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch data from the API and update state
    fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=5&_page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [resource, page]);

  return {
    data,
    setPage,
    page
  }
   
}