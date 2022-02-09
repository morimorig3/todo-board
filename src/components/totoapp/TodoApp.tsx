import { VFC, useEffect } from 'react';
import Button from 'components/Button';
import TodoBoard from 'components/totoapp/todoBoard';
import AddBoardForm from 'components/totoapp/addBoardForm';
import Modalwindow from 'components/totoapp/modalWindow';
import useModal from 'hooks/useModal';
import useAdding from 'hooks/useAdding';
import { useSelector } from 'react-redux';
import { resetAllBoard } from 'components/totoapp/todoReducer';
import { initialState } from 'types';

const TodoApp: VFC = () => {
  const todoData = useSelector((state: initialState) => state.todoBoards);

  const [isOpen, openModal, closeModal] = useModal();
  const [isAdding, startAdding, finishAdding] = useAdding();

  useEffect(
    () => window.localStorage.setItem('todo', JSON.stringify(todoData)),
    [todoData],
  );

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
          executeFunc={resetAllBoard}
          modaltext="すべてのボードを削除しますか？"
        />
      </div>
      {isAdding && <AddBoardForm finishAdding={finishAdding} />}
      <div
        data-testid="boards-wrap"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4"
      >
        {todoData.map(({ id }) => (
          <TodoBoard key={id} boardId={id} />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
