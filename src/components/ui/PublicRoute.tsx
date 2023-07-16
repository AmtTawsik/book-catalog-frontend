import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAuth();

  return !isLoggedIn ? children : <Navigate to="/" />;
};

export default PublicRoute;
