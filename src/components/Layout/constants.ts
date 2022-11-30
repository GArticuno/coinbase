import type { MenuProps } from './types';

export const menu: MenuProps[] = [
  {
    id: 'overview',
    name: 'Overview',
    image: {
      default: '/assets/icons/overview.svg',
      selected: '/assets/icons/overview-selected.svg',
      width: 15,
      height: 10,
    },
  },
  {
    id: 'trade',
    name: 'Trade',
    image: {
      default: '/assets/icons/trade.svg',
      selected: '/assets/icons/trade-selected.svg',
      width: 14.65,
      height: 13.13,
    },
  },
  {
    id: 'wallet',
    name: 'Wallet',
    image: {
      default: '/assets/icons/wallet.svg',
      selected: '/assets/icons/wallet-selected.svg',
      width: 15.33,
      height: 11.04,
    },
  },
  {
    id: 'transactions',
    name: 'Transactions',
    image: {
      default: '/assets/icons/transactions.svg',
      selected: '/assets/icons/transactions-selected.svg',
      width: 16,
      height: 16,
    },
  },
  {
    id: 'statistics',
    name: 'Statistics',
    image: {
      default: '/assets/icons/statistics.svg',
      selected: '/assets/icons/statistics-selected.svg',
      width: 10.3,
      height: 17.33,
    },
  },
  {
    id: 'settings',
    name: 'Settings',
    image: {
      default: '/assets/icons/settings.svg',
      selected: '/assets/icons/settings-selected.svg',
      width: 16,
      height: 13.76,
    },
  },
];
