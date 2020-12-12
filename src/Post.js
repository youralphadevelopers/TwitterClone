import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavouriteBorderIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";
// import { Avatar } from "@material-ui/core";

const Post = ({ displayName, userName, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {" "}
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />} @
                {userName}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavouriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
    // <div className="post">
    //   <div className="post__avatar">
    //     <Avatar src="https://lh3.googleusercontent.com/-6RpAiux8aYE/XW6NuJTJWNI/AAAAAAAAMVE/gRShFiTF1hwiiHEa8g6VSkG1N5PD5wmnwCEwYBhgLKtQDAL1Ocqw_EeONfNZHOx5ixIVb1H2Fue4nowfJwaL21e8Aj1lFy2EVW-k0vEH5sUhPDTW9F-vfwpb__Z41rzpGB08lwEOYoN-DrdCG_7RjTIoTDGm1N-WDX0k-TmPfdphT3wXKdlpvt02EocVu5T4Ys-zqAW6ItfsO8JkZSQxky-M9JRb4r9_PEPLZPpQCrMQvcL03gelyOPflXARxpj0UUrRUc0xjUUJjdgJc24XEfErATjwkNYIyciTtVQe7CX9C9-kLlYrBpqxhraep5DVu7h5oduke-B25pcS8MhPRX0slL6A70ALNeV5hKCexGEeRXtCOm-L76mYHgTNdy5WUGbdmFSwfPKdiFviOJMHMj4CebQsVWxtP_PEewleqo2Cx7kUocleCk-kCIg9kRD-pbqrWOcpPxopjQ0a7ZZHU92KcN_LwHBsG1hmCy89jWy9P_251CN4T82oh-Fv8GczjMjhytYxDCQH3mvs5uC2aa5V2uGR4Qh5J0Gdk1XqKqHyBjHLAgJg-e4IK74Qy1MJ6qpIhD22IMuWdZC7n0s6cmgfPso8MIrF8jyJvZCKjFIuPTk9Qxc6_VxOF5A0vIXRt0yklCBx3xuWi3ufFtYkXQ6kqPcoJMPv7lf0F/w140-h140-p/2019-09-03.jpg" />
    //   </div>
    //   <div className="post__body">
    //     <div className="post__header">
    //       <div className="post__headerText" />
    //       <h3>
    //         {" "}
    //         Dev Mishra{" "}
    //         <span>
    //           <VerifiedUserIcon className="post__badge" />
    //         </span>
    //       </h3>
    //     </div>
    //     <div className="post__headerDescription">
    //       <p>STOP THE COUNT</p>
    //     </div>
    //     <img
    //       src="https://media.giphy.com/media/143cE5FtVmKrNC/giphy.gif"
    //       alt=""
    //     />
    //   </div>

    //   <div className="post__footer">
    //     <ChatBubbleOutlineIcon fontSize="small" />
    //     <RepeatIcon fontSize="small" />
    //     <FavouriteBorderIcon fontSize="small" />
    //     <PublishIcon fontSize="small" />
    //   </div>
    // </div>
  );
};

export default Post;
