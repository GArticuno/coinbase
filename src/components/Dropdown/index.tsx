import DropdownItem from './DropdownItem';
import { MenuContainer } from './styles';
import type { DropdownProps } from './types';

const Dropdown = ({ isOpen, data, children }: DropdownProps) => (
  <MenuContainer isOpen={isOpen}>
    {data &&
      data.map((item, index) => (
        <DropdownItem key={item.name} item={item} index={index} length={data.length} />
      ))}
    {children}
  </MenuContainer>
);

export default Dropdown;
