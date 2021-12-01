import { useState } from 'react';

const useInputText = () => {
  const [value, setValue] = useState('');
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const clearValue = () => setValue('');

  return { value, clearValue, handleOnChange };
};

export default useInputText;
