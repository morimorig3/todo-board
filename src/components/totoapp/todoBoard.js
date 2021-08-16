import { useState } from 'react';
import AddTaskForm from 'components/totoapp/addTaskForm';
import TodoList from 'components/totoapp/todoList';
import { FaPlus, FaMinus } from 'react-icons/fa';

const TodoBoard = ({ id, setTodoData = () => undefined, todoData = [] }) => {
  const [isTyping, setIsTyping] = useState(false);

  const { title, todo } = todoData.filter((board) => board.id === id)[0];

  const showTaskForm = () => setIsTyping(true);
  const hideTaskForm = () => setIsTyping(false);

  return (
    <div className="bg-white rounded-lg py-2 px-4 my-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        {isTyping ? (
          <button
            onClick={hideTaskForm}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
          >
            <FaMinus />
          </button>
        ) : (
          <button
            onClick={showTaskForm}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-1"
          >
            <FaPlus />
          </button>
        )}
      </div>
      {isTyping && (
        <AddTaskForm
          id={id}
          setTodoData={setTodoData}
          setIsTyping={setIsTyping}
        />
      )}
      <TodoList id={id} todo={todo} setTodoData={setTodoData} />
    </div>
  );
};

export default TodoBoard;
