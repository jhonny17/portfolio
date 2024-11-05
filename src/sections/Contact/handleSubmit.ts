import { isEmailValid } from '@/utils/isEmailValid';

import { ContactMessage, ContactMessageForm } from './types';

export const handleSubmit = async (_: unknown, formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  let hasErrors = false;

  const data: ContactMessage = { name, email, message };
  const errors: ContactMessageForm['errors'] = {};

  if (!name) {
    hasErrors = true;
    errors.name = 'Name is required';
  }

  if (!email) {
    hasErrors = true;
    errors.email = 'Email is required';
  } else if (!isEmailValid(email)) {
    hasErrors = true;
    errors.email = 'Email is invalid';
  }

  if (!message) {
    hasErrors = true;
    errors.message = 'Message is required';
  }

  const form: ContactMessageForm = { data, errors };

  try {
    if (!hasErrors) {
      await fetch('https://formspree.io/f/mwpklapk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      form.message = 'Message sent successfully!';
    }
  } catch (error) {
    console.error(error);
  } finally {
    return form;
  }
};
