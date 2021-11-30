import { useEffect, useRef } from 'react';

const useInputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return inputRef;
};

export default useInputFocus;
