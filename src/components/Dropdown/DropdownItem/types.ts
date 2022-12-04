export type DropdownItemProps = {
  item: {
    name: string;
    onPress: () => void;
    disabled?: boolean;
  };
  index: number;
  length: number;
};
