import React from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import { db } from "../../API/firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(posts.map((p) => p.timestamp));
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((p) => (
          <Post
            key={p.text}
            displayName={p.displayName}
            username={p.username}
            verified={p.verified}
            text={p.text}
            avatar={p.avatar}
            image={p.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
