import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from './Config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    signOut(auth).then(() => {
      setIsAuthenticated(false);
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
