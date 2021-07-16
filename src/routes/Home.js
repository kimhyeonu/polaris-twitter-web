import { useState, useEffect } from 'react';

import { firestoreService } from 'firebaseApp';

const Home = () => {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    const tweets = await firestoreService.collection('tweets').get();

    tweets.forEach((document) =>
      setTweets((prev) => [document.data(), ...prev])
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await firestoreService.collection('tweets').add({
      text: tweet,
      createdAt: Date.now(),
    });

    setTweet('');
  };

  const onChange = (event) => {
    event.preventDefault();

    const {
      target: { value },
    } = event;

    setTweet(value);
  };

  useEffect(() => {
    getTweets();
  }, []);

  console.log(tweets);

  return (
    <form onSubmit={onSubmit}>
      <input
        value={tweet}
        onChange={onChange}
        type="text"
        placeholder="100자 이내로 입력해 주세요."
        maxLength={100}
      />

      <input type="submit" value="등록" />
    </form>
  );
};

export default Home;
