import React from "react";

const Post = (props) => {
    return (
        <>
            <div>
                <p>{props.userId}</p>
                <p>{props.title}</p>
                <p>{props.body}</p>
            </div>
        </>
    )
}

export default Post;