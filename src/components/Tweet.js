import { firestoreService } from 'firebaseApp';

const Tweet = ({ tweet, isOwner }) => {
  const onDeleteClick = async () => {
    const isDeleted = window.confirm('트윗을 삭제하시겠습니까?');

    console.log(isDeleted);

    if (isDeleted) {
      console.log(tweet.id);

      const document = await firestoreService
        .doc(`tweets/${tweet.id}`)
        .delete();

      console.log(document);
    }
  };

  return (
    <div>
      <h4>{tweet.text}</h4>

      {isOwner && (
        <>
          <button onClick={onDeleteClick}>삭제</button>
          <button>수정</button>
        </>
      )}
    </div>
  );
};

export default Tweet;
