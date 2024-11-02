import { default as socialsJson } from './socials.json';
import { Social } from './types';

export const getSocials = (): Social[] => {
  return socialsJson.socials as Social[];
};
