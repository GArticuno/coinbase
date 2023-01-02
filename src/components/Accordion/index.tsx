import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useTheme } from 'styled-components';

import { Container, DropButton, Header } from './styles';
import { AccordionProps } from './types';

const Accordion = ({ header, children }: AccordionProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const onSwitch = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <Header>
        {header}
        <DropButton onClick={onSwitch}>
          {isOpen ? (
            <IoIosArrowUp color={theme.colors.text.primary} size={16} />
          ) : (
            <IoIosArrowDown color={theme.colors.text.primary} size={16} />
          )}
        </DropButton>
      </Header>
      {isOpen && children}
    </Container>
  );
};

export default Accordion;
