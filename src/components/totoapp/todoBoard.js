import { FaTimes } from 'react-icons/fa';
import AddTaskForm from 'components/totoapp/addTaskForm';
import TodoList from 'components/totoapp/todoList';
import Modalwindow from 'components/totoapp/modalWindow';
import useModal from 'hooks/useModal';
import useAdding from 'hooks/useAdding';

const TodoBoard = ({
  boardId,
  setTodoData = () => undefined,
  todoData = [],
}) => {
  const [isAdding, startAdding, finishAdding] = useAdding();
  const [isOpen, openModal, closeModal] = useModal();

  const { title, todo } = todoData.filter((board) => board.id === boardId)[0];

  const deleteButton = () => openModal();

  const deleteBoard = () => {
    setTodoData((todoData) => {
      const newTodoData = [...todoData];
      const boardIndex = todoData.findIndex((board) => board.id === boardId);
      newTodoData.splice(boardIndex, 1);
      return newTodoData;
    });
  };

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
          executeFunc={deleteBoard}
          modaltext="このボードを削除しますか"
        />
      </div>
      <TodoList id={boardId} todo={todo} setTodoData={setTodoData} />
      {isAdding ? (
        <AddTaskForm
          id={boardId}
          setTodoData={setTodoData}
          finishAdding={finishAdding}
        />
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
