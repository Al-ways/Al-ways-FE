import styled from '@emotion/styled';
import QuestionButton from '../atom/QuestionButton';
import { examination } from '../../api/examination';
import { useDispatch } from 'react-redux';
import { addValue } from '../../redux/reducers/examinationSlice';
interface QuestionMoeculeProps {
  page: number;
  nextPage: (page: number) => void;
}
// 1~6번 까지는 숫자만 넣고 7번은 유저 데이터에 다가 넣으면 된다.
const AnswerMolecule = ({ page, nextPage }: QuestionMoeculeProps) => {
  const dispatch = useDispatch();
  const data = examination(page);
  // // mbti 검사지
  //   const mbtiPushData = (page:number,answerNum:number) =>{
  //     // ex : [1,1,1,1,1,1]
  //     dispatch(addValue(answerNum));
  //     nextPage(page);
  //   }
  // // 7번 유저 취향 데이터
  //   const userPushData = (page:number , userFavoriteDrink:string) =>{
  //     dispatch(addValue(userFavoriteDrink));
  //     nextPage(page);
  //   }
  const handler = (page: number, value: string) => {
    dispatch(addValue(value));
    nextPage(page);
  };
  if (page === 6) {
    return (
      <QuestionMoleculeContainer>
        {data.answer.map((el: string, index: number) => {
          return (
            <QuestionButton
              key={index}
              click={() => handler(page, data.answer[index])}
              txt={el}
            />
          );
        })}
      </QuestionMoleculeContainer>
    );
  }
  return (
    <QuestionMoleculeContainer>
      <QuestionButton
        click={() => handler(page, data.answer[0])}
        txt={data.answer[0]}
      />
      <QuestionButton
        click={() => handler(page, data.answer[1])}
        txt={data.answer[1]}
      />
    </QuestionMoleculeContainer>
  );
};

const QuestionMoleculeContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;
export default AnswerMolecule;
