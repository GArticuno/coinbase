export type InputWrapperProps = {
  variant?: 'primary' | 'secondary';
};

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
} & InputWrapperProps;
