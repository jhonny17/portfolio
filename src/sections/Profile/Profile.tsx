import cx from 'classnames';
import Image from 'next/image';

import profilePicture from '@/assets/images/profile_photo_gray.webp';

import { Card } from '@/components/ui/Card';
import { GlowBackdrop } from '@/components/ui/GlowBackdrop';

export const Profile = () => {
  return (
    <section
      className={cx(
        'grid',
        'sm:grid-cols-[1fr,auto]',
        'lg:grid-cols-[1fr,1fr]',
        'items-center',
        'w-full',
        'relative',
        'overflow-hidden',
      )}
    >
      <GlowBackdrop
        className={cx(
          'h-full',
          'sm:w-7/12',
          'mt-auto',
          'mx-auto',
          'sm:ml-0',
          'sm:mr-auto',
          'sm:my-auto',
          'sm:rounded-r-full',
        )}
      />

      <div className={cx('p-8', 'order-2', 'sm:order-1')}>
        <Card className={cx('grid', 'mx-auto', 'sm:w-[390px]', 'md:w-[450px]')}>
          <div className={cx('mb-2', 'text-center', '*:text-gray-400')}>
            <h2 className={cx('font-logo', 'text-2xl', 'mb-1')}>
              Jhonny Vargas Arias
            </h2>
            <div className="text-sm">Software Engineer</div>
          </div>
        </Card>
      </div>

      <div
        className={cx(
          'order-1',
          'sm:order-2',
          'bg-neutral-950',
          'sm:bg-transparent',
        )}
      >
        <Image
          src={profilePicture}
          alt="Jhonny Vargas Arias"
          width={300}
          height={300}
          decoding="async"
          className={cx(
            'aspect-square',
            'ml-auto',
            'mt-8',
            'w-[180px]',
            'md:w-[300px]',
          )}
        />
      </div>
    </section>
  );
};
