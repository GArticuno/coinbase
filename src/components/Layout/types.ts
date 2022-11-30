export type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[];
  page: string;
};

export type MenuProps = {
  id: string;
  name: string;
  image: {
    default: string;
    selected: string;
    width: number;
    height: number;
  };
};
