import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Login = (props) => {
  const handleGoogleClick = () => {
    console.log(handleGoogleClick);
    window.location.href = `${SERVER_URL} /auth/google`;
  };
  const handleGithubClick = () => {
    console.log(handleGithubClick);
    window.location.href = `${SERVER_URL} /auth/github`;
  };
  return (
    <div>
      <h1>login</h1>
      <GoogleLoginButton onClick={handleGoogleClick} />
      <GithubLoginButton onClick={handleGithubClick} />
    </div>
  );
};

export default Login;
