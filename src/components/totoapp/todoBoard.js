import { useState, useEffect } from 'react';
import AddForm from 'components/totoapp/addForm';
import TodoList from 'components/totoapp/todoList';
import { FaPlus, FaMinus } from 'react-icons/fa';

const TodoBoard = ({ title }) => {
  const inititalState = JSON.parse(window.localStorage.getItem('todo') || '[]');
  const [isTyping, setIsTyping] = useState(false);
  const [todoList, setTodoList] = useState(inititalState);

  useEffect(
    () => window.localStorage.setItem('todo', JSON.stringify(todoList)),
    [todoList]
  );

  const showForm = () => setIsTyping(true);
  const hideForm = () => setIsTyping(false);

  return (
    <div className="bg-white rounded-lg py-2 px-4 my-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg mb-2">board title</h3>
        {isTyping ? (
          <button
            onClick={hideForm}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
          >
            <FaMinus />
          </button>
        ) : (
          <button
            onClick={showForm}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-1"
          >
            <FaPlus />
          </button>
        )}
      </div>
      {isTyping && (
        <AddForm setTodoList={setTodoList} setIsTyping={setIsTyping} />
      )}
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoBoard;
