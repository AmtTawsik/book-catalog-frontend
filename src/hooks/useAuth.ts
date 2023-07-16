import { useAppSelector } from '../redux/hooks';

const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);

  if (auth?.accessToken && auth?.userId) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
