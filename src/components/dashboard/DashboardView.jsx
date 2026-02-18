import React from 'react';

function DashboardView() {
  return (
    <div id="dashboard-view" className="hidden min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 dashboard-header opacity-0 translate-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mi Panel</h2>
          <p className="text-gray-600">Bienvenido de nuevo. Gestioná tus servicios municipales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="dashboard-card bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-jcp/10 transition-all group cursor-pointer opacity-0 translate-y-4">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl mb-6 flex items-center justify-center text-blue-600">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Licencias</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Renová tu registro o sacalo por primera vez. Sistema de turnos ágil.</p>
            <button className="w-full bg-blue-50 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm">
              Solicitar turno
            </button>
          </div>

          <div className="dashboard-card bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-jcp/10 transition-all group cursor-pointer opacity-0 translate-y-4">
            <div className="w-14 h-14 bg-teal-100 rounded-2xl mb-6 flex items-center justify-center text-teal-600">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Salud</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Red de hospitales y centros. Turnos online y especialidades médicas.</p>
            <button className="w-full bg-teal-50 text-teal-600 font-bold py-3 rounded-xl hover:bg-teal-600 hover:text-white transition-all text-sm">
              Ver centros
            </button>
          </div>

          <div className="dashboard-card bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-jcp/10 transition-all group cursor-pointer opacity-0 translate-y-4">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl mb-6 flex items-center justify-center text-amber-600">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Tasas</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Descargá tus boletas y pagá online. Planes de pago vigentes.</p>
            <button className="w-full bg-amber-50 text-amber-600 font-bold py-3 rounded-xl hover:bg-amber-600 hover:text-white transition-all text-sm">
              Pagar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardView;
