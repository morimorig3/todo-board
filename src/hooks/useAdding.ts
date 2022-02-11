import { useState } from 'react';

const useAdding = () => {
  const [isAdding, setIsAdding] = useState(false);

  const startAdding = () => setIsAdding(true);
  const finishAdding = () => setIsAdding(false);

  return [isAdding, startAdding, finishAdding] as const;
};

export default useAdding;
