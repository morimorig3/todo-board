import { VFC } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { Task } from 'types';

type Props = {
  boardId: string;
  todo: Task[];
  deleteTask: (boardId: string, taskId: string) => void;
  toggleTask: (boardId: string, taskId: string) => void;
};

const TodoList: VFC<Props> = ({
  boardId = 'id',
  todo = [],
  deleteTask = (boardId: string, taskId: string) => undefined,
  toggleTask = (boardId: string, taskId: string) => undefined,
}) => {
  return (
    <ul className="grid grid-cols-1 mt-2">
      {todo.map(({ id, title, isCompleted }) => (
        <li
          className="flex items-center border-b last:border-b-0 border-gray-300 py-3 rounded-sm"
          key={id}
        >
          <label className="flex items-center" htmlFor={id}>
            <input
              id={id}
              className="mr-2"
              type="checkbox"
              checked={isCompleted ? true : false}
              onChange={() => toggleTask(boardId, id)}
            />
            {isCompleted ? <s>{title}</s> : <p>{title}</p>}
          </label>
          {isCompleted && (
            <button className="ml-auto" onClick={() => deleteTask(boardId, id)}>
              <IoTrashOutline size="1.5em" className="text-gray-400" />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
