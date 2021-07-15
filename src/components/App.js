import { useState } from 'react';

import AppRouter from 'components/Router';
import { authService } from 'firebaseApp';

function App() {
  // isSignedIn이 true이면 접속 상태 →  홈 페이지
  // isSignedIn이 false이면 비접속 상태 → 인증 페이지
  const [isSignedIn, setIsSignedIn] = useState(authService.currentUser);

  // TODO: 제거 예정
  console.log(authService.currentUser);

  return (
    <>
      <AppRouter isSignedIn={isSignedIn} />
      <footer>
        &copy; {new Date().getFullYear()}. DEVELOPER POLARIS. All rights
        reserved.
      </footer>
    </>
  );
}

export default App;
