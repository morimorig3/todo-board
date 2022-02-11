import { VFC } from 'react';
import { v4 } from 'uuid';
import useInputText from 'hooks/useInputText';
import { useAppDispatch } from 'hooks/redux-hooks';
import { Board } from 'types';
import { addBoard } from 'components/totoapp/todoReducer';
import AddBoardForm from 'components/totoapp/addBoardForm';

type Props = {
  finishAdding: () => void;
};

const EnhancedAddBoardForm: VFC<Props> = ({ finishAdding }) => {
  const dispatch = useAppDispatch();
  const { value, onChange } = useInputText();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBoard: Board = {
      title: value,
      id: v4(),
      todo: [],
    };
    dispatch(addBoard(newBoard));
    finishAdding();
  };

  return <AddBoardForm value={value} onChange={onChange} onSubmit={onSubmit} />;
};

export default EnhancedAddBoardForm;
