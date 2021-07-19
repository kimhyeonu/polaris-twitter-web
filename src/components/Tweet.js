import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { firestoreService, storageService } from 'firebaseApp';

const Tweet = ({ tweet, isOwner }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newTweetText, setNewTweetText] = useState(tweet.text);

  const onDeleteClick = async () => {
    const isDeleted = window.confirm('트윗을 삭제하시겠습니까?');

    if (isDeleted) {
      await firestoreService.doc(`tweets/${tweet.id}`).delete();

      if (tweet.attachmentUrl !== '') {
        await storageService.refFromURL(tweet.attachmentUrl).delete();
      }
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
    <div className="tweet">
      {isEditable ? (
        <Fragment>
          <form onSubmit={onSubmit} className="container tweet-edit">
            <input
              onChange={onChange}
              value={newTweetText}
              required
              placeholder="트윗을 수정하세요."
              autoFocus
              className="form-input"
            />

            <input type="submit" value="확인" className="form-button" />
          </form>

          <button onClick={onEditClick} className="form-button cancel-button">
            취소
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <h4>{tweet.text}</h4>

          {tweet.attachmentUrl && (
            <img src={tweet.attachmentUrl} alt="" width="50px" height="50px" />
          )}

          {isOwner && (
            <div className="tweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>

              <span onClick={onEditClick}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Tweet;
