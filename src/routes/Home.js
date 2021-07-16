import { useState, useEffect } from 'react';

import { firestoreService } from 'firebaseApp';

const Home = ({ currentUser }) => {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  // const getTweets = async () => {
  //   // * get()는 처음에 화면을 렌더링할 때만 실행된다.
  //   const tweets = await firestoreService.collection('tweets').get();

  //   tweets.forEach((document) => {
  //     const tweetObj = { ...document.data(), id: document.id };
  //     setTweets((prev) => [tweetObj, ...prev]);
  //   });
  // };

  const onSubmit = async (event) => {
    event.preventDefault();

    await firestoreService.collection('tweets').add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: currentUser.uid,
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
    // getTweets();

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

      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <h4>{tweet.text}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
