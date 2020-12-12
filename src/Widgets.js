import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
const Widgets = () => {
  return (
    // jnkjasf
    // smndkasd
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="search twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1320374093170896896"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="defeated__hindu"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/saurav.raveendran"}
          options={{ text: "reactjs isawesome", via: "defeated__hindu" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
