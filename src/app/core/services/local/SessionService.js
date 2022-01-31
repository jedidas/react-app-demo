function SessionService() {
  const get = () => {
    return (
      JSON.parse(sessionStorage.getItem("auth")) || { user: null, token: null }
    );
  };

  const set = ({ user, token }) => {
    sessionStorage.setItem("auth", JSON.stringify({ user, token }));
  };

  const getUser = () => {
    return get()?.user;
  };

  const getToken = () => {
    return get()?.token;
  };

  return {
    get,
    set,
    getUser,
    getToken,
  };
}
const sessionService = SessionService();
export default sessionService;
