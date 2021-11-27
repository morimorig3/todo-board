import { VFC } from 'react';
import TodoApp from 'components/totoapp/TodoApp';
import Layout from 'components/layout';
import { FaGithub } from 'react-icons/fa';

const App: VFC = () => (
  <Layout>
    <h1 className="text-lg font-bold pb-2 border-b-2 border-gray-400 border-dashed mb-4 flex justify-between">
      TODO Board
      <a
        href="https://github.com/morimorig3/todo-board"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size="1.5em" />
      </a>
    </h1>
    <TodoApp />
  </Layout>
);

export default App;
