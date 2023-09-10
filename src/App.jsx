import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function App() {

  return (
    <Tabs defaultValue="post">
      <Tabs.List>
        <Tabs.Tab value="post" icon={<IconPhoto size="0.8rem" />}>Post</Tabs.Tab>
        <Tabs.Tab value="todo" icon={<IconMessageCircle size="0.8rem" />}>Todo</Tabs.Tab>
        <Tabs.Tab value="album" icon={<IconSettings size="0.8rem" />}>Album</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="post" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="todo" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="album" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  )
}

export default App
