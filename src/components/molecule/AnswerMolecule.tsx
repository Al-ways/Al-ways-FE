import styled from '@emotion/styled';
import QuestionButton from '../atom/QuestionButton';
import { examination } from '../../api/examination';
import { useDispatch } from 'react-redux';
import { pushAnswer } from '../../redux/reducers/examinationArrSlice';
import { useSelector } from 'react-redux';
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
  const answerArrPushHandler = (page: number, value: number) => {
    dispatch(pushAnswer(value));
    nextPage(page);
  };
  const findIndex = (answer: string) => {
    return data.answer.indexOf(answer) + 1;
  };
  // interface AnswerRootState {
  //   examinatonAnswerArr: AnswerState;
  // }
  // interface AnswerState {
  //   answerArr: number[];
  // }
  // const answerArr = useSelector((state: AnswerRootState) => {
  //   return state.examinatonAnswerArr.answerArr;
  // });

  if (page === 6) {
    return (
      <QuestionMoleculeContainer>
        {data.answer.map((el: string, index: number) => {
          return <QuestionButton key={index} txt={el} />;
        })}
      </QuestionMoleculeContainer>
    );
  }
  return (
    <QuestionMoleculeContainer>
      <QuestionButton
        txt={data.answer[0]}
        click={() => {
          answerArrPushHandler(page, findIndex(data.answer[0]));
        }}
      />
      <QuestionButton
        txt={data.answer[1]}
        click={() => {
          answerArrPushHandler(page, findIndex(data.answer[1]));
        }}
      />
    </QuestionMoleculeContainer>
  );
};

const QuestionMoleculeContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;
export default AnswerMolecule;
