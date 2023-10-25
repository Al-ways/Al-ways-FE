import { useEffect, useState } from 'react';

// localSorage에 token이 있으면 로그인 상태 입니다.

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return { isLogin, setIsLogin };
};
