import Typography from 'components/Typography';

import { Container, DataCell, DataContainer, HeaderCell, HeaderContainer } from './styles';
import type { TableProps } from './types';

const Table = <T,>({ header, data, renderItem }: TableProps<T>) => (
  <Container>
    <HeaderContainer length={header.length}>
      {header.map((item) => (
        <HeaderCell {...item} key={item.name}>
          <Typography fontSize='s' fontWeight='bold'>
            {item.name}
          </Typography>
        </HeaderCell>
      ))}
    </HeaderContainer>
    <DataContainer>
      {data.map((item) => (
        <DataCell key={item.key}>{renderItem(item)}</DataCell>
      ))}
    </DataContainer>
  </Container>
);

export default Table;
