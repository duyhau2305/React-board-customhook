import { Table } from '@mantine/core';
import { Pagination } from '@mantine/core';
import { useState } from 'react';
import { useTable } from '../../hooks/useTable';

function Todos() {
    const [activePage, setPage] = useState(1);
    const { data } = useTable({
      url: `https://jsonplaceholder.typicode.com/todos?_limit=5&_page=${activePage}`
    });
    const rows = data.map((element) => (
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td> 
        <td>{element.completed ? 'Completed' : 'New'}</td> 
      </tr>
    ));    
  
    return (
      <>
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
        <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '0 15px'
        }}
      >
        <Pagination value={activePage} onChange={setPage} total={10} />
      </div>

      </>
      
    );
  }


export default Todos

