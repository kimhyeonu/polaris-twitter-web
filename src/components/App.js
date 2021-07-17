import { useState, useEffect } from 'react';

import AppRouter from 'components/Router';
import { authService } from 'firebaseApp';

function App() {
  // * true → 파이어베이스 초기화 완료
  // * false → 파이어베이스 초기화 미완료
  const [isInit, setIsInit] = useState(false);

  // * true →  홈 페이지
  // * false → 인증 페이지
  const [isSignedIn, setIsSignedIn] = useState(false);

  // * 서비스에 접속한 사용자(계정)
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // * 사용자 데이터가 존재할 경우
        setIsSignedIn(user);
        setCurrentUser(user);
      } else {
        // * 사용자 데이터가 존재하지 않을 경우
        setIsSignedIn(false);
      }

      // * 파이어베이스 초기화 완료
      setIsInit(true);
    });
  }, []);

  return (
    <>
      {/* 파이어베이스 초기화 여부를 검사한다. */}
      {isInit ? (
        <AppRouter isSignedIn={isSignedIn} currentUser={currentUser} />
      ) : (
        '로딩 중입니다...'
      )}

      {/* <footer>
        &copy; {new Date().getFullYear()}. DEVELOPER POLARIS. All rights
        reserved.
      </footer> */}
    </>
  );
}

export default App;
