import cx from 'classnames';

export type GlowBackdropProps = {
  className?: string;
};

export const GlowBackdrop = ({ className }: GlowBackdropProps) => {
  return (
    <div
      className={cx(
        'z-[-1]',
        'absolute',
        'inset-0',
        'blur-3xl',
        'bg-gradient-to-r',
        'from-emerald-900',
        'from-0%',
        'to-emerald-800',
        'to-100%',
        className,
      )}
    />
  );
};
