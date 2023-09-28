import styled from '@emotion/styled';
import { useState } from 'react';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';

const MySortedMolecule = () => {
  const [selectedText, setSelectedText] = useState('최신순');

  return (
    <>
      <Wrapper>
        <TextWrapper>
          <Text
            onClick={() => setSelectedText('최신순')}
            color={selectedText === '최신순' ? COLORS.white : '#616161'}
            bgc={selectedText === '최신순' ? '#AE73B8' : COLORS.dark_gray}
            width={'80'}
            height={'24'}
            fonts={'16'}
            br={'10'}
            align={'center'}
            cursor={'pointer'}
            txt={'최신순'}
          />
          <Text
            onClick={() => setSelectedText('과거순')}
            color={selectedText === '과거순' ? COLORS.white : '#616161'}
            bgc={selectedText === '과거순' ? '#AE73B8' : COLORS.dark_gray}
            width={'80'}
            height={'24'}
            fonts={'16'}
            br={'10'}
            align={'center'}
            cursor={'pointer'}
            txt={'과거순'}
          />
          <Text
            onClick={() => setSelectedText('좋아요순')}
            color={selectedText === '좋아요순' ? COLORS.white : '#616161'}
            bgc={selectedText === '좋아요순' ? '#AE73B8' : COLORS.dark_gray}
            width={'80'}
            height={'24'}
            fonts={'16'}
            br={'10'}
            align={'center'}
            cursor={'pointer'}
            txt={'좋아요순'}
          />
          <Text
            onClick={() => setSelectedText('조회순')}
            color={selectedText === '조회순' ? COLORS.white : '#616161'}
            bgc={selectedText === '조회순' ? '#AE73B8' : COLORS.dark_gray}
            width={'80'}
            height={'24'}
            fonts={'16'}
            br={'10'}
            align={'center'}
            cursor={'pointer'}
            txt={'조회순'}
          />
        </TextWrapper>
      </Wrapper>
    </>
  );
};

export default MySortedMolecule;

const Wrapper = styled.div`
  width: 480px;
  height: 24px;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
`;
const TextWrapper = styled.div`
  width: 440px;
  height: 24px;
  gap: 10px;

  display: flex;
`;
