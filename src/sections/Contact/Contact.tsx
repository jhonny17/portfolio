'use client';
import cx from 'classnames';
import { useActionState } from 'react';

import { Card } from '@/components/ui/Card';
import { GlowBackdrop } from '@/components/ui/GlowBackdrop';

import { handleSubmit } from './handleSubmit';

export const Contact = () => {
  const [formData, action, isPending] = useActionState(handleSubmit, undefined);

  const { data, errors } = formData ?? {};
  const { name, email, message } = data ?? {};
  console.log({ isPending });
  return (
    <section
      className={cx(
        'relative',
        'p-4',
        'md:p-0',
        'py-4',
        'md:py-8',
        'h-5/6',
        'md:h-auto',
      )}
    >
      <Card
        className={cx(
          'grid',
          'gap-4',
          'md:gap-8',
          'mx-auto',
          'sm:w-[390px]',
          'md:w-[450px]',
        )}
      >
        <h2 className={cx('text-2xl', 'font-logo', 'text-center')}>
          Contact me
        </h2>

        <form
          noValidate
          name="contact"
          action={action}
          className={cx('grid', 'gap-4')}
        >
          <div className={cx('grid', 'gap-1')}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              required
              aria-labelledby="error-name"
            />
            {errors?.name && (
              <span id="error-name" className={cx('text-red-500')}>
                {errors.name}
              </span>
            )}
          </div>

          <div className={cx('grid', 'gap-1')}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email}
              aria-labelledby="error-email"
              required
            />
            {errors?.email && (
              <span id="error-email" className={cx('text-red-500')}>
                {errors.email}
              </span>
            )}
          </div>

          <div className={cx('grid', 'gap-1')}>
            <label htmlFor="message">Message</label>
            <textarea
              rows={6}
              required
              defaultValue={message}
              id="message"
              name="message"
              className="resize-none"
              aria-labelledby="error-message"
            />
            {errors?.message && (
              <span id="error-message" className={cx('text-red-500')}>
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" disabled={isPending}>
            Send message
          </button>
        </form>
      </Card>

      <GlowBackdrop
        className={cx(
          'mt-0',
          'mb-auto',
          'mx-auto',
          'w-full',
          'md:w-4/5',
          'h-full',
          'rounded-b-full',
          'md:rounded-full',
        )}
      />
    </section>
  );
};
