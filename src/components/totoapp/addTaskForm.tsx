import { VFC } from 'react';
import { v4 } from 'uuid';
import useInputFocus from 'hooks/useInputFocus';
import useInputText from 'hooks/useInputText';
import { useAppDispatch } from 'hooks/redux-hooks';
import { addTask } from 'components/totoapp/todoReducer';

type Props = {
  boardId: string;
};

const AddTaskForm: VFC<Props> = ({ boardId = '' }) => {
  const inputRef = useInputFocus();
  const { value, clearValue, handleOnChange } = useInputText();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      title: value,
      id: v4(),
      isCompleted: false,
    };
    const payload = {
      newTask,
      boardId,
    };
    dispatch(addTask(payload));
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
