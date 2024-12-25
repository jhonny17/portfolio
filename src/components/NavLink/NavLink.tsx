'use client';
import cx from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export type NavbarItemProps = {
  href: string;
  children: ReactNode;
};

export const NavLink = ({ href, children }: NavbarItemProps) => {
  const currentPath = usePathname();

  const isCurrentPath = currentPath === href;

  return (
    <Link
      href={href}
      className={cx(
        'p-2',
        'flex',
        'rounded',
        'font-mono',
        'ease-in-out',
        'select-none',
        'align-middle',
        'duration-300',
        'transition-colors',
        'underline-offset-4',
        'focus:outline-none',
        'focus:text-emerald-500',
        'hover:text-emerald-500',
        {
          underline: isCurrentPath,
          'text-emerald-500': isCurrentPath,
          'text-emerald-600': !isCurrentPath,
        },
      )}
    >
      {children}
    </Link>
  );
};
