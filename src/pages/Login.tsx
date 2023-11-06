import { useNavigate } from 'react-router-dom';
import LoginTemplate from '../components/template/LoginTemplate';
import { useEffect } from 'react';
import { useIsLogin } from '../hooks/useIsLogin';

const Login = () => {
  const navigate = useNavigate();
  const { isLogin } = useIsLogin();

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  });

  return <LoginTemplate />;
};

export default Login;
