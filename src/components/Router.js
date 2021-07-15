import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// 루트 라우트 목록
import Home from 'routes/Home';
import Auth from 'routes/Auth';

const AppRouter = ({ isSignedIn }) => {
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
