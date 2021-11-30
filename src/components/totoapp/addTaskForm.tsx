import { VFC } from 'react';
import { uuid } from 'uuidv4';
import { Task } from 'types';
import useInputFocus from 'hooks/useInputFocus';
import useInputText from 'hooks/useInputText';

type Props = {
  id: string;
  addTask: (id: string, newTask: Task) => void;
};

const AddTaskForm: VFC<Props> = ({ id, addTask = () => undefined }) => {
  const inputRef = useInputFocus();
  const { value, clearValue, handleOnChange } = useInputText();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      title: value,
      id: uuid(),
      isCompleted: false,
    };
    addTask(id, newTask);
    clearValue();
  };

  return (
    <form className="flex my-2 rounded-sm" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="block border w-full leading-loose"
        type="text"
        value={value}
        onChange={handleOnChange}
        required
        placeholder="ここにタスクを入力"
        autoComplete="off"
      />
      {value ? (
        <button
          className="grid place-items-center px-2 bg-green-500 hover:bg-green-600 text-white whitespace-nowrap"
          type="submit"
        >
          追加
        </button>
      ) : (
        <button
          className="grid place-items-center px-2 bg-green-500 text-white whitespace-nowrap opacity-50 pointer-events-none"
          type="submit"
        >
          追加
        </button>
      )}
    </form>
  );
};

export default AddTaskForm;
