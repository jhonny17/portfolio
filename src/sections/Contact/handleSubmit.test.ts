import { afterAll, beforeAll, beforeEach, expect, it, vi } from 'vitest';

import { handleSubmit } from './handleSubmit';
import { ContactMessage } from './types';

const fetchMock = vi.fn();
const originalFetch = global.fetch;

const originalConsoleError = console.error;
const mockedConsoleError = vi.fn();

const values: ContactMessage = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  message: 'Hello, World!',
};

beforeAll(() => {
  global.fetch = fetchMock;
  console.error = mockedConsoleError;
});

afterAll(() => {
  global.fetch = originalFetch;
  console.error = originalConsoleError;
});

beforeEach(() => {
  vi.clearAllMocks();
});

it('returns form data with errors when name is missing', async () => {
  const formData = new FormData();
  formData.set('email', values.email);
  formData.set('message', values.message);

  const result = await handleSubmit(undefined, formData);

  expect(result).toEqual({
    data: {
      ...values,
      name: null,
    },
    errors: {
      name: 'Name is required',
    },
  });
});

it('returns form data with errors when email is missing', async () => {
  const formData = new FormData();
  formData.set('name', values.name);
  formData.set('message', values.message);

  const result = await handleSubmit(undefined, formData);

  expect(result).toEqual({
    data: {
      ...values,
      email: null,
    },
    errors: {
      email: 'Email is required',
    },
  });
});

it('returns form data with errors when email is invalid', async () => {
  const invalidEmail = 'invalid-email';

  const formData = new FormData();
  formData.set('name', values.name);
  formData.set('email', invalidEmail);
  formData.set('message', values.message);

  const result = await handleSubmit(undefined, formData);

  expect(fetchMock).not.toHaveBeenCalled();

  expect(result).toEqual({
    data: {
      ...values,
      email: invalidEmail,
    },
    errors: {
      email: 'Email is invalid',
    },
  });
});

it('returns form data with errors when message is missing', async () => {
  const formData = new FormData();
  formData.set('name', values.name);
  formData.set('email', values.email);

  const result = await handleSubmit(undefined, formData);

  expect(fetchMock).not.toHaveBeenCalled();

  expect(result).toEqual({
    data: {
      ...values,
      message: null,
    },
    errors: {
      message: 'Message is required',
    },
  });
});

it('returns form data with errors when all fields are missing', async () => {
  const formData = new FormData();

  const result = await handleSubmit(undefined, formData);

  expect(fetchMock).not.toHaveBeenCalled();

  expect(result).toEqual({
    data: {
      name: null,
      email: null,
      message: null,
    },
    errors: {
      name: 'Name is required',
      email: 'Email is required',
      message: 'Message is required',
    },
  });
});

it('clears the form data and sets a message when all fields are valid', async () => {
  const formData = new FormData();
  formData.set('name', values.name);
  formData.set('email', values.email);
  formData.set('message', values.message);

  const result = await handleSubmit(undefined, formData);

  expect(result).toEqual({
    data: { name: '', email: '', message: '' },
    errors: {},
    message: 'Message sent successfully!',
  });
});

it('calls fetch with the correct arguments when all fields are valid', async () => {
  const formData = new FormData();
  formData.set('name', values.name);
  formData.set('email', values.email);
  formData.set('message', values.message);

  await handleSubmit(undefined, formData);

  expect(fetchMock).toHaveBeenCalledWith('https://formspree.io/f/mwpklapk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
});

it('logs errors when fetch fails', async () => {
  const error = new Error('Failed to send message');

  fetchMock.mockRejectedValue(error);

  const formData = new FormData();
  formData.set('name', values.name);
  formData.set('email', values.email);
  formData.set('message', values.message);

  await handleSubmit(undefined, formData);

  expect(mockedConsoleError).toHaveBeenCalledWith(error);
});
