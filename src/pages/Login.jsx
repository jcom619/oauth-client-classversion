import {
    GoogleLoginButton,
    GithubLoginButton
} from 'react-social-login-buttons'

const Login = props => {

    const handleGoogleClick = () => {
        console.log('Google is clicked!')
    }

    const handleGithubClick = () => {
        console.log('Github is clicked!')
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <GoogleLoginButton onClick={handleGoogleClick} />
            <GithubLoginButton onClick={handleGithubClick} />
        </div>
    )
}

export default Login