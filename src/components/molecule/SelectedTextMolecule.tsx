import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Text from '../atom/Text';

interface SelectedTextProps {
  selectedText: string;
  setSelectedText: (selectedText: string) => void;
}

const SelectedTextMolecule = ({
  selectedText,
  setSelectedText,
}: SelectedTextProps) => {
  return (
    <>
      <TextWrapper>
        <Text
          onClick={() => setSelectedText('찜한 술집')}
          color={selectedText === '찜한 술집' ? COLORS.white : '#616161'}
          width={'100'}
          height={'50'}
          fonts={'20'}
          ml={'20'}
          align={'center'}
          cursor={'pointer'}
          txt={'찜한 술집'}
        />
        <Text
          onClick={() => setSelectedText('포스팅')}
          width={'100'}
          height={'50'}
          fonts={'20'}
          align={'center'}
          cursor={'pointer'}
          color={selectedText === '포스팅' ? COLORS.white : '#616161'}
          txt={'포스팅'}
        />
        <Text
          onClick={() => setSelectedText('댓글')}
          width={'100'}
          height={'50'}
          fonts={'20'}
          mr={'20'}
          align={'center'}
          cursor={'pointer'}
          color={selectedText === '댓글' ? COLORS.white : '#616161'}
          txt={'댓글'}
        />
      </TextWrapper>
    </>
  );
};

export default SelectedTextMolecule;

const TextWrapper = styled.div`
  width: 480px;
  height: 50px;

  display: flex;
  justify-content: space-between;
`;
