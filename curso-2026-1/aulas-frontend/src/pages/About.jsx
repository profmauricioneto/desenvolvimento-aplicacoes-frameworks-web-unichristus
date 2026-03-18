import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Cabeçalho da Página */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h1 className="font-bold text-5xl text-center text-indigo-600 mb-4">
          Sobre o Site
        </h1>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <div className="prose prose-lg max-w-none">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">📖</span>
              Nossa História
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              deleniti ipsum sit laborum voluptatem vel modi quas alias in.
              Suscipit vitae mollitia molestias quidem perspiciatis temporibus
              officia modi harum magni.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              Nossa Missão
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              deleniti ipsum sit laborum voluptatem vel modi quas alias in.
              Suscipit vitae mollitia molestias quidem perspiciatis temporibus
              officia modi harum magni.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Tecnologias Utilizadas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              deleniti ipsum sit laborum voluptatem vel modi quas alias in.
              Suscipit vitae mollitia molestias quidem perspiciatis temporibus
              officia modi harum magni.
            </p>
          </div>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl font-bold mb-2">100+</div>
          <div className="text-blue-100">Projetos</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl font-bold mb-2">50+</div>
          <div className="text-purple-100">Clientes</div>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl font-bold mb-2">5+</div>
          <div className="text-pink-100">Anos</div>
        </div>
      </div>
    </div>
  );
};

export default About;
