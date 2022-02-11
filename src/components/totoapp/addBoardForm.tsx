import { VFC, ChangeEvent, FormEvent } from 'react';
import useInputFocus from 'hooks/useInputFocus';

type Props = {
  value: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const AddBoardForm: VFC<Props> = ({
  value = '',
  onSubmit = () => undefined,
  onChange = () => undefined,
}) => {
  const inputRef = useInputFocus();

  return (
    <form className="my-2" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="block border w-full rounded-sm mb-2"
        type="text"
        value={value}
        onChange={onChange}
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
