import { VFC } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { FaTimes } from 'react-icons/fa';
import EnhancedAddTaskForm from 'containers/todoapp/addTaskForm';
import TodoList from 'components/totoapp/todoList';
import Modalwindow from 'components/totoapp/modalWindow';
import { Board } from 'types';

type Props = {
  board: Board;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  deleteThisBoard: () => AnyAction;
};

const inititalBoard = {
  title: 'title',
  id: 'id',
  todo: [],
};

const TodoBoard: VFC<Props> = ({
  board = inititalBoard,
  isOpen = false,
  openModal = () => undefined,
  closeModal = () => undefined,
  deleteThisBoard,
}) => (
  <div className="bg-white my-4 shadow-md">
    <div className="flex justify-between items-center py-2 px-4 bg-gray-500 text-white">
      <h3 className="font-bold text-lg">{board.title}</h3>
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
        executeFunc={deleteThisBoard}
        modaltext="このボードを削除しますか"
      />
    </div>
    <div className="px-2">
      <TodoList boardId={board.id} todo={board.todo} />
      <EnhancedAddTaskForm boardId={board.id} />
    </div>
  </div>
);

export default TodoBoard;
