import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../API/firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [tweetImage, setTweetImage] = React.useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        displayName: "Vignal Brice",
        username: "bvignal",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://yt3.ggpht.com/a-/AOh14Ghp2FI1DxLapFg3dWSTfZgA7FWFMYFyhTmwPXEAKQ=s88-c-k-c0xffffffff-no-rj-mo",
      })
      .then(() => {
        setTweetMessage("");
        setTweetImage("");
      });
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://lh3.googleusercontent.com/ogw/ADGmqu9baHOhncVkae988ozjCvtL5qngjEMdclwu_Hx5=s83-c-mo"
            sizes={64}
          />
          <input
            placeholder="What's happening?"
            type="text"
            className="tweetBox__input"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          <input
            className="tweetBox__inputImage"
            placeholder="Optional: Enter image URL"
            type="text"
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
