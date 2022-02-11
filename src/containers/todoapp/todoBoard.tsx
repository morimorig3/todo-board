import { VFC } from 'react';
import TodoBoard from 'components/totoapp/todoBoard';
import { useAppSelector } from 'hooks/redux-hooks';
import { Board } from 'types';
import useModal from 'hooks/useModal';
import { deleteBoard } from 'components/totoapp/todoReducer';

type Props = {
  boardId: string;
};

const EnhancedTodoBoard: VFC<Props> = ({ boardId }) => {
  const todoBoards = useAppSelector((state) => state.todoBoards);
  const board = todoBoards.find(({ id }) => id === boardId) as Board;
  const [isOpen, openModal, closeModal] = useModal();
  const deleteThisBoard = () => deleteBoard(board.id);

  return (
    <TodoBoard
      board={board}
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
      deleteThisBoard={deleteThisBoard}
    />
  );
};

export default EnhancedTodoBoard;
