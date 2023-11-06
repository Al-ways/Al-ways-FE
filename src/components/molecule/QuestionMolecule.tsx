import styled from '@emotion/styled';
import Text from '../atom/Text';
import Img from '../atom/Img';
import { examinationData } from '../../api/examination';
import { PageType } from '../../types/examination';

const QuestionMolecule = ({ page }: PageType) => {
  const data = examinationData(page);

  return (
    <>
      <QuestionImgContainer>
        <Img
          src={
            'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567593192/noticon/za5oft8gpi5yabrlvgfp.gif'
          }
          alt={'question'}
          width={'250'}
          height={'175'}
          br={'10'}
        />
      </QuestionImgContainer>
      <QuestionTextContainer>
        <Text
          width={'400'}
          height={'100'}
          vertical={'100'}
          txt={`Q${page + 1}.`}
          align={'center'}
          fonts={'60'}
        />
        <Text
          width={'400'}
          height={'75'}
          vertical={'75'}
          txt={data.question}
          align={'center'}
          fonts={'20'}
        />
      </QuestionTextContainer>
    </>
  );
};
const QuestionTextContainer = styled.div`
  width: 400px;
  height: 240;
  margin: 0 auto;
  background-color: #3d3d3d;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const QuestionImgContainer = styled.div`
  width: 400px;
  height: 175px;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  text-align: center;
`;

export default QuestionMolecule;
