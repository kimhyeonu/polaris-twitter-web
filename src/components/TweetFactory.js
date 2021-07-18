import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import { firestoreService, storageService } from 'firebaseApp';

const TweetFactory = ({ currentUser }) => {
  const [tweet, setTweet] = useState('');
  const [attachment, setAttachment] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

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
    <form onSubmit={onSubmit}>
      <input
        value={tweet}
        onChange={onChange}
        type="text"
        placeholder="100자 이내로 입력해 주세요."
        maxLength={100}
      />

      <input type="file" accept="image/*" onChange={onFileChange} />

      <input type="submit" value="등록" />

      {attachment && (
        <div>
          <img src={attachment} alt="" width="50px" height="50px" />
          <button onClick={onClearAttachment}>취소</button>
        </div>
      )}
    </form>
  );
};

export default TweetFactory;
