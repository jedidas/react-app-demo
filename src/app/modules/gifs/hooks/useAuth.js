import { AuthContext } from "app/core/contexts/AuthContext";
import { authService } from "app/core/services/auth/AuthService";
import { useCallback, useContext, useState } from "react";

export default function useAuth() {
  const { auth, setUser } = useContext(AuthContext);
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  });

  const login = useCallback(
    ({ email, password }) => {
      return new Promise((resolve, reject) => {
        setState({ isLoading: true, error: null });
        authService
          .login({ email, password })
          .then(({ data }) => {
            
            const { name, avatar, phone, description } = data.user;

            setUser({
              user: { name, avatar, email, phone, description },
              token: data.token,
            });
            setState({ isLoading: false, error: null });
            resolve();
          })
          .catch((errorRes) => {
            setState({
              isLoading: false,
              error: errorRes.message,
            });
            reject(errorRes.message);
          });
      });
    },
    [setUser]
  );

  const logout = useCallback(() => {
    authService
      .logout({ email: auth?.user?.email, token: auth?.token })
      .then((response) => {
        setUser({
          user: null,
          token: null,
        });
      })
      .catch((error) => {
        console.log("login error");
        console.log(error);
        setUser({
          user: null,
          token: null,
        });
      });
  }, [auth, setUser]);

  return {
    user: auth?.user,
    token: auth?.token,
    login,
    logout,
    isLoggedIn: Boolean(auth.token),
    isLoading: state.isLoading,
    error: state.error,
  };
}
