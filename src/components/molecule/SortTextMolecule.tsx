import { useState } from 'react';
import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';

const SortTextMolecule = () => {
  const [selectedText, setSelectedText] = useState('별점순');
  return (
    <SortContanier>
      <Text
        onClick={() => setSelectedText('별점순')}
        color={selectedText === '별점순' ? COLORS.main : 'auto'}
        width={'56'}
        height={'20'}
        fonts={'20'}
        ml={'20'}
        cursor={'pointer'}
        txt={'별점순'}
      />
      <Text
        onClick={() => setSelectedText('찜한순')}
        color={selectedText === '찜한순' ? COLORS.main : 'auto'}
        width={'56'}
        height={'20'}
        fonts={'20'}
        ml={'20'}
        cursor={'pointer'}
        txt={'찜한순'}
      />
      <Text
        onClick={() => setSelectedText('가까운순')}
        color={selectedText === '가까운순' ? COLORS.main : 'auto'}
        width={'74'}
        height={'20'}
        fonts={'20'}
        ml={'20'}
        cursor={'pointer'}
        txt={'가까운순'}
      />
    </SortContanier>
  );
};

export default SortTextMolecule;

const SortContanier = styled.div`
  width: 480px;
  height: 50px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
`;
