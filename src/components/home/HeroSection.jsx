import React from 'react';

function HeroSection() {
  return (
    <section className="hero-container relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left text-white">
          <div className="hero-badge inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 translate-y-4">
            Portal Oficial 2026
          </div>
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight opacity-0 translate-y-8">
            Tu municipio,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">más cerca.</span>
          </h1>
          <p className="hero-text text-xl text-blue-100 mb-10 max-w-lg leading-relaxed opacity-0 translate-y-4">
            Gestioná tus turnos, impuestos y servicios desde un solo lugar con la nueva plataforma digital de José C. Paz.
          </p>
          <div className="hero-btns flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 opacity-0 translate-y-4">
            <button className="bg-white text-jcp px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all">
              Iniciar Trámite
            </button>
            <button className="glass-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transform hover:-translate-y-1 transition-all">
              Ver Servicios
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative hero-visual opacity-0 translate-x-10">
          <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-jcp font-bold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <div className="h-2 w-24 bg-white/40 rounded mb-2"></div>
                <div className="h-2 w-16 bg-white/20 rounded"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-16 bg-white/5 rounded-xl border border-white/10 flex items-center px-4">
                <div className="h-2 w-full bg-gradient-to-r from-white/40 to-transparent rounded"></div>
              </div>
              <div className="h-16 bg-white/5 rounded-xl border border-white/10 flex items-center px-4">
                <div className="h-2 w-3/4 bg-gradient-to-r from-white/40 to-transparent rounded"></div>
              </div>
              <div className="h-16 bg-white/5 rounded-xl border border-white/10 flex items-center px-4">
                <div className="h-2 w-1/2 bg-gradient-to-r from-white/40 to-transparent rounded"></div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-30 z-0"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
