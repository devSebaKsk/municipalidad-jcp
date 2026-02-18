import React from 'react';
import { Link } from 'react-router-dom';

function LoginView() {
  return (
    <div id="login-view" className="hidden min-h-screen pt-20 flex items-center justify-center relative z-40 bg-gray-50/50 backdrop-blur-sm">
      <div
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative z-10 mx-4 opacity-0 transform translate-y-4"
        id="login-card"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-jcp">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-jcp mb-2 tracking-tight">Acceso Vecino</h2>
          <p className="text-gray-500 text-sm">Gestioná tus trámites de forma segura.</p>
        </div>

        <form id="login-form" className="space-y-5" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">DNI</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  ></path>
                </svg>
              </span>
              <input
                type="number"
                className="login-input w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-jcp focus:border-transparent outline-none text-gray-700 font-medium placeholder-gray-400"
                placeholder="Ej: 12345678"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Contraseña</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </span>
              <input
                type="password"
                className="login-input w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-jcp focus:border-transparent outline-none text-gray-700 font-medium placeholder-gray-400"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm pt-2">
            <label className="flex items-center text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded text-jcp focus:ring-jcp border-gray-300" /> Recordarme
            </label>
            <Link to="/" className="text-jcp font-bold hover:underline">
              ¿Olvidaste tu clave?
            </Link>
          </div>

          <button type="submit" className="w-full bg-jcp text-white py-4 rounded-xl font-bold shadow-lg shadow-jcp/30 hover:bg-jcp-dark transform hover:-translate-y-0.5 transition-all mt-4">
            Ingresar
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500 mb-6">¿Todavía no tenés cuenta?</p>
          <button className="w-full border-2 border-jcp text-jcp font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
            Crear cuenta nueva
          </button>
        </div>

        <button
          id="btn-volver"
          className="absolute top-4 left-4 text-gray-400 hover:text-jcp p-2 rounded-lg hover:bg-gray-100 transition-all"
          title="Volver al inicio"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LoginView;
