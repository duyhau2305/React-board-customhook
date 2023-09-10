import { useState } from 'react';
import { Table } from '@mantine/core';
import { Pagination } from '@mantine/core';

import { useTable } from '../../hooks/useTable';

function PostTable() {
  const [activePage, setPage] = useState(1);
  const { data } = useTable({
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=5&_page=1'
  });

  const rows = data.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.title}</td> 
      <td>{element.body}</td> 
    </tr>
  ));

  return (
    <>
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

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '0 10px'
        }}
      >
        <Pagination value={activePage} onChange={setPage} total={10} />
      </div>

      
    </>
  );
}

export default PostTable;
