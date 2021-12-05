import { VFC } from 'react';
import { v4 } from 'uuid';
import { Board } from 'types';
import useInputFocus from 'hooks/useInputFocus';
import useInputText from 'hooks/useInputText';

type Props = {
  finishAdding: () => void;
  addBoard: (newBoard: Board) => void;
};

const AddBoardForm: VFC<Props> = ({
  finishAdding = () => undefined,
  addBoard = () => undefined,
}) => {
  const inputRef = useInputFocus();
  const { value, handleOnChange } = useInputText();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBoard: Board = {
      title: value,
      id: v4(),
      todo: [],
    };
    addBoard(newBoard);
    finishAdding();
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="block border w-full rounded-sm mb-2"
        type="text"
        value={value}
        onChange={handleOnChange}
        required
        placeholder="ここにボードタイトルを入力"
        autoComplete="off"
      />
      <button
        className="grid place-items-center w-full rounded-sm py-1 bg-green-500 hover:bg-green-600 text-white"
        type="submit"
      >
        ボードを追加
      </button>
    </form>
  );
};

export default AddBoardForm;
