import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import logo from '@/assets/images/logo.webp';
import { getNavItems } from '@/data/navItems/getNavItems';

import { NavLink } from '../NavLink';

export type NavbarProps = {};

export function Navbar({}: NavbarProps) {
  const navItems = getNavItems();

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
            'focus:outline-none',
            'focus:text-emerald-500',
            'hover:text-emerald-500',
          )}
        >
          JVA
          <Image
            src={logo}
            width={16}
            height={16}
            alt="JVA logo"
            decoding="async"
            className="aspect-square"
          />
        </Link>

        <ul className={cx('ml-auto', 'flex', 'gap-2')}>
          {navItems.map(({ id, url, name }) => (
            <li key={id}>
              <NavLink href={url}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
