import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Kakao from '../../assets/icons/kakao.png';
import Google from '../../assets/icons/google.png';
import Naver from '../../assets/icons/naver.png';
interface SocialLoginButtonMoleculeProps {
  name: string;
}
const SocialLoginButtonMolecule = ({
  name,
}: SocialLoginButtonMoleculeProps) => {
  const kakao = Kakao;
  const google = Google;
  const naver = Naver;
  if (name === 'kakao') {
    return (
      <Container>
        <SocialIcon src={kakao} />
      </Container>
    );
  }
  if (name === 'google') {
    return (
      <Container>
        <SocialIcon src={google} />
      </Container>
    );
  }
  if (name === 'naver') {
    return (
      <Container>
        <SocialIcon src={naver} />
      </Container>
    );
  }
};
const Container = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  background-color: ${COLORS.white};
`;
const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 25px 25px 0 25px;
`;
export default SocialLoginButtonMolecule;
