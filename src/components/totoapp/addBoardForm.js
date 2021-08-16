import { useState } from 'react';
import { getUniqueStr } from 'components/utility';

const AddBoardForm = ({
  setTodoData = () => undefined,
  setIsAdding = () => undefined,
}) => {
  const [value, setValue] = useState('');
  const typoTask = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoData((todoData) => [
      ...todoData,
      {
        title: value,
        id: getUniqueStr(),
        todo: [],
      },
    ]);
    setIsAdding(false);
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
