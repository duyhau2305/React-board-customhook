import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import PostTable from './pages/PostTable';
import Todos from './pages/Todos';
import Albums from './pages/Albums';

function App() {

  return (
    <Tabs defaultValue="post">
      <Tabs.List>
        <Tabs.Tab value="post" icon={<IconPhoto size="0.8rem" />}>Post</Tabs.Tab>
        <Tabs.Tab value="todo" icon={<IconMessageCircle size="0.8rem" />}>Todo</Tabs.Tab>
        <Tabs.Tab value="album" icon={<IconSettings size="0.8rem" />}>Album</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="post" pt="xs">
        <PostTable />
        
      </Tabs.Panel>

      <Tabs.Panel value="todo" pt="xs">
        <Todos />
      </Tabs.Panel>

      <Tabs.Panel value="album" pt="xs">
        <Albums/>
      </Tabs.Panel>
    </Tabs>
  )
}

export default App
