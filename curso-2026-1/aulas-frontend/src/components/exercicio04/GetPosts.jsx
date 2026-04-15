import React, { useEffect, useState } from "react";

const GetPosts = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        console.log(`Carregando os dados via API!`);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => resp.json())
        .then((data) => {
            setPost(data)
            console.log(post);
        })
    },[])

    return (
        <div>

        </div>
    )
}

export default GetPosts;