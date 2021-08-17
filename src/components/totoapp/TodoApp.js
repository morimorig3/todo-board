import { useState, useEffect } from 'react';
import TodoBoard from 'components/totoapp/todoBoard';
import AddBoardForm from 'components/totoapp/addBoardForm';

const TodoApp = () => {
  const inititalState = JSON.parse(window.localStorage.getItem('todo') || '[]');

  const [isAdding, setIsAdding] = useState(false);
  const [todoData, setTodoData] = useState(inititalState);

  useEffect(
    () => window.localStorage.setItem('todo', JSON.stringify(todoData)),
    [todoData]
  );

  const showBoardForm = () => setIsAdding(true);
  const hideBoardForm = () => setIsAdding(false);
  const clearData = () => setTodoData([]);

  return (
    <div>
      <div className="flex gap-x-4">
        {isAdding ? (
          <button
            onClick={hideBoardForm}
            className="bg-red-500 hover:bg-red-600 transition-colors font-bold py-2 px-4 rounded text-white"
          >
            キャンセル
          </button>
        ) : (
          <button
            onClick={showBoardForm}
            className="bg-green-500 hover:bg-green-600 transition-colors font-bold py-2 px-4 rounded text-white"
          >
            ボード追加
          </button>
        )}
        <button
          className="border-2 border-gray-500 hover:border-transparent hover:bg-gray-500 text-gray-500 hover:text-gray-100 transition-colors font-bold py-2 px-4 rounded"
          onClick={clearData}
        >
          クリア
        </button>
      </div>
      {isAdding && (
        <AddBoardForm setTodoData={setTodoData} setIsAdding={setIsAdding} />
      )}
      <div>
        {todoData.map((board) => (
          <TodoBoard
            key={board.id}
            id={board.id}
            setTodoData={setTodoData}
            todoData={todoData}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;