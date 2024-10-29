import Link from 'next/link';
import { ReactNode } from 'react';
import cx from 'classnames';

export type NavbarItemProps = {
  href: string;
  children: ReactNode;
};

export const NavLink = ({ href, children }: NavbarItemProps) => {
  return (
    <Link
      href={href}
      className={cx(
        'tracking-wider',
        'text-sm',
        'p-2',
        'rounded',
        'text-emerald-500',
        'hover:bg-neutral-800',
        'font-mono',
        'flex',
        'align-middle',
        'select-none',
      )}
    >
      {children}
    </Link>
  );
};
