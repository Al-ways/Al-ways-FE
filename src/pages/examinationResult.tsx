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
    data: [
      {
        id: number;
        name: string;
        description: string;
      },
    ];
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
    if (res) {
      dispatch(pushResult(res));
    }
  }, []);

  if (resultArr === 0) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {resultArr.map((data) => {
        return <div>{data.name}</div>;
      })}
    </div>
  );
}

export default ExaminationResult;
