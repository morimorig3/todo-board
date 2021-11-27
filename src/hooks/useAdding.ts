import { useState } from 'react';

const useAdding = (): [boolean, () => void, () => void] => {
  const [isAdding, setIsAdding] = useState(false);

  const startAdding = () => setIsAdding(true);
  const finishAdding = () => setIsAdding(false);

  return [isAdding, startAdding, finishAdding];
};

export default useAdding;
