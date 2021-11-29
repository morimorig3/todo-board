import { useState, VFC } from 'react';
import { getUniqueStr } from 'components/utility';
import { Board } from 'types';

type Props = {
  finishAdding: () => void;
  addBoard: (newBoard: Board) => void;
};

const AddBoardForm: VFC<Props> = ({
  finishAdding = () => undefined,
  addBoard = () => undefined,
}) => {
  const [value, setValue] = useState('');
  const typoTask = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBoard: Board = {
      title: value,
      id: getUniqueStr(),
      todo: [],
    };
    addBoard(newBoard);
    finishAdding();
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <input
        className="block border w-full rounded-sm mb-2"
        type="text"
        value={value}
        onChange={typoTask}
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
