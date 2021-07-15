import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// 루트 라우트 목록
import Home from '../routes/Home';
import Auth from '../routes/Auth';

const AppRouter = () => {
  // isSignedIn이 true이면 접속 상태 →  홈 페이지
  // isSignedIn이 false이면 비접속 상태 → 인증 페이지
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <Switch>
        {isSignedIn ? (
          <Route exact path="/">
            <Home />
          </Route>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
