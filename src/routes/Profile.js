import { useHistory } from 'react-router';

import { authService } from 'firebaseApp';

const Profile = () => {
  const history = useHistory();

  const onSignOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  return (
    <>
      <button onClick={onSignOutClick}>서비스 접속해제</button>
    </>
  );
};

export default Profile;
