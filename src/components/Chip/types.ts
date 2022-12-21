import type { ColorsProps } from 'styled-components';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType]: ObjectType[Key] extends object
    ? `${string & Key}.${string & NestedKeyOf<ObjectType[Key]>}`
    : Key;
}[keyof ObjectType];

export type ChipLayoutProps = {
  variant: NestedKeyOf<ColorsProps>;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  onClick?: () => void;
  paddingVertical?: number;
  paddingHorizontal?: number;
  maxWidth?: number;
  width?: number;
};

export type ChipProps = {
  children: React.ReactNode | React.ReactNode[];
} & ChipLayoutProps;
