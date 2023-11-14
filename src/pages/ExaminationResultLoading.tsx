import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { filterMbti } from '../api/examination';
import { useDispatch } from 'react-redux';
import { addResult } from '../redux/reducers/examinationResult';
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
    data: string;
  };
}
function ExaminationResultLoading() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const answerArr = useSelector(
    (state: answerArrStateType) => state.examinatonAnswerArr.answerArr,
  );

  const result = useSelector(
    (state: resultArrStateType) => state.examinationResultArr.data,
  );
  console.log(answerArr, result);

  useEffect(() => {
    if (answerArr.length === 0) {
      navigate('/');
    } else {
      const result = filterMbti(answerArr);
      dispatch(addResult(result));
    }
  }, [answerArr, dispatch, navigate]);

  useEffect(() => {
    if (answerArr.length === 0) {
      navigate('/');
    }
    if (result) {
      const navigateResultPage = setInterval(() => {
        navigate(`/result/${result}`);
      }, 3000);
      return () => {
        clearInterval(navigateResultPage);
      };
    }
  }, [result, navigate, answerArr]);

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
