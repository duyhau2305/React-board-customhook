import { Table } from '@mantine/core';

import { useTable } from '../../hooks/useTable';

function Albums() {
  const { data } = useTable({
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=5&_page=1'
  });
   
  
    const rows = data.map((element) => (
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