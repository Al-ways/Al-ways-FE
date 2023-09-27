import styled from '@emotion/styled';
import CurrentStateBar from '../atom/CurrentStateBar';

interface SelectedBarProps {
  selectedText: string;
}

const SelectedBarMolecule = ({ selectedText }: SelectedBarProps) => {
  return (
    <>
      <BarWrapper
        style={{
          justifyContent:
            selectedText === '찜한 술집'
              ? 'flex-start'
              : selectedText === '포스팅'
              ? 'center'
              : 'flex-end',
        }}
      >
        <CurrentStateBar />
      </BarWrapper>
    </>
  );
};

export default SelectedBarMolecule;

const BarWrapper = styled.div`
  width: 480px;
  height: 5px;

  display: flex;
  background-color: #616161;
`;
