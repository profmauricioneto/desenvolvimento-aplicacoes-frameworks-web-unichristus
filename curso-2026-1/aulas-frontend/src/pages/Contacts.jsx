import React from 'react';

const Contacts = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Cabeçalho da Página */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h1 className="font-bold text-5xl text-center text-indigo-600 mb-4">
          Entre em Contato
        </h1>
        <p className="text-center text-gray-600 text-lg">
          Estamos aqui para ajudar você
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Informações de Contato */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Informações de Contato
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contato@exemplo.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Telefone</h3>
                  <p className="text-gray-600">(85) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Endereço</h3>
                  <p className="text-gray-600">Fortaleza, Ceará, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Horário de Atendimento</h3>
            <p className="text-indigo-100">Segunda a Sexta: 8h às 18h</p>
            <p className="text-indigo-100">Sábado: 8h às 12h</p>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Envie uma Mensagem
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nome
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
