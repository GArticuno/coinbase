import { MouseEventHandler } from 'react';
import { TextFontSizeProps, TextFontWeightProps, TextVariantProps } from 'styled-components';

export type TypographyLayoutProps = {
  variant?: keyof TextVariantProps;
  fontSize?: keyof TextFontSizeProps;
  fontWeight?: keyof TextFontWeightProps;
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
};

export type TypographyProps = {
  children?: React.ReactNode | React.ReactNode[];
} & TypographyLayoutProps;
