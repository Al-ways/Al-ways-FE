import styled from '@emotion/styled';
import Next from '../atom/Next';
import Text from '../atom/Text';

interface SidebarMenuProps {
  txt: string;
  onClick: () => void;
}

const SidebarMenuMolecule = ({ txt, onClick }: SidebarMenuProps) => {
  return (
    <>
      <Wrapper onClick={onClick}>
        <Text
          width={'220'}
          height={'40'}
          fonts={'18'}
          fontw={'400'}
          txt={txt}
        />
        <Next />
      </Wrapper>
    </>
  );
};

export default SidebarMenuMolecule;

const Wrapper = styled.div`
  width: 320px;
  height: 40px;
  margin-bottom: 30px;

  cursor: pointer;
  display: flex;
  justify-content: center;
`;
