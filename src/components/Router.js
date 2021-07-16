import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';

// 루트 라우트 목록
import Home from 'routes/Home';
import Auth from 'routes/Auth';

// 서브 라우트 목록
import Profile from 'routes/Profile';

const AppRouter = ({ isSignedIn, currentUser }) => {
  return (
    <Router>
      {/* 접속 중일 때만 네비게이션을 보여준다. */}
      {isSignedIn && <Navigation />}

      <Switch>
        {isSignedIn ? (
          <>
            <Route exact path="/">
              <Home currentUser={currentUser} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
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
