import { authService, firebaseInstance } from 'firebaseApp';
import AuthForm from 'components/AuthForm';

const Auth = () => {
  // * 비동기 처리
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;

    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    await authService.signInWithPopup(provider);
  };

  return (
    <div>
      <AuthForm />

      <div>
        <button onClick={onSocialClick} name="google">
          Google 계정으로 접속
        </button>
        <button onClick={onSocialClick} name="github">
          GitHub 계정으로 접속
        </button>
      </div>
    </div>
  );
};

export default Auth;
