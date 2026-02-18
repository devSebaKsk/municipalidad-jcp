import React from 'react';

function ServicesSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative z-20">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 section-header">
        <div>
          <span className="text-jcp font-bold tracking-wider uppercase text-sm mb-2 block">Trámites Online</span>
          <h2 className="text-4xl font-bold text-gray-900">¿Qué necesitás hacer hoy?</h2>
        </div>
        <a href="#" className="hidden md:flex items-center text-jcp font-bold hover:text-jcp-light transition-colors mt-4 md:mt-0 group">
          Ver todos los trámites
          <span className="bg-jcp text-white rounded-full p-1 ml-2 group-hover:translate-x-1 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service-card bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-jcp/10 group cursor-pointer relative overflow-hidden opacity-0 translate-y-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-110 group-hover:bg-blue-100"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-jcp transition-colors">Licencias</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">Renová tu registro o sacalo por primera vez. Sistema de turnos ágil.</p>
            <div className="flex items-center text-jcp font-bold group-hover:translate-x-2 transition-transform">
              Solicitar turno
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="service-card bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-jcp/10 group cursor-pointer relative overflow-hidden opacity-0 translate-y-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-110 group-hover:bg-teal-100"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-teal-500 rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">Salud</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">Red de hospitales y centros. Turnos online y especialidades médicas.</p>
            <div className="flex items-center text-teal-600 font-bold group-hover:translate-x-2 transition-transform">
              Ver centros
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="service-card bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-jcp/10 group cursor-pointer relative overflow-hidden opacity-0 translate-y-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-110 group-hover:bg-amber-100"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-amber-500 rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">Tasas</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">Descargá tus boletas y pagá online. Planes de pago vigentes.</p>
            <div className="flex items-center text-amber-600 font-bold group-hover:translate-x-2 transition-transform">
              Pagar ahora
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
