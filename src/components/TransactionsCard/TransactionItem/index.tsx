import Chip from 'components/Chip';
import Dropdown from 'components/Dropdown';
import Typography from 'components/Typography';
import Image from 'next/image';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { statusFormatter } from 'utils/formatStatus';

import { ActionContainer, Col, Container, DropdownButton } from './styles';
import type { TransactionItemProps } from './types';

const TransactionItem = ({ item }: TransactionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSwitch = () => {
    setIsOpen((prevState) => !prevState);
  };

  const status = item.status === 1 ? 'text.success' : 'text.error';
  return (
    <Container>
      <Col>
        <Typography fontSize='s'>{item.date}</Typography>
      </Col>
      <Col>
        <Typography fontSize='s'>{item.key}</Typography>
      </Col>
      <Col>
        <Image src={`/assets/icons/${item.type}.svg`} alt={item.name} width={16} height={16} />
      </Col>
      <Col>
        <Typography fontSize='s'>{item.name}</Typography>
      </Col>
      <Col>
        <Typography fontSize='s'>${item.value}</Typography>
      </Col>
      <Col>
        <Typography fontSize='s'>{item.return}</Typography>
      </Col>
      <Col>
        <Typography fontSize='s'>
          <Chip variant={item.status === 0 ? 'gradient.primary.head' : status} width={91}>
            <Typography fontSize='s' fontWeight='bold' variant='contrast'>
              {statusFormatter(item.status)}
            </Typography>
          </Chip>
        </Typography>
      </Col>
      <Col>
        <DropdownButton onClick={onSwitch}>
          <BsThreeDots color='#858585' size={16} />
        </DropdownButton>
        <ActionContainer>
          <Dropdown
            data={[
              {
                name: 'View',
                onPress: () => onSwitch(),
              },
              {
                name: 'Delete',
                onPress: () => onSwitch(),
              },
            ]}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </ActionContainer>
      </Col>
    </Container>
  );
};

export default TransactionItem;
