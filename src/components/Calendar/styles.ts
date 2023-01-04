import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem 3rem;
  border-radius: 10px;
  font-weight: 600;

  .react-calendar {
    background: white;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }

  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: ${({ theme }) => theme.font.weight.light};
      font-size: ${({ theme }) => theme.font.size.m};
      text-transform: uppercase;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  .react-calendar__month-view__weekdays {
    color: ${({ theme }) => theme.colors.text.quartenary};
    text-align: center;
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${({ theme }) => theme.colors.calendar.primary};
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.colors.calendar.secondary};
  }

  .react-calendar__tile--now {
    background: linear-gradient(
      ${({ theme }) =>
        `${theme.colors.gradient.primary.head}, ${theme.colors.gradient.primary.tail}`}
    );
    color: ${({ theme }) => theme.colors.text.contrast};
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: linear-gradient(
      ${({ theme }) =>
        `${theme.colors.gradient.primary.head}, ${theme.colors.gradient.primary.tail}`}
    );
    opacity: 0.5;
  }

  button {
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.calendar.primary};
    font-weight: bold;

    &:hover {
      background: linear-gradient(
        ${({ theme }) =>
          `${theme.colors.gradient.primary.head}, ${theme.colors.gradient.primary.tail}`}
      );
      color: ${({ theme }) => theme.colors.text.contrast};
      opacity: 0.5;
    }

    &:active {
      background: linear-gradient(
        ${({ theme }) =>
          `${theme.colors.gradient.primary.head}, ${theme.colors.gradient.primary.tail}`}
      );
      color: ${({ theme }) => theme.colors.text.contrast};
    }
  }

  .react-calendar__tile--hasActive {
    background: ${({ theme }) => theme.colors.text.secondary};
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: ${({ theme }) => theme.colors.text.secondary};
    opacity: 0.5;
  }
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.colors.text.secondary};
    color: ${({ theme }) => theme.colors.text.contrast};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${({ theme }) => theme.colors.text.secondary};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

export const CalendarButton = styled.div`
  cursor: pointer;
`;

export const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  margin-top: 1rem;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 2;
  top: 1.5rem;
  right: 0;
`;
