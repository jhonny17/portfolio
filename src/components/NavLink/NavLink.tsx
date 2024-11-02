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
        'p-2',
        'rounded',
        'text-emerald-500',
        'hover:bg-neutral-900',
        'font-mono',
        'flex',
        'align-middle',
        'select-none',
        'transition-colors',
        'duration-300',
        'ease-in-out',
      )}
    >
      {children}
    </Link>
  );
};
