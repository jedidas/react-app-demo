import useAuth from "app/modules/gifs/hooks/useAuth";
import { useRef } from "react";
import CircularSpinnerComponent from "../spinners/CircularSpinnerComponent";

export default function LoginComponent({ close }) {
  const emailInput = useRef();
  const passwordInput = useRef();
  const { login, isLoading, error } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
      .then(() => {
        close();
      })
      .catch((myError) => {
        console.log("login error", myError);
      });
  };

  return (
    <div className="login_app">
      <div className="login_app__container">
        <div className="container">
          <div className="col-12">
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="col-12">
              <label className="form-label w-100">
                Email
                <input
                  ref={emailInput}
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </label>
            </div>
            <div className="col-12">
              <label className="form-label w-100">
                Password
                <input
                  ref={passwordInput}
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </label>
            </div>
            <div className="col-12">
              {isLoading ? (
                <CircularSpinnerComponent />
              ) : (
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
