import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconProps,
  Icon,
} from '@tabler/icons-react';
import cx from 'classnames';

import { getSocials } from '@/data/socials';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

const ICONS = {
  github: IconBrandGithub,
  discord: IconBrandDiscord,
  linkedin: IconBrandLinkedin,
} as Record<string, ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>>;

export const Social = () => {
  const socials = getSocials();

  return (
    <section className={cx('w-full', 'bg-emerald-950')}>
      <h2 className="sr-only">Socials</h2>
      <div className={cx('flex', 'justify-center')}>
        {socials.map(({ id, icon, name, url }) => {
          const Icon = ICONS[icon];

          return (
            <a
              key={id}
              href={url}
              target="_blank"
              title={name}
              rel="noopener noreferrer"
              className={cx(
                'flex',
                'items-center',
                'justify-center',
                'w-12',
                'h-12',
                'hover:bg-neutral-900',
                'transition-colors',
                'duration-300',
                'ease-in-out',
              )}
            >
              <span className="sr-only">{name}</span>
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
};
