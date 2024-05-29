import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ element: Element, ...rest }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/signin" />}
    />
  );
}

export default PrivateRoute;
