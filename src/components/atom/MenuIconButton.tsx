import styled from '@emotion/styled';
import MenuImage from '../../assets/icons/menu.png';

interface MenuIconButtonProps {
  toggleMenu: () => void;
}

const MenuIconButton = ({ toggleMenu }: MenuIconButtonProps) => {
  return <Menu onClick={toggleMenu} />;
};
const Menu = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 20px;

  cursor: pointer;
  background-image: url(${MenuImage});
  background-size: cover;
`;

export default MenuIconButton;
