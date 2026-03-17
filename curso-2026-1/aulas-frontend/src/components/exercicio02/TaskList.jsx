import React from 'react';
import Task from './Task';

const TaskList = () => {
  const tasks = [
    { title: 'Estudar React', completed: false },
    { title: 'Estudar JavaScript', completed: true },
    { title: 'Estudar Hooks', completed: false },
    { title: 'Estudar Componentes Funcionais', completed: true },
    { title: 'Estudar HTML', completed: true },
    { title: 'Estudar Tailwindcss', completed: true },
  ];

  return (
    <>
      <div>
        <h2 className="text-center text-4xl p-4">Lista de Tarefas!</h2>
        {tasks.map((t, index) => (
          <Task key={index} title={t.title} completed={t.completed} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
