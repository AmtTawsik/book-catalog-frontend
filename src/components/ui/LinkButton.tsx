import { ReactNode } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

type ILinkButtonProps = {
  children: ReactNode;
  to: string;
  type?: 'yellow';
};

function LinkButton({ children, to, type }: ILinkButtonProps) {
  const navigate: NavigateFunction = useNavigate();
  let className;
  if (type === 'yellow') {
    className =
      'text-md font-medium text-stone-800 hover:text-stone-900 hover:underline';
  } else {
    className = 'text-md text-blue-500 hover:text-blue-600 hover:underline';
  }

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
