import { useState, VFC } from 'react';
import { getUniqueStr } from 'components/utility';

type Props = {
  id: string;
  finishAdding: () => void;
  addTask: (id: string, newTask: task) => void;
};

type task = {
  title: string;
  id: string;
  isCompleted: boolean;
};

const AddTaskForm: VFC<Props> = ({
  id,
  addTask = () => undefined,
  finishAdding = () => undefined,
}) => {
  const [value, setValue] = useState('');
  const typoTask = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      title: value,
      id: getUniqueStr(),
      isCompleted: false,
    };
    addTask(id, newTask);
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
        placeholder="ここにタスクを入力"
        autoComplete="off"
      />
      <button
        className="grid place-items-center w-full rounded-sm py-1 bg-green-500 hover:bg-green-600 text-white mb-2"
        type="submit"
      >
        追加
      </button>
      <button
        onClick={finishAdding}
        className="grid place-items-center w-full rounded-sm py-1 bg-red-500 hover:bg-red-600 text-white"
      >
        キャンセル
      </button>
    </form>
  );
};

export default AddTaskForm;
