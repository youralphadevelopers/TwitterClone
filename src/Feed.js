import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import index from "./images/index.jpg";
import index2 from "./images/index2.jpg";

const Feed = () => {
  const posts = [
    {
      displayName: "Dev Mishra",
      userName: "devRandka",
      verified: true,
      text: "STOP THE COUNT!!!",
      image:
        "blob:https://web.whatsapp.com/14153a31-8612-4687-886c-33578c01b885",
      avatar: index,
    },
    {
      displayName: "Vishal Hosmani",
      userName: "VishalTheHoe",
      verified: false,
      text: "DM me for rates",
      image: "",
      avatar: index2,
    },
    {
      displayName: "AlphaDevelopers",
      userName: "Alpha123",
      verified: true,
      text: "Follow us for programming posts",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTTDV75POhX2vIgD4t2eZrpR59WK2qb-lFQ&usqp=CAU",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTTDV75POhX2vIgD4t2eZrpR59WK2qb-lFQ&usqp=CAU",
    },
    {
      displayName: "RT",
      userName: "srt",
      verified: true,
      text: "HELLO THERE",
      image: "",
      avatar:
        "https://lh3.googleusercontent.com/-6RpAiux8aYE/XW6NuJTJWNI/AAAAAAAAMVE/gRShFiTF1hwiiHEa8g6VSkG1N5PD5wmnwCEwYBhgLKtQDAL1Ocqw_EeONfNZHOx5ixIVb1H2Fue4nowfJwaL21e8Aj1lFy2EVW-k0vEH5sUhPDTW9F-vfwpb__Z41rzpGB08lwEOYoN-DrdCG_7RjTIoTDGm1N-WDX0k-TmPfdphT3wXKdlpvt02EocVu5T4Ys-zqAW6ItfsO8JkZSQxky-M9JRb4r9_PEPLZPpQCrMQvcL03gelyOPflXARxpj0UUrRUc0xjUUJjdgJc24XEfErATjwkNYIyciTtVQe7CX9C9-kLlYrBpqxhraep5DVu7h5oduke-B25pcS8MhPRX0slL6A70ALNeV5hKCexGEeRXtCOm-L76mYHgTNdy5WUGbdmFSwfPKdiFviOJMHMj4CebQsVWxtP_PEewleqo2Cx7kUocleCk-kCIg9kRD-pbqrWOcpPxopjQ0a7ZZHU92KcN_LwHBsG1hmCy89jWy9P_251CN4T82oh-Fv8GczjMjhytYxDCQH3mvs5uC2aa5V2uGR4Qh5J0Gdk1XqKqHyBjHLAgJg-e4IK74Qy1MJ6qpIhD22IMuWdZC7n0s6cmgfPso8MIrF8jyJvZCKjFIuPTk9Qxc6_VxOF5A0vIXRt0yklCBx3xuWi3ufFtYkXQ6kqPcoJMPv7lf0F/w140-h140-p/2019-09-03.jpg",
    },
  ];

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>home</h1>
      </div>
      {/* tweetbox */}

      <TweetBox />
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Feed;
