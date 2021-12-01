import { useState } from 'react';

const useInputText = (): {
  value: string;
  clearValue: () => void;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState('');
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const clearValue = () => setValue('');

  return { value, clearValue, handleOnChange };
};

export default useInputText;
