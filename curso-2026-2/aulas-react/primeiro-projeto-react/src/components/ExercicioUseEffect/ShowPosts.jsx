import { useEffect, useState } from "react";

const ShowPosts = () => {

    const [posts, setPosts] = useState([]);

    const async fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsJson = await response.json();
    }

    useEffect(() => {
        try {
            
        } catch (error) {
            console.error('Error ao carregar dados:');
            console.error(error);
        }
    });

    return (
        <>
        </>
    )
}

export default ShowPosts;