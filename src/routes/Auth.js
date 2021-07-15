import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const onSubmit = (event) => {
    event.preventDefault();
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
        <input type="submit" value="서비스 접속" />
      </form>

      <div>
        <button>Google 계정으로 접속</button>
        <button>GitHub 계정으로 접속</button>
      </div>
    </div>
  );
};

export default Auth;
