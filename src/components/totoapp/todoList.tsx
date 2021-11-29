import { VFC } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { Task } from 'types';

type Props = {
  boardId: string;
  todo: Task[];
  deleteTask: (boardId: string, taskId: string) => void;
};

const TodoList: VFC<Props> = ({
  boardId = 'id',
  todo = [],
  deleteTask = (boardId: string, taskId: string) => undefined,
}) => {
  return (
    <ul className="grid grid-cols-1 mt-2">
      {todo.map((todo) => (
        <li
          className="flex justify-between items-center border-b last:border-b-0 border-gray-300 py-3 rounded-sm"
          key={todo.id}
        >
          {todo.title}
          <button onClick={() => deleteTask(boardId, todo.id)}>
            <GrFormClose />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
