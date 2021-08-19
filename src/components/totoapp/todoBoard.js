import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import AddTaskForm from 'components/totoapp/addTaskForm';
import TodoList from 'components/totoapp/todoList';
import Modalwindow from 'components/totoapp/modalWindow';

const TodoBoard = ({
  boardId,
  setTodoData = () => undefined,
  todoData = [],
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const { title, todo } = todoData.filter((board) => board.id === boardId)[0];

  const showTaskForm = () => setIsTyping(true);
  const hideTaskForm = () => setIsTyping(false);

  const deleteButton = () => setIsOpen(true);

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
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          executeFunc={deleteBoard}
          modaltext="このボードを削除しますか"
        />
      </div>
      <TodoList id={boardId} todo={todo} setTodoData={setTodoData} />
      {isTyping ? (
        <AddTaskForm
          id={boardId}
          setTodoData={setTodoData}
          setIsTyping={setIsTyping}
          hideTaskForm={hideTaskForm}
        />
      ) : (
        <button
          className="w-full border border-gray-400 text-gray-400 rounded-sm mt-2"
          onClick={showTaskForm}
        >
          タスクを追加
        </button>
      )}
    </div>
  );
};

export default TodoBoard;
