import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ currentUser }) => {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 50,
          marginBottom: 100,
        }}
      >
        <li>
          <Link to="/" style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faTwitter} color={'#04AAFF'} size="2x" />
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            style={{
              marginLeft: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: 12,
            }}
          >
            <FontAwesomeIcon icon={faUser} color={'#04AAFF'} size="2x" />
            <span style={{ marginTop: 10 }}>
              {currentUser.displayName
                ? `${currentUser.displayName}의 프로필`
                : '프로필'}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
