import type { GradientProps, TextVariantProps } from 'styled-components';

export type ChipLayoutProps = {
  variantColor?: keyof TextVariantProps;
  variantGradient?: keyof GradientProps;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  onClick?: () => void;
  paddingVertical?: number;
  paddingHorizontal?: number;
  maxWidth?: number;
};

export type ChipProps = {
  children: React.ReactNode | React.ReactNode[];
} & ChipLayoutProps;
