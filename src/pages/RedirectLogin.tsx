import { useSearchParams, useNavigate } from 'react-router-dom';
import { useIsLogin } from '../hooks/useIsLogin';
import { useEffect } from 'react';

const RedirectLogin = () => {
  const navigate = useNavigate();
  const [searchParms] = useSearchParams();
  const { setIsLogin } = useIsLogin();

  useEffect(() => {
    const token = searchParms.get('token');
    if (!token) return;
    if (token) {
      localStorage.setItem('token', token);
      setIsLogin(true);
      navigate('/');
    }
  }, [searchParms, setIsLogin, navigate]);

  return <div>RedirectLogin</div>;
};
export default RedirectLogin;
