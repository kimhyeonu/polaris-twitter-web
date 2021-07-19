import { authService, firebaseInstance } from 'firebaseApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

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
    <div className="auth-container">
      <FontAwesomeIcon
        icon={faTwitter}
        color={'#04AAFF'}
        size="3x"
        style={{ marginBottom: 30 }}
      />

      <AuthForm />

      <div className="auth-buttons">
        <button onClick={onSocialClick} name="google" className="auth-button">
          <FontAwesomeIcon icon={faGoogle} /> Google
        </button>
        <button onClick={onSocialClick} name="github" className="auth-button">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </button>
      </div>
    </div>
  );
};

export default Auth;
