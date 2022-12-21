/* eslint-disable no-unused-vars */
export type HeaderTableProps = {
  name: string;
  flex: number;
};

type Data<T> = {
  key: string;
} & T;

export type TableProps<T> = {
  header: HeaderTableProps[];
  data: Data<T>[];
  renderItem: (item: T) => React.ReactNode;
};
