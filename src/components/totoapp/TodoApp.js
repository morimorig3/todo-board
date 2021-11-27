import { useState, useEffect } from 'react';
import TodoBoard from 'components/totoapp/todoBoard';
import AddBoardForm from 'components/totoapp/addBoardForm';
import Modalwindow from 'components/totoapp/modalWindow';
import useModal from 'hooks/useModal';
import useAdding from 'hooks/useAdding';

const inititalState = JSON.parse(window.localStorage.getItem('todo') || '[]');

const TodoApp = () => {
  const [todoData, setTodoData] = useState(inititalState);
  const [isOpen, openModal, closeModal] = useModal();
  const [isAdding, startAdding, finishAdding] = useAdding();

  useEffect(
    () => window.localStorage.setItem('todo', JSON.stringify(todoData)),
    [todoData]
  );

  const clearData = () => setTodoData([]);
  const clearButton = () => openModal();

  return (
    <div>
      <div className="flex gap-x-4">
        {isAdding ? (
          <button
            onClick={finishAdding}
            className="bg-red-500 hover:bg-red-600 transition-colors font-bold py-2 px-4 rounded text-white"
          >
            キャンセル
          </button>
        ) : (
          <button
            onClick={startAdding}
            className="bg-green-500 hover:bg-green-600 transition-colors font-bold py-2 px-4 rounded text-white"
          >
            ボード追加
          </button>
        )}
        <button
          className="border-2 border-gray-500 hover:border-transparent hover:bg-gray-500 text-gray-500 hover:text-gray-100 transition-colors font-bold py-2 px-4 rounded"
          onClick={clearButton}
        >
          クリア
        </button>
        <Modalwindow
          modalIsOpen={isOpen}
          closeModal={closeModal}
          executeFunc={clearData}
          modaltext="すべてのボードを削除しますか？"
        />
      </div>
      {isAdding && (
        <AddBoardForm setTodoData={setTodoData} finishAdding={finishAdding} />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4">
        {todoData.map((board) => (
          <TodoBoard
            key={board.id}
            boardId={board.id}
            setTodoData={setTodoData}
            todoData={todoData}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
