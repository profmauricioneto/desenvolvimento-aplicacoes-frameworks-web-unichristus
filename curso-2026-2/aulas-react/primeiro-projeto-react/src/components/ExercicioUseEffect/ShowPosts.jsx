import { useEffect, useState } from "react";

const ShowPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        try {
            console.log('Carregando os dados via API');
            fetch('https://jsonplaceholder.typicode.com/posts')
            
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