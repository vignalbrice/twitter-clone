import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1050118621198921728"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="wholeever"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.cowm/bricevignal"}
          options={{
            text: "#reactjstwitter made by vignalbrice is awesome",
            via: "vignalbrice",
          }}
        />
      </div>
    </div>
  );
};

export default Widgets;
