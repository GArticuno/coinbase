import { Dispatch, SetStateAction } from 'react';

export type DropdownProps = {
  data?: {
    name: string;
    onPress: () => void;
    disabled?: boolean;
  }[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
};
