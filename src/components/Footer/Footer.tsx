import cx from 'classnames';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className={cx('w-full', 'h-20', 'bg-neutral-950', 'p-2', 'md:px-8')}
    >
      <div
        className={cx(
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'h-full',
          'text-sm',
        )}
      >
        <p>Jhonny Vargas Arias © {year}</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};
