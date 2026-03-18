import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-105 transition-transform duration-300">
        <h1 className="font-bold text-5xl text-center text-indigo-600 mb-6">
          Bem-vindo ao Site
        </h1>
        <p className="text-center text-gray-600 text-lg">
          Exemplo de Single Page Application com React Router
        </p>
      </div>

      {/* Cards de Conteúdo */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">SPA Moderno</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            deleniti ipsum sit laborum voluptatem vel modi quas alias in.
            Suscipit vitae mollitia molestias quidem perspiciatis temporibus
            officia modi harum magni.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Performance</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            deleniti ipsum sit laborum voluptatem vel modi quas alias in.
            Suscipit vitae mollitia molestias quidem perspiciatis temporibus
            officia modi harum magni.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Design Moderno</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            deleniti ipsum sit laborum voluptatem vel modi quas alias in.
            Suscipit vitae mollitia molestias quidem perspiciatis temporibus
            officia modi harum magni.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">📱</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Responsivo</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            deleniti ipsum sit laborum voluptatem vel modi quas alias in.
            Suscipit vitae mollitia molestias quidem perspiciatis temporibus
            officia modi harum magni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
