import { VFC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: VFC<Props> = ({
  children = 'ボタン',
  onClick = () => undefined,
  className = '',
}) => (
  <button
    className={`transition-colors font-bold py-2 px-4 rounded ${className}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default Button;
