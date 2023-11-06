import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { examinationResult } from '../api/examination';
import { useDispatch } from 'react-redux';
import { pushResult } from '../redux/reducers/examinationResultArr';
import { useNavigate } from 'react-router-dom';

function ExaminationResultLoading() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const answerArr = useSelector(
    (state: any) => state.examinatonAnswerArr.answerArr,
  );

  const resultArr = useSelector(
    (state: any) => state.examinationResultArr.data,
  );
  console.log(answerArr, resultArr);

  useEffect(() => {
    const result = examinationResult(answerArr);
    dispatch(pushResult(result));
  }, []);

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
  return <div>loading....</div>;
}

export default ExaminationResultLoading;
