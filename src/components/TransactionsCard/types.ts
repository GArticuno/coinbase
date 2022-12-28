export type TransactionDataProps = {
  date: string;
  key: string;
  type: 'bitcoin' | 'card';
  name: string;
  value: number;
  return: string;
  status: number;
};

export type OverviewProps = {
  isOverview?: boolean;
};
