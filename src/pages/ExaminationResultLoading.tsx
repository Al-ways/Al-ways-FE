import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { examinationResult } from '../api/examination';
import { useDispatch } from 'react-redux';
import { pushResult } from '../redux/reducers/examinationResultArr';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import loading from '../assets/loading.gif';
import Text from '../components/atom/Text';
interface answerArrStateType {
  examinatonAnswerArr: {
    answerArr: Array<number>;
  };
}
interface resultArrStateType {
  examinationResultArr: {
    data: Array<{ id: string; name: string; description: string; img: string }>;
  };
}
function ExaminationResultLoading() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const answerArr = useSelector(
    (state: answerArrStateType) => state.examinatonAnswerArr.answerArr,
  );

  const resultArr = useSelector(
    (state: resultArrStateType) => state.examinationResultArr.data,
  );

  useEffect(() => {
    const result = examinationResult(answerArr);
    dispatch(pushResult(result));
  }, [answerArr, dispatch]);

  useEffect(() => {
    if (resultArr[0]?.name) {
      const navigateResultPage = setInterval(() => {
        navigate(`/result/${resultArr[0].name}`);
      }, 3000);
      return () => {
        clearInterval(navigateResultPage);
      };
    }
  }, [resultArr, navigate]);
  return (
    <Container>
      <img src={loading} />
      <Text txt={'로딩중...'} fontw={'bold'} fonts={'24'} />
    </Container>
  );
}

export default ExaminationResultLoading;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60dvh;
`;
