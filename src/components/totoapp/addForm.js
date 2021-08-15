import { useState } from 'react';

const AddForm = ({
  setTodoList = () => undefined,
  setIsTyping = () => undefined,
}) => {
  const [value, setValue] = useState('');
  const typoTask = (e) => setValue(e.target.value);

  const getUniqueStr = () =>
    new Date().getTime().toString(16) +
    Math.floor(10000 * Math.random()).toString(16);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((todoList) => [
      ...todoList,
      { id: getUniqueStr(), title: value, isCompleted: false },
    ]);
    setIsTyping(false);
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <input
        className="block border w-full rounded-sm mb-2"
        type="text"
        value={value}
        onChange={typoTask}
        required
        placeholder="ここにタスクを入力"
        autoComplete="off"
      />
      <button
        className="grid place-items-center w-full rounded-sm py-1 bg-green-500 hover:bg-green-600 text-white"
        type="submit"
      >
        追加
      </button>
    </form>
  );
};

export default AddForm;
