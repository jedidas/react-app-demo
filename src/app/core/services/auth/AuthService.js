const { default: AUTH_ROUTES } = require("app/core/const/auth.routes");
const { default: ApiService } = require("../api/ApiService");

class AuthService extends ApiService {
  login = ({ email, password }) => {
    return this.post({ url: AUTH_ROUTES.LOGIN, data: { email, password } });
  };

  logout = ({ email, token }) => {
    return this.post({
      url: AUTH_ROUTES.LOGOUT,
      data: { email },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  signup = ({
    avatar,
    name,
    last_name,
    email,
    phone,
    birth_date,
    gender,
    description,
  }) => {
    return this.post(AUTH_ROUTES.SIGNUP, {
      avatar,
      name,
      last_name,
      email,
      phone,
      birth_date,
      gender,
      description,
    });
  };
}

export default AuthService;
export const authService = new AuthService();
