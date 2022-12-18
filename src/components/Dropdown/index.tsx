import DropdownItem from './DropdownItem';
import { MenuContainer } from './styles';
import type { DropdownProps } from './types';

const Dropdown = ({ isOpen, data }: DropdownProps) => (
  <MenuContainer isOpen={isOpen}>
    {data.map((item, index) => (
      <DropdownItem key={item.name} item={item} index={index} length={data.length} />
    ))}
  </MenuContainer>
);

export default Dropdown;
