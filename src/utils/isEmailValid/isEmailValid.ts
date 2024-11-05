export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const doubleDotRegex = /\.\./;

  return emailRegex.test(email) && !doubleDotRegex.test(email);
};
