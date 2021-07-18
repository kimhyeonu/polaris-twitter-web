import { useState, useEffect } from 'react';

import AppRouter from 'components/Router';
import { authService } from 'firebaseApp';

function App() {
  // * true → 파이어베이스 초기화 완료
  // * false → 파이어베이스 초기화 미완료
  const [isInit, setIsInit] = useState(false);

  // * 서비스에 접속한 사용자(계정)
  const [currentUser, setCurrentUser] = useState(null);

  // * 현재 사용자 객체를 리프레시하는 메서드
  const refreshUser = () => {
    const user = authService.currentUser;
    setCurrentUser({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // * 사용자 데이터가 존재할 경우
        setCurrentUser({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        // * 사용자 데이터가 존재하지 않을 경우
        setCurrentUser(false);
      }

      // * 파이어베이스 초기화 완료
      setIsInit(true);
    });
  }, []);

  return (
    <>
      {/* 파이어베이스 초기화 여부를 검사한다. */}
      {isInit ? (
        <AppRouter
          isSignedIn={Boolean(currentUser)}
          currentUser={currentUser}
          refreshUser={refreshUser}
        />
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
