import { useEffect, useRef } from 'react';

const useInputFocus = (): React.RefObject<HTMLInputElement> => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return inputRef;
};

export default useInputFocus;
