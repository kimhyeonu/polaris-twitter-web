import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import { firestoreService, storageService } from 'firebaseApp';

const TweetFactory = ({ currentUser }) => {
  const [tweet, setTweet] = useState('');
  const [attachment, setAttachment] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    if (tweet === '') {
      return;
    }

    let attachmentUrl = '';

    // * 첨부 파일(사진)이 존재할 경우에만 스토리지 레퍼런스를 생성한다.
    if (attachment !== '') {
      const attachmentRef = storageService
        .ref()
        .child(`${currentUser.uid}/${uuidV4()}`);

      const response = await attachmentRef.putString(attachment, 'data_url');

      attachmentUrl = await response.ref.getDownloadURL();
    }

    await firestoreService.collection('tweets').add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: currentUser.uid,
      attachmentUrl,
    });

    setTweet('');
    setAttachment('');
  };

  const onChange = (event) => {
    event.preventDefault();

    const {
      target: { value },
    } = event;

    setTweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const file = files[0];

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };

    reader.readAsDataURL(file);
  };

  const onClearAttachment = () => setAttachment('');

  return (
    <form onSubmit={onSubmit} className="tweet-factory-form">
      <div className="tweet-factory-form__container">
        <input
          className="tweet-factory-form__input"
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="100자 이내로 입력해 주세요."
          maxLength={100}
        />

        <input
          type="submit"
          value="&rarr;"
          className="tweet-factory-form__arrow"
        />
      </div>

      <label for="attach-file" className="tweet-factory-form__label">
        <span>사진 첨부</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>

      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{ opacity: 0 }}
      />

      {attachment && (
        <div className="tweet-factory-form__attachment">
          <img
            src={attachment}
            alt=""
            style={{ backgroundImage: attachment }}
          />

          <div
            className="tweet-factory-form__clear"
            onClick={onClearAttachment}
          >
            <span>삭제</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};

export default TweetFactory;
