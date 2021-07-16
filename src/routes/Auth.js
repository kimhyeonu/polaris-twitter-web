import { useState } from 'react';

import { authService, firebaseInstance } from 'firebaseApp';

const Auth = () => {
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
      let accountData = null; // * 계정 데이터

      if (isNewAccount) {
        // * 신규 계정일 경우 계정을 생성한다.
        accountData = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // * 기존 계정일 경우 서비스에 접속한다.
        accountData = await authService.signInWithEmailAndPassword(
          email,
          password
        );
      }

      console.log(accountData);
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleAccount = () => setIsNewAccount((prev) => !prev);

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

    const data = await authService.signInWithPopup(provider);

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={email}
          required
          onChange={onChange}
        />

        <input
          name="password"
          type="password"
          placeholder="패스워드"
          value={password}
          required
          onChange={onChange}
        />

        <input
          type="submit"
          value={isNewAccount ? '계정 생성' : '서비스 접속'}
        />

        {error}
      </form>

      <span onClick={toggleAccount}>
        {isNewAccount ? '서비스 접속' : '계정 생성'}
      </span>

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
