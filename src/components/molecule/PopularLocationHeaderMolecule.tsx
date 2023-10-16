import styled from '@emotion/styled';
import Text from '../atom/Text';
import Location from '../atom/Location';

const PopularLocationHeaderMolecule = ({
  address,
}: {
  address: string | null;
}) => {
  // 주소 내 추출한 구 이름
  const district = address?.split(' ')[2];
  return (
    <PopularLocationHeader>
      <Text mr={'15'} fontw={'700'} txt={'이번 주 인기 술집'} />
      <IconTitle>
        <Location />
        <Text
          txt={district ? district : '위치 정보를 로딩중입니다.'}
          fonts={district ? '14' : '12'}
        />
      </IconTitle>
    </PopularLocationHeader>
  );
};

export default PopularLocationHeaderMolecule;

const PopularLocationHeader = styled.div`
  width: 440px;
  height: 20x;
  font-size: 20px;
  margin-bottom: 20px;

  display: flex;
`;

const IconTitle = styled.div`
  display: flex;
  align-items: flex-end;
`;
