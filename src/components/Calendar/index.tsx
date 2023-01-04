import Chip from 'components/Chip';
import Typography from 'components/Typography';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { monthNames } from './constants';
import { CalendarButton, CalendarContainer, Container, DropdownContainer } from './styles';

const CalendarBulk = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onSwitch = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Container>
      <CalendarButton onClick={onSwitch}>
        <Image src='/assets/icons/calendar.svg' alt='calendar' width={18.25} height={19.16} />
      </CalendarButton>
      <DropdownContainer isOpen={isOpen}>
        <CalendarContainer>
          <Typography fontWeight='bold'>FILTER BY DATE</Typography>
          <Calendar
            locale='en-Us'
            formatMonthYear={(_locale, date) =>
              `${monthNames[date.getMonth()]} ${date.getFullYear()}`
            }
          />
          <Chip
            variant='gradient.primary.head'
            paddingHorizontal={36}
            paddingVertical={12}
            onClick={onSwitch}
          >
            <Typography variant='contrast' fontSize='s'>
              Apply
            </Typography>
          </Chip>
        </CalendarContainer>
      </DropdownContainer>
    </Container>
  );
};

export default CalendarBulk;
