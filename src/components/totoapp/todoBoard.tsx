import { VFC } from 'react';
import { FaTimes } from 'react-icons/fa';
import AddTaskForm from 'components/totoapp/addTaskForm';
import TodoList from 'components/totoapp/todoList';
import Modalwindow from 'components/totoapp/modalWindow';
import useModal from 'hooks/useModal';
import { useSelector } from 'react-redux';
import { deleteBoard } from 'components/totoapp/todoReducer';
import { Board, initialState } from 'types';

type Props = {
  boardId: string;
};

const TodoBoard: VFC<Props> = ({ boardId = '' }) => {
  const board = useSelector((state: initialState) => {
    const { todoBoards } = state;

    return todoBoards.find(({ id }) => id === boardId);
  }) as Board;

  const [isOpen, openModal, closeModal] = useModal();

  const { title, todo, id } = board;

  return (
    <div className="bg-white my-4 shadow-md">
      <div className="flex justify-between items-center py-2 px-4 bg-gray-500 text-white">
        <h3 className="font-bold text-lg">{title}</h3>
        <button
          data-testid="delete-button"
          onClick={openModal}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
          type="button"
        >
          <FaTimes />
        </button>
        <Modalwindow
          modalIsOpen={isOpen}
          closeModal={closeModal}
          executeFunc={() => deleteBoard(id)}
          modaltext="このボードを削除しますか"
        />
      </div>
      <div className="px-2">
        <TodoList boardId={id} todo={todo} />
        <AddTaskForm boardId={boardId} />
      </div>
    </div>
  );
};

export default TodoBoard;
