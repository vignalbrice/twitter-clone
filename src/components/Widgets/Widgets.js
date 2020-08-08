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
        <Search classNaeme="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
      </div>
    </div>
  );
};

export default Widgets;
