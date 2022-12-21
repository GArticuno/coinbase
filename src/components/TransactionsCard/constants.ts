import type { HeaderTableProps } from 'components/Table/types';

import type { TransactionDataProps } from './types';

export const header: HeaderTableProps[] = [
  {
    name: 'Date',
    flex: 1,
  },
  {
    name: 'Transaction ID',
    flex: 1,
  },
  {
    name: 'Type',
    flex: 1,
  },
  {
    name: 'Name',
    flex: 1,
  },
  {
    name: 'Value',
    flex: 1,
  },
  {
    name: 'Return',
    flex: 1,
  },
  {
    name: 'Status',
    flex: 1,
  },
  {
    name: 'Action',
    flex: 1,
  },
];

export const data: TransactionDataProps[] = [
  {
    date: '14/10/2022',
    key: '12345678',
    name: 'Bitcoin',
    return: '#18000',
    status: 1,
    type: 'bitcoin',
    value: 100,
  },
  {
    date: '14/11/2022',
    key: '12345679',
    name: 'Amazon',
    return: '#18000',
    status: 2,
    type: 'card',
    value: 100,
  },
  {
    date: '13/04/2022',
    key: '125645678',
    name: 'Bitcoin',
    return: '#18000',
    status: 0,
    type: 'bitcoin',
    value: 140.54,
  },
  {
    date: '10/11/2022',
    key: '12555679',
    name: 'Amazon',
    return: '#18000',
    status: 1,
    type: 'card',
    value: 156.98,
  },
];
