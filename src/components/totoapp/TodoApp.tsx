import { VFC } from 'react';
import Button from 'components/Button';
import TodoBoard from 'components/totoapp/todoBoard';
import AddBoardForm from 'components/totoapp/addBoardForm';
import Modalwindow from 'components/totoapp/modalWindow';
import useModal from 'hooks/useModal';
import useAdding from 'hooks/useAdding';
import useTodoData from 'hooks/useTodoData';
import { Board } from 'types';

const TodoApp: VFC = () => {
  const {
    todoData,
    resetTodoData,
    addBoard,
    deleteBoard,
    addTask,
    deleteTask,
    toggleTask,
  } = useTodoData();

  const [isOpen, openModal, closeModal] = useModal();
  const [isAdding, startAdding, finishAdding] = useAdding();

  return (
    <div>
      <div className="flex gap-x-4">
        {isAdding ? (
          <Button
            onClick={finishAdding}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            キャンセル
          </Button>
        ) : (
          <Button
            onClick={startAdding}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            ボード追加
          </Button>
        )}
        {todoData.length ? (
          <Button
            onClick={openModal}
            className="border-2 border-gray-500 hover:border-transparent hover:bg-gray-500 text-gray-500 hover:text-gray-100"
          >
            クリア
          </Button>
        ) : (
          <Button className="border-2 border-gray-500 text-gray-500 hover:text-gray-100 pointer-events-none opacity-50">
            クリア
          </Button>
        )}
        <Modalwindow
          modalIsOpen={isOpen}
          closeModal={closeModal}
          executeFunc={resetTodoData}
          modaltext="すべてのボードを削除しますか？"
        />
      </div>
      {isAdding && (
        <AddBoardForm addBoard={addBoard} finishAdding={finishAdding} />
      )}
      <div
        data-testid="boards-wrap"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4"
      >
        {todoData.map((board: Board) => (
          <TodoBoard
            key={board.id}
            board={board}
            deleteBoard={deleteBoard}
            addTask={addTask}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
