import { useState } from 'react';
import { getUniqueStr } from 'components/utility';

const AddTaskForm = ({
  id,
  setTodoData = () => undefined,
  setIsTyping = () => undefined,
}) => {
  const [value, setValue] = useState('');
  const typoTask = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoData((todoData) => {
      const newTodoData = [...todoData];
      const board = todoData.filter((board) => board.id === id)[0];
      const index = todoData.findIndex((board) => board.id === id);
      board.todo = [
        ...board.todo,
        { id: getUniqueStr(), title: value, isCompleted: false },
      ];
      newTodoData.splice(index, 1, board);
      return newTodoData;
    });
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

export default AddTaskForm;
