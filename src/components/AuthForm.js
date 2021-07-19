import { useState } from 'react';
import { authService } from 'firebaseApp';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // * 신규 계정 → true
  // * 기존 계정 -> false
  const [isNewAccount, setIsNewAccount] = useState(true);

  const [error, setError] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // * 비동기 처리
  const onSubmit = async (event) => {
    // * 페이지 새로고침 방지 → React 상태 손실 방지
    event.preventDefault();

    try {
      if (isNewAccount) {
        // * 신규 계정일 경우 계정을 생성한다.
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // * 기존 계정일 경우 서비스에 접속한다.
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleAccount = () => setIsNewAccount((prev) => !prev);

  return (
    <>
      <form onSubmit={onSubmit} className="container">
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={email}
          required
          onChange={onChange}
          className="auth-input"
        />

        <input
          name="password"
          type="password"
          placeholder="패스워드"
          value={password}
          required
          onChange={onChange}
          className="auth-input"
        />

        <input
          type="submit"
          value={isNewAccount ? '계정 생성' : '서비스 접속'}
          className="auth-input auth-submit"
        />

        {error && <span className="auth-error">{error}</span>}
      </form>

      <span onClick={toggleAccount} className="auth-switch">
        {isNewAccount ? '서비스 접속' : '계정 생성'}
      </span>
    </>
  );
};

export default AuthForm;
