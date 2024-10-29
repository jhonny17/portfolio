import Link from 'next/link';
import cx from 'classnames';

import { NavLink } from '../NavLink';

export type NavbarProps = {};

export function Navbar({}: NavbarProps) {
  return (
    <nav
      className={cx(
        'flex',
        'items-center',
        'min-h-14',
        'px-2',
        'md:px-8',
        'shadow',
        'shadow-emerald-500',
      )}
    >
      <Link
        href="/"
        className={cx(
          'flex',
          'items-center',
          'p-2',
          'rounded',
          'text-lg',
          'text-emerald-500',
          'hover:bg-neutral-900',
          'select-none',
        )}
      >
        Portfolio
      </Link>
      <ul className={cx('ml-auto', 'flex', 'gap-2')}>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}
