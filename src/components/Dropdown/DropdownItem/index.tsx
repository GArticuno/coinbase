import Typography from 'components/Typography';
import { useState } from 'react';

import { Container, Divider, Item } from './styles';
import { DropdownItemProps } from './types';

const DropdownItem = ({ item, index, length }: DropdownItemProps) => {
  const [changeColor, setChangeColor] = useState(false);

  const onChangeColor = () => {
    setChangeColor((prevState) => !prevState);
  };
  return (
    <Container>
      <Item
        index={index}
        length={length}
        onMouseOver={onChangeColor}
        onMouseOut={onChangeColor}
        onClick={item.onPress}
      >
        <Typography variant={changeColor ? 'white' : 'primary'} fontSize='s'>
          {item.name}
        </Typography>
      </Item>
      {index !== length - 1 && <Divider />}
    </Container>
  );
};

export default DropdownItem;
