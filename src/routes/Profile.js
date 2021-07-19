import { useState } from 'react';
import { useHistory } from 'react-router';

import { authService } from 'firebaseApp';

const Profile = ({ currentUser, refreshUser }) => {
  const history = useHistory();

  const [newDisplayName, setNewDisplayName] = useState(currentUser.displayName);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (currentUser.displayName !== newDisplayName) {
      await currentUser.updateProfile({
        displayName: newDisplayName,
      });

      refreshUser();
    }
  };

  const onSignOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  // // TODO: 내가 작성한 트윗만 출력하는 기능 구현하기
  // const getMyTweets = async () => {
  //   const myTweets = await firestoreService
  //     .collection('tweets')
  //     .where('creatorId', '==', currentUser.uid)
  //     .orderBy('createdAt', 'asc')
  //     .get();

  //   console.log(myTweets.docs.map((doc) => doc.data()));
  // };
  // useEffect(() => {
  //   getMyTweets();
  // }, []);

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profile-form">
        <input
          type="text"
          placeholder="표시 이름"
          onChange={onChange}
          value={newDisplayName}
          autoFocus
          className="form-input"
        />

        <input
          type="submit"
          value="프로필 업데이트"
          className="form-button"
          style={{ marginTop: 10 }}
        />
      </form>

      <span
        className="form-button cancel-button sign-out"
        onClick={onSignOutClick}
      >
        접속해제
      </span>
    </div>
  );
};

export default Profile;
