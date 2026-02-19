import React from 'react';
import { useNavigate } from 'react-router-dom';

function IdentityCaptureView() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard-empleados');
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center relative z-40 bg-gray-50/50 backdrop-blur-sm">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative z-10 mx-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-jcp">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm0 0c0 2.761 2.239 5 5 5s5-2.239 5-5-2.239-5-5-5-5 2.239-5 5zm-9 9h18"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-jcp mb-2 tracking-tight">Verificacion de identidad</h2>
          <p className="text-gray-500 text-sm">
            Subi tres fotos: DNI frente, DNI dorso y una selfie. Podes usar la camara del telefono.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-gray-700 mb-3">DNI frente</h3>
              <label className="block text-sm text-gray-500 mb-3">Subi una foto clara del frente.</label>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                required
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-jcp file:text-white file:font-semibold hover:file:bg-jcp-dark"
              />
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-gray-700 mb-3">DNI dorso</h3>
              <label className="block text-sm text-gray-500 mb-3">Subi una foto clara del dorso.</label>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                required
                className="w-full text-sm  text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-jcp file:text-white file:font-semibold hover:file:bg-jcp-dark"
              />
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 text-center">
            <h3 className="text-sm font-bold text-gray-700 mb-3">Selfie</h3>
            <label className="block text-sm text-gray-500 mb-3">Subi una selfie con buena luz.</label>
            <input
              type="file"
              accept="image/*"
              capture="user"
              required
              className="w-full md:w-1/2 mx-auto text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-jcp file:text-white file:font-semibold hover:file:bg-jcp-dark align-middle"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-jcp text-white py-4 rounded-xl font-bold shadow-lg shadow-jcp/30 hover:bg-jcp-dark transform hover:-translate-y-0.5 transition-all"
          >
            Continuar
          </button>
        </form>

        <button
          type="button"
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-400 hover:text-jcp p-2 rounded-lg hover:bg-gray-100 transition-all"
          title="Volver"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default IdentityCaptureView;
