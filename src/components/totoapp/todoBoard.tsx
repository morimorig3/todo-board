import { VFC } from 'react';
import { FaTimes } from 'react-icons/fa';
import AddTaskForm from 'components/totoapp/addTaskForm';
import TodoList from 'components/totoapp/todoList';
import Modalwindow from 'components/totoapp/modalWindow';
import useModal from 'hooks/useModal';
import useAdding from 'hooks/useAdding';

type task = {
  title: string;
  id: string;
  isCompleted: boolean;
};

type board = {
  title: string;
  id: string;
  todo: task[];
};

type Props = {
  board: board;
  deleteBoard: (id: string) => void;
  addTask: (id: string, newTask: task) => void;
  deleteTask: (boardId: string, taskId: string) => void;
};

const TodoBoard: VFC<Props> = ({
  board,
  deleteBoard = (id: string) => undefined,
  addTask = (id: string, newTask: task) => undefined,
  deleteTask = (boardId: string, taskId: string) => undefined,
}) => {
  const [isAdding, startAdding, finishAdding] = useAdding();
  const [isOpen, openModal, closeModal] = useModal();

  const { title, todo, id } = board;

  const deleteButton = () => openModal();
  const deleteThisBoard = () => deleteBoard(id);

  return (
    <div className="bg-white rounded-lg py-2 px-4 my-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{title}</h3>
        <button
          onClick={deleteButton}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
        >
          <FaTimes />
        </button>
        <Modalwindow
          modalIsOpen={isOpen}
          closeModal={closeModal}
          executeFunc={deleteThisBoard}
          modaltext="このボードを削除しますか"
        />
      </div>
      <TodoList boardId={id} todo={todo} deleteTask={deleteTask} />
      {isAdding ? (
        <AddTaskForm id={id} finishAdding={finishAdding} addTask={addTask} />
      ) : (
        <button
          className="w-full border border-gray-400 text-gray-400 rounded-sm mt-2"
          onClick={startAdding}
        >
          タスクを追加
        </button>
      )}
    </div>
  );
};

export default TodoBoard;
