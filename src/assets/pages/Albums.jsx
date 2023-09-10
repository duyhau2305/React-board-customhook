import React, { useState, useEffect } from 'react';
import { Table } from '@mantine/core';

function Albums() {
    const [albumContent, setAlbumContent] = useState([]);

    useEffect(() => {
      // Fetch data from the API and update state
      fetch('https://jsonplaceholder.typicode.com/albums?_limit=5&_page=1')
        .then((response) => response.json())
        .then((data) => setAlbumContent(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
   
  
    const rows = albumContent.map((element) => (
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>       
      </tr>
    ));    
  
    return (
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>            
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }


export default Albums