import React from 'react';

const Task = props => {
  return (
    <>
      <div className="m-2 p-4 bg-gray-300 border-2 border-black rounded-md">
        <h3 className="text-xl font-bold">
          {props.title}
          {' - '}
          <span className="font-normal">
            {props.completed ? 'Concluído' : 'Pendente'}
          </span>
        </h3>
      </div>
    </>
  );
};

export default Task;
