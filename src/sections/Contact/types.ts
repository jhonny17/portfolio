export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export type ContactMessageForm = {
  data: ContactMessage;
  message?: string;
  errors: Partial<Record<keyof ContactMessage, string>>;
};
