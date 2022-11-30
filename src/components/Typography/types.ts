export type TypographyLayoutProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'white';
  fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
};

export type TypographyProps = {
  children?: React.ReactNode | React.ReactNode[];
} & TypographyLayoutProps;
