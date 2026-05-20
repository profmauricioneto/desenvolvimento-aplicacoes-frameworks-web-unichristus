import React from "react";

const Post = (props) => {
    return (
      <>
        <div className="border border-2 rounded m-2 p-2">
          <p>
            <b>UserID:</b> {props.userId}
          </p>
          <p><b>Title: </b>{props.title}</p>
          <p><b>Message:</b>{props.body}</p>
        </div>
      </>
    );
}

export default Post;