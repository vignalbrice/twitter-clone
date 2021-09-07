import React from "react";
import "./Post.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@material-ui/icons";

const Post = React.forwardRef(
  (
    { displayName, username, verified, timestamp, text, image, avatar },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header"></div>
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {verified && <VerifiedUser className="post__badge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <IconButton>
              <ChatBubbleOutline fontSize="small" />
            </IconButton>
            <IconButton>
              <Repeat fontSize="small" />
            </IconButton>
            <IconButton>
              <FavoriteBorder fontSize="small" />
            </IconButton>
            <IconButton>
              <Publish fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
