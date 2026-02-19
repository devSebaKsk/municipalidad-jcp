import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardEmpleadosView() {
  const navigate = useNavigate();

  const handleRecibos = () => {
    navigate('/recibos');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mi Panel</h2>
          <p className="text-gray-600">Gestiona tus recibos de sueldo de forma segura.</p>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-8">
          <div className="dashboard-card w-full max-w-sm aspect-square bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-jcp/10 transition-all group cursor-pointer flex flex-col justify-between">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl mb-6 flex items-center justify-center text-indigo-600">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Mi recibo</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Ver mis recibos de sueldos y poder descargarlos.
            </p>
            <button
              type="button"
              onClick={handleRecibos}
              className="w-full bg-indigo-50 text-indigo-600 font-bold py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-sm"
            >
              Ver recibos
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DashboardEmpleadosView;
