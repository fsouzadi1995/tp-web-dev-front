import * as React from 'react';
import { axios } from '../lib/axios';

export const AuthContext = React.createContext(null);
AuthContext.displayName = 'AuthContext';

function loginFn(credentials) {
  return axios.post('/signin', credentials);
}

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = React.useState(() =>
    Boolean(localStorage.getItem('jwt'))
  );
  const [isLoading, setIsLoading] = React.useState(false);

  const login = React.useCallback(async (credentials) => {
    try {
      setIsLoading(true);

      const { jwt } = await loginFn(credentials);
      const authed = Boolean(jwt);

      setIsAuthed(authed);
    } catch (err) {
      setIsAuthed(false);
      localStorage.clear();

      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthed, isLoading, login }}>
      {children}
    </AuthContext.Provider>
  );
}
