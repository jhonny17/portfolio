import { ReactNode } from 'react';
import cx from 'classnames';

export type CardProps = {
  children?: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cx(
        'p-4',
        'md:p-8',
        'shadow-lg',
        'rounded-lg',
        'backdrop-sepia-0',
        'backdrop-blur-xs',
        'bg-slate-950/40',
        className,
      )}
    >
      {children}
    </div>
  );
};
