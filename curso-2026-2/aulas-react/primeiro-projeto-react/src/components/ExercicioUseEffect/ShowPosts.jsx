import { useEffect, useState } from "react";
import Post from "./Post";

const ShowPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('Carregando os dados via API');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => setPosts(data))
        .catch((error) => console.log(`Um erro ocorreu: ${error}`));
        console.log(`terminou de carregar!`);
        
    }, []);

    return (
      <>
        <h2>Dados Recebidos pela API</h2>
        {posts.map((p, index) => (
          <Post key={index} title={p.title} body={p.body} userId={p.userId} />
        ))}
      </>
    );
}

export default ShowPosts;