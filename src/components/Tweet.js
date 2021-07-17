import { useState } from 'react';

import { firestoreService } from 'firebaseApp';

const Tweet = ({ tweet, isOwner }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newTweetText, setNewTweetText] = useState(tweet.text);

  const onDeleteClick = async () => {
    const isDeleted = window.confirm('트윗을 삭제하시겠습니까?');

    if (isDeleted) {
      await firestoreService.doc(`tweets/${tweet.id}`).delete();
    }
  };

  const onEditClick = () => setIsEditable((prev) => !prev);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setNewTweetText(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await firestoreService
      .doc(`tweets/${tweet.id}`)
      .update({ text: newTweetText });
    setIsEditable(false);
  };

  return (
    <div>
      {isEditable ? (
        <>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={newTweetText} required />

            <input type="submit" value="확인" />
          </form>

          <button onClick={onEditClick}>취소</button>
        </>
      ) : (
        <>
          <h4>{tweet.text}</h4>

          {isOwner && (
            <>
              <button onClick={onDeleteClick}>삭제</button>
              <button onClick={onEditClick}>편집</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;
