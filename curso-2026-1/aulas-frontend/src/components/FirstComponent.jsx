import React from 'react';

export const FirstComponent = props => {
  return (
    <>
      <h1>Welcome Mr(s). {props.name}</h1>
      <p>Your age is: {props.age}</p>
    </>
  );
};

export const HelloWorld = () => {
    return <h1>Hello World!</h1>
}
// function FirstComponent() {
//   return (
//     <div>
//       <h1>Hello World from React!</h1>
//       <p>Testando a função</p>
//     </div>
//   );
// }

// export default FirstComponent;
