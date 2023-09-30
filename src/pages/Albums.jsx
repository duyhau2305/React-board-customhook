import { Table } from '@mantine/core';
import { Pagination, Button } from '@mantine/core';
import { useTable } from '../hooks/useTable';

function Albums() {
  const { data, setPage, page } = useTable({
    resource: 'albums'
  });
  
    const rows = data.map((element) => (
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>   
        <td><Button variant="filled">View</Button></td>     
      </tr>
    ));    
  
    return (
      <>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th> 
            <th>Action</th>           
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
        <Pagination value={page} onChange={setPage} total={10} />
      </div>
      </>
      
    );
  }


export default Albums