import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
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
          />
          <input
            className="tweetBox__inputImage"
            placeholder="Optional: Enter image URL"
            type="text"
          />
        </div>
        <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
