const Greeting = (props) => {
    return (
      <>
        <h2>Hello {props.name}</h2>
        <p>Your age: {props.age}</p>
        <p>I'm glad you here!</p>
      </>
    );
}

export default Greeting;