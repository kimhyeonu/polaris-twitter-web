import { Link } from 'react-router-dom';

const Navigation = ({ currentUser }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/profile">{currentUser.displayName}의 프로필</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
