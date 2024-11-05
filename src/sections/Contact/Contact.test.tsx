import toast from 'react-hot-toast';
import { beforeEach, expect, it, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { Contact } from './Contact';
import { ContactMessage } from './types';
import { handleSubmit } from './handleSubmit';

const mockedHandleSubmit = vi.mocked(handleSubmit);
const mockedSuccessToast = vi.mocked(toast.success);

vi.mock('./handleSubmit');
vi.mock('@/utils/debounce', () => ({
  debounce: (fn: any) => fn,
}));

vi.mock('react-hot-toast', async () => {
  const library = await vi.importActual('react-hot-toast');
  return {
    ...library,
    default: {
      ...(library.default as any),
      success: vi.fn(),
    },
  };
});

const values: ContactMessage = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  message: 'Hello, World!',
};

beforeEach(() => {
  vi.clearAllMocks();
});

it('renders the contact form', () => {
  render(<Contact />);
  expect(screen.getByRole('form')).toBeInTheDocument();
});

it('submits the form', async () => {
  mockedHandleSubmit.mockResolvedValue({
    data: values,
    errors: {},
    message: 'Message sent successfully!',
  });

  render(<Contact />);

  const form = screen.getByRole('form');
  expect(form).toBeInTheDocument();

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  expect(nameInput).toBeInTheDocument();
  fireEvent.change(nameInput, { target: { value: values.name } });

  const emailInput = screen.getByRole('textbox', { name: /email/i });
  expect(emailInput).toBeInTheDocument();
  fireEvent.change(emailInput, { target: { value: values.email } });

  const messageInput = screen.getByRole('textbox', { name: /message/i });
  expect(messageInput).toBeInTheDocument();
  fireEvent.change(messageInput, { target: { value: values.message } });

  const submitButton = screen.getByRole('button', { name: /Send message/i });
  expect(submitButton).toBeInTheDocument();
  fireEvent.click(submitButton);

  const formData = new FormData();
  formData.set('name', values.name);
  formData.set('email', values.email);
  formData.set('message', values.message);

  expect(mockedHandleSubmit).toHaveBeenCalledTimes(1);
  expect(mockedHandleSubmit).toHaveBeenCalledWith(undefined, formData);

  await waitFor(() => {
    expect(mockedSuccessToast).toHaveBeenCalledTimes(1);
    expect(mockedSuccessToast).toHaveBeenCalledWith(
      'Message sent successfully!',
      {
        position: 'bottom-center',
        style: {
          background: '#0a0a0a',
          boxShadow: '0 0 3px #10b981',
          color: '#9ca3af',
        },
      },
    );
  });
});

it('displays form errors', async () => {
  const errors = {
    name: 'Name is required',
    email: 'Email is required',
    message: 'Message is required',
  };

  mockedHandleSubmit.mockResolvedValue({ data: values, errors });

  render(<Contact />);

  const submitButton = screen.getByRole('button', { name: /Send message/i });
  expect(submitButton).toBeInTheDocument();
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText(errors.name)).toBeInTheDocument();
    expect(screen.getByText(errors.email)).toBeInTheDocument();
    expect(screen.getByText(errors.message)).toBeInTheDocument();
  });
});
