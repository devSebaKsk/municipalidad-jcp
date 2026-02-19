import React from 'react';
import { Link } from 'react-router-dom';

const recibos = [
  { id: 1, fecha: 'Enero 2026' },
  { id: 2, fecha: 'Diciembre 2025' },
  { id: 3, fecha: 'Noviembre 2025' },
  { id: 4, fecha: 'Octubre 2025' },
];

function RecibosListView() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mis recibos</h2>
          <p className="text-gray-600">Descarga tus recibos de sueldo por fecha.</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {recibos.map((recibo) => (
              <div key={recibo.id} className="flex items-center justify-between px-6 py-5">
                <div>
                  <p className="text-sm text-gray-500">Fecha del recibo</p>
                  <p className="text-lg font-semibold text-gray-900">{recibo.fecha}</p>
                </div>
                <button className="bg-jcp text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-jcp-dark transition-colors">
                  Descargar
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Link to="/dashboard-empleados" className="text-sm font-bold text-jcp hover:underline">
            Volver al panel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecibosListView;
