import styled from '@emotion/styled';
import QuestionButton from '../atom/QuestionButton';
import { examinationData, examinationResult } from '../../api/examination';
import { useDispatch } from 'react-redux';
import { pushAnswer } from '../../redux/reducers/examinationArrSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { pushResult } from '../../redux/reducers/examinationResultArr';
import { useNavigate } from 'react-router-dom';
interface QuestionMoeculeProps {
  page: number;
  nextPage: (page: number) => void;
}
interface AnswerRootState {
  examinatonAnswerArr: {
    answerArr: number[];
  };
}
interface ResultRootState {
  examinationResultArr: {
    data: number[];
  };
}
const AnswerMolecule = ({ page, nextPage }: QuestionMoeculeProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = examinationData(page);

  // const answerArr = useSelector((state: AnswerRootState) => {
  //   return state.examinatonAnswerArr.answerArr;
  // });
  // const resultArr = useSelector((state: ResultRootState) => {
  //   return state.examinationResultArr.data;
  // });

  // answer arr에 데이터 넣기
  const answerArrPushHandler = (page: number, value: number) => {
    // dispatch(pushResult(result));

    if (page === 5) {
      dispatch(pushAnswer(value));
      navigate('/result');
      // user mbti 값 넣기
      // answer arr 초기화
      // navigation 결과 페이지
    } else {
      dispatch(pushAnswer(value));
      nextPage(page);
    }
  };

  // arr 안에 데이터의 위치 확인
  const findIndex = (answer: string) => {
    return data.answer.indexOf(answer) + 1;
  };

  // 뒤로가기, 새로고침 방지
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ''; //Chrome에서 동작하도록; deprecated
  };

  useEffect(() => {
    window.addEventListener('beforeunload', preventClose);
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  // user data 저장

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
