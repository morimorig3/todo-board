import { useState } from 'react';

const useInputText = (): {
  value: string;
  clearValue: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const clearValue = () => setValue('');

  return { value, clearValue, onChange };
};

export default useInputText;
