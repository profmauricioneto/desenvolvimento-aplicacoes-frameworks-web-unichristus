import React, { useEffect, useState } from "react";
import Post from "./Post";

const GetPosts = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        console.log(`Carregando os dados via API!`);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => resp.json())
        .then((data) => {
            setPost(data)
            console.log('Dado recebido', post);
        })
    },[])

    return (
      <div>
        {post.map((p, index) => (
          <Post key={index} userId={p.userId} title={p.title} body={p.body} />
        ))}
      </div>
    );
}

export default GetPosts;