import { VFC, FormEvent, ChangeEvent } from 'react';
import useInputFocus from 'hooks/useInputFocus';

type Props = {
  value: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const AddTaskForm: VFC<Props> = ({
  value = '',
  onSubmit = () => undefined,
  onChange = () => undefined,
}) => {
  const inputRef = useInputFocus();

  return (
    <form className="flex my-2 rounded-sm" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="block border w-full leading-loose"
        type="text"
        value={value}
        onChange={onChange}
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
