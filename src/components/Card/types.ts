import { BoxLayoutProps } from 'components/Box/types';

export type CardProps = {
  children: React.ReactNode | React.ReactNode[];
  hasOptions?: boolean;
} & BoxLayoutProps;
