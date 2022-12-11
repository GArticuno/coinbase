export type IconLayoutProps = {
  size: number;
  variant?: 'default' | 'contrast';
  onClick?: () => void;
};

export type IconProps = {
  children: React.ReactNode;
} & IconLayoutProps;
