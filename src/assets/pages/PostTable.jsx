import React, { useState, useEffect } from 'react';
import { Table } from '@mantine/core';

function PostTable() {
  const [postContent, setPostContent] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update state
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1')
      .then((response) => response.json())
      .then((data) => setPostContent(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const rows = postContent.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.title}</td> 
      <td>{element.body}</td> 
    </tr>
  ));
  console.log(rows)

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default PostTable;
