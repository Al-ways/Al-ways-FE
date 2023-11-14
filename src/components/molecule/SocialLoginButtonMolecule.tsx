import styled from '@emotion/styled';
import Kakao from '../../assets/icons/kakao.png';
import Google from '../../assets/icons/google.png';
import Naver from '../../assets/icons/naver.png';
import Text from '../atom/Text';
interface SocialLoginButtonMoleculeProps {
  name: string;
}
const SocialLoginButtonMolecule = ({
  name,
}: SocialLoginButtonMoleculeProps) => {
  const kakao = Kakao;
  const google = Google;
  const naver = Naver;
  const handleLogin = async (name: string) => {
    const baseURL = `${import.meta.env.VITE_BASE_URL}/oauth2/authorize/`;
    window.location.href = baseURL + name;
  };

  if (name === 'kakao') {
    return (
      <Container bgc={'#fee501'} onClick={() => handleLogin(name)}>
        <IconBox>
          <SocialIcon src={kakao} />
        </IconBox>
        <TextBox>
          <Text
            txt={'카카오 로그인'}
            fonts={'24'}
            fontw={'bold'}
            color={'#39201f'}
          />
        </TextBox>
      </Container>
    );
  }
  if (name === 'google') {
    return (
      <Container bgc={'#ffffff'} onClick={() => handleLogin(name)}>
        <IconBox>
          <SocialIcon src={google} />
        </IconBox>
        <TextBox>
          <Text
            txt={'구글 로그인'}
            color={'#000000'}
            fonts={'24'}
            fontw={'bold'}
          />
        </TextBox>
      </Container>
    );
  }
  if (name === 'naver') {
    return (
      <Container bgc={'#02c75a'} onClick={() => handleLogin(name)}>
        <IconBox>
          <SocialIcon src={naver} />
        </IconBox>
        <TextBox>
          <Text txt={'네이버 로그인'} fonts={'24'} fontw={'bold'} />
        </TextBox>
      </Container>
    );
  }
};
const Container = styled.button<{ bgc: string }>`
  width: 322px;
  height: 46px;
  border-radius: 5px;
  background-color: ${(props) => props.bgc};
  display: flex;
  align-items: center;
  margin: 30px auto 0 auto;
  cursor: pointer;
  border: none;
`;
const IconBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;
const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const TextBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;
export default SocialLoginButtonMolecule;
