import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@material-ui/icons";
const Post = ({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9baHOhncVkae988ozjCvtL5qngjEMdclwu_Hx5=s83-c-mo" />
      </div>
      <div className="post__body">
        <div className="post__header"></div>
        <div className="post__headerText">
          <h3>
            Brice Vignal
            <span className="post__headerSpecial">
              <VerifiedUser className="post__badge" /> @vignalbrice
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p>I challenge you to build a Twitter Clone with React</p>
        </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
