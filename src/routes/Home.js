import { useState, useEffect } from 'react';

import { firestoreService } from 'firebaseApp';
import Tweet from 'components/Tweet';
import TweetFactory from 'components/TweetFactory';

const Home = ({ currentUser }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    firestoreService.collection('tweets').onSnapshot((snapshot) => {
      const newTweets = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setTweets(newTweets);
    });
  }, []);

  return (
    <>
      <TweetFactory currentUser={currentUser} />

      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            isOwner={tweet.creatorId === currentUser.uid}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
