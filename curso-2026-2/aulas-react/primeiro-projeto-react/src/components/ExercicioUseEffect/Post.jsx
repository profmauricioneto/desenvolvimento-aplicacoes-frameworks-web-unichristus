const Post = (props) => {
    return (
      <div className="m-4 p-2 border-2 text-black border-gray-300 hover:bg-blue-600">
        <h3 className="p-2 text-2xl font-bold">{props.title}</h3>
        <p className="p-2 text-xl">{props.body}</p>
        <p>Enviada por: <span className="font-bold">{props.userId}</span></p>
      </div>
    );
}

export default Post;