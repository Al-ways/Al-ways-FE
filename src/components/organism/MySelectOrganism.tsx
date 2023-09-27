import { useState } from 'react';
import styled from '@emotion/styled';
import SelectedBarMolecule from '../molecule/SelectedBarMolecule';
import SelectedTextMolecule from '../molecule/SelectedTextMolecule';

const MySelectOrganism = () => {
  const [selectedText, setSelectedText] = useState('찜한 술집');
  return (
    <Container>
      <SelectedTextMolecule
        selectedText={selectedText}
        setSelectedText={setSelectedText}
      />
      <SelectedBarMolecule selectedText={selectedText} />
    </Container>
  );
};

export default MySelectOrganism;

const Container = styled.div`
  width: 480px;
  height: 55px;
  margin: -30px 0 30px;
`;
