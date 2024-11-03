import { default as navItemsJson } from './navItems.json';
import { NavItem } from './types';

export const getNavItems = (): NavItem[] => {
  return navItemsJson.navItems as NavItem[];
};
