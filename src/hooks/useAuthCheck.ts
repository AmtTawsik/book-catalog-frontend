/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import { userLoggedIn } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem('auth');

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.userId) {
        dispatch(
          userLoggedIn({
            accessToken: auth?.accessToken,
            userName: auth?.userName,
            email: auth?.email,
            userId: auth?.userId,
          })
        );
      }
    }
    setAuthCheck(true);
  }, [dispatch]);

  return authCheck;
};

export default useAuthCheck;
