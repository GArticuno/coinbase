import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';

import Box from '../Box';
import Dropdown from '../Dropdown';
import { DropdownButton, DropdownContainer } from './styles';
import { CardProps } from './types';

const Card = ({ children }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSwitch = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
      position='relative'
      gap={16}
      padding={25}
      paddingRight={41}
    >
      <DropdownContainer>
        <DropdownButton onClick={onSwitch}>
          <BsThreeDots color='#858585' size={16} />
        </DropdownButton>
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
      </DropdownContainer>
      {children}
    </Box>
  );
};

export default Card;
