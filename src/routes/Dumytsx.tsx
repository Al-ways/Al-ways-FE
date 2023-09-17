import styled from '@emotion/styled';
import ProgressHeaderMolecule from '../components/molecule/ProgressHeaderMolecule';
import AnswerMolecule from '../components/molecule/AnswerMolecule';
import { useState } from 'react';
import QuestionMolecule from '../components/molecule/QuestionMolecule';
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
            <QuestionMolecule page={item?.page} question={item.question} />
            <AnswerMolecule answer={item?.answer} />
          </div>
        );
      })}
    </DumyContainer>
  );
};

const DumyContainer = styled.div`
  width: 480px;
  height: 909px;
  margin: 0 auto;
  background-color: #000000;
`;
const AtomBox = styled.div`
  padding-top: 100px;
`;

export default Dumytsx;
