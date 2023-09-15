import styled from '@emotion/styled';
import ProgressHeaderMolecule from '../components/molecule/ProgressHeaderMolecule';
import QuestionMolecule from '../components/molecule/QuestionMolecule';
import { useState } from 'react';
interface dataProps {
  page: number;
  question: string;
  answer: string[];
}
const Dumytsx = () => {
  const [data, setData] = useState<dataProps[]>([
    {
      page: 1,
      question: '당신은?',
      answer: ['남자', '여자'],
    },
  ]);
  return (
    <DumyContainer>
      {data.map((item) => {
        return (
          <div key={item.page}>
            <AtomBox>
              <ProgressHeaderMolecule page={item?.page} />
            </AtomBox>

            <QuestionMolecule answer={item?.answer} />
          </div>
        );
      })}
    </DumyContainer>
  );
};

const DumyContainer = styled.div`
  width: 414px;
  height: 896px;
  margin: 0 auto;
  background-color: #000000;
`;
const AtomBox = styled.div`
  padding-top: 100px;
`;

export default Dumytsx;
