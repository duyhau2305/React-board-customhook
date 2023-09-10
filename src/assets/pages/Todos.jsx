import React, { useState, useEffect } from 'react';
import { Table } from '@mantine/core';

function Todos() {
    const [todoContent, setTodoContent] = useState([]);

    useEffect(() => {
      // Fetch data from the API and update state
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5&_page=1')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTodoContent(data)

        })
        
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
    console.log(todoContent);
   
  
    const rows = todoContent.map((element) => (
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td> 
        <td>{element.completed}</td> 
      </tr>
    ));    
  
    return (
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }


export default Todos

