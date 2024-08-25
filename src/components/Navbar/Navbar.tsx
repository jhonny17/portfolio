import Link from 'next/link';
import { NavLink } from '../NavLink';

export type NavbarProps = {};

export function Navbar({}: NavbarProps) {
  return (
    <nav className="flex items-center min-h-14 px-2 md:px-8 shadow shadow-emerald-500 bg-neutral-900">
      <Link
        href="/"
        className="text-lg p-2 rounded text-emerald-500 hover:bg-neutral-800 font-mono flex align-middle select-none"
      >
        Portfolio
      </Link>
      <ul className="ml-auto flex gap-2">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}
