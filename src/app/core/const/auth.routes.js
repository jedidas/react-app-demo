const AUTH_ROUTES = {
  LOGIN: `${process.env.REACT_APP_AUTH_URL}/login`,
  LOGOUT: `${process.env.REACT_APP_AUTH_URL}/logout`,
  SING_UP: `${process.env.REACT_APP_AUTH_URL}/sign-up`,
  FORGOT_PASSWORD: `${process.env.REACT_APP_AUTH_URL}/forgot-password`,
  RESET_PASSWORD: `${process.env.REACT_APP_AUTH_URL}/reset-password`,
};
export default AUTH_ROUTES;
