import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/-6RpAiux8aYE/XW6NuJTJWNI/AAAAAAAAMVE/gRShFiTF1hwiiHEa8g6VSkG1N5PD5wmnwCEwYBhgLKtQDAL1Ocqw_EeONfNZHOx5ixIVb1H2Fue4nowfJwaL21e8Aj1lFy2EVW-k0vEH5sUhPDTW9F-vfwpb__Z41rzpGB08lwEOYoN-DrdCG_7RjTIoTDGm1N-WDX0k-TmPfdphT3wXKdlpvt02EocVu5T4Ys-zqAW6ItfsO8JkZSQxky-M9JRb4r9_PEPLZPpQCrMQvcL03gelyOPflXARxpj0UUrRUc0xjUUJjdgJc24XEfErATjwkNYIyciTtVQe7CX9C9-kLlYrBpqxhraep5DVu7h5oduke-B25pcS8MhPRX0slL6A70ALNeV5hKCexGEeRXtCOm-L76mYHgTNdy5WUGbdmFSwfPKdiFviOJMHMj4CebQsVWxtP_PEewleqo2Cx7kUocleCk-kCIg9kRD-pbqrWOcpPxopjQ0a7ZZHU92KcN_LwHBsG1hmCy89jWy9P_251CN4T82oh-Fv8GczjMjhytYxDCQH3mvs5uC2aa5V2uGR4Qh5J0Gdk1XqKqHyBjHLAgJg-e4IK74Qy1MJ6qpIhD22IMuWdZC7n0s6cmgfPso8MIrF8jyJvZCKjFIuPTk9Qxc6_VxOF5A0vIXRt0yklCBx3xuWi3ufFtYkXQ6kqPcoJMPv7lf0F/w140-h140-p/2019-09-03.jpg" />
          <input placeholder="what's happening" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional:Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
