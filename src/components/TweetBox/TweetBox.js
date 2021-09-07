import React from "react";
import "./TweetBox.css";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { db, storage, timestamp } from "../../API/firebase";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import EventIcon from "@material-ui/icons/Event";
import { CloseRounded } from "@material-ui/icons";
import Picker from "emoji-picker-react";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [tweetImage, setTweetImage] = React.useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState("");
  const [chosenEmoji] = React.useState(null);
  const [isOpenEmoji, setIsOpenEmoji] = React.useState(false);
  const LOADING_IMG = "https://www.google.com/images/spin-32.gif?a";

  const onEmojiClick = (event, emojiObject) => {
    setTweetMessage(tweetMessage + emojiObject.emoji);
  };

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        displayName: "Vignal Brice",
        username: "bvignal",
        verified: true,
        text: tweetMessage,
        image: tweetImage ? LOADING_IMG : "",
        avatar:
          "https://yt3.ggpht.com/a-/AOh14Ghp2FI1DxLapFg3dWSTfZgA7FWFMYFyhTmwPXEAKQ=s88-c-k-c0xffffffff-no-rj-mo",
        timestamp: timestamp,
      })
      .then((messageRef) => {
        // 1 - Upload the image to Cloud Storage.
        const filePath = `${messageRef.id}"/"${tweetImage.name}`;
        setTweetMessage("");
        setTweetImage("");
        // 2 - Set File Path into Bucket Storage
        const storageRef = storage.ref();
        const ref = storageRef.child(filePath);
        // 3 - Put Name File into Bucket Storage
        ref.put(tweetImage).then((fileSnapshot) => {
          // 4 - Generate a public URL for the file.
          fileSnapshot.ref.getDownloadURL().then((url) => {
            // 5 - Update the chat message placeholder with the image's URL.
            messageRef.update({
              image: url,
            });
          });
        });
      });
  };

  const loadPreviewImage = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setTweetImage(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  console.log(chosenEmoji && chosenEmoji.emoji);
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar
            src='https://lh3.googleusercontent.com/ogw/ADGmqu9baHOhncVkae988ozjCvtL5qngjEMdclwu_Hx5=s83-c-mo'
            sizes={64}
          />
          <input
            placeholder="What's happening?"
            type='text'
            className='tweetBox__input'
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        {imagePreviewUrl.length > 0 && (
          <div className='tweetBox__boxImgPreview'>
            <IconButton onClick={() => setImagePreviewUrl("")}>
              <CloseRounded />
            </IconButton>
            <img
              src={imagePreviewUrl}
              className='tweetBox__imgPreview'
              alt='tweet-img'
            />
          </div>
        )}
        {isOpenEmoji && <Picker onEmojiClick={onEmojiClick} />}
        <div className='tweetBox__contentIcons'>
          <div className='tweetBox__icons'>
            <input
              type='file'
              name='image'
              id='file-input'
              className='tweetBox__inputImage'
              onChange={(e) => loadPreviewImage(e)}
            />
            <label htmlFor='file-input'>
              <IconButton aria-label='upload picture' component='span'>
                <ImageIcon />
              </IconButton>
            </label>
            <IconButton>
              <GifIcon />
            </IconButton>
            <IconButton>
              <FormatAlignLeftIcon />
            </IconButton>
            <IconButton onClick={() => setIsOpenEmoji(!isOpenEmoji)}>
              <SentimentSatisfiedIcon />
            </IconButton>
            <IconButton>
              <EventIcon />
            </IconButton>
          </div>
          <Button
            type='submit'
            onClick={sendTweet}
            className='tweetBox_tweetButton'
            disabled={
              tweetMessage.length > 0 || imagePreviewUrl.length > 0
                ? false
                : true
            }
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
