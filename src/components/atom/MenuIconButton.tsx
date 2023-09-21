import styled from '@emotion/styled';
import MenuImage from '../../assets/icons/menu.png';

interface MenuIconButtonProps {
  state: boolean;
  setState: (state: boolean) => void;
}

const MenuIconButton = ({ state, setState }: MenuIconButtonProps) => {
  return <Menu onClick={() => setState(!state)} />;
};
const Menu = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 20px;

  cursor: pointer;
  background-image: url(${MenuImage});
`;

export default MenuIconButton;
