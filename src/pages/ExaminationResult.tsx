import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initArr } from '../redux/reducers/examinationArrSlice';
import { initResult } from '../redux/reducers/examinationResult';
import Img from '../components/atom/Img';
import { mbtiResult } from '../api/examination';

function ExaminationResult() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mbti } = useParams();
  const data = mbtiResult(mbti);
  // 전역 상태 초기화
  useEffect(() => {
    dispatch(initArr());
    dispatch(initResult());
  }, [dispatch]);

  return (
    <Container>
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <Img src={item.img} width={'400'} br={'100'} />
            <Container2>
              {item.decription.map((des, idx) => {
                return <div key={idx}>{des}</div>;
              })}
            </Container2>
          </div>
        );
      })}
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로
      </button>
    </Container>
  );
}

export default ExaminationResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container2 = styled.section`
  margin-top: 40px;
  div {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;
