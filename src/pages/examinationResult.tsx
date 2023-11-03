import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { examinationResult } from '../api/examination';
import { useDispatch } from 'react-redux';
import { pushResult } from '../redux/reducers/examinationResultArr';

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
function ExaminationResult() {
  const dispatch = useDispatch();
  const answerArr = useSelector((state: AnswerRootState) => {
    return state.examinatonAnswerArr.answerArr;
  });
  const resultArr = useSelector((state: ResultRootState) => {
    return state.examinationResultArr.data;
  });
  console.log(resultArr);

  const res = examinationResult(answerArr);
  useEffect(() => {
    dispatch(pushResult(res));
  }, []);
  return (
    <div>
      <div>{res.id}</div>
      <div>{res.description}</div>
      <div>{res.name}</div>
      <div></div>
    </div>
  );
}

export default ExaminationResult;
