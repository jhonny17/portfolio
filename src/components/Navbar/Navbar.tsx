import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import { NavLink } from '../NavLink';
import logo from '@/assets/images/logo.webp';

export type NavbarProps = {};

export function Navbar({}: NavbarProps) {
  return (
    <nav className={cx('w-full', 'max-w-8xl', 'mx-auto')}>
      <div
        className={cx(
          'flex',
          'items-center',
          'min-h-14',
          'px-2',
          'md:px-8',
          '2xl:px-0',
        )}
      >
        <Link
          href="/"
          className={cx(
            'flex',
            'gap-2',
            'items-center',
            'p-2',
            'rounded',
            'text-lg',
            'text-emerald-500',
            'select-none',
            'font-logo',
            'font-semibold',
            'text-xl',
          )}
        >
          JVA
          <Image src={logo} alt="JVA" width={18} height={18} />
        </Link>
        <ul className={cx('ml-auto', 'flex', 'gap-2')}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
