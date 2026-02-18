import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLoginEmpleados = () => {
    navigate('/login-empleados');
  };

  const handleLoginVecino = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    // Aquí puedes agregar lógica de cierre de sesión
    navigate('/');
  };

  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white backdrop-blur-md rounded-2xl shadow-lg border border-white/20 px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center cursor-pointer logo-container opacity-0" id="logo-btn">
            <img
              src="logo.png"
              alt="Municipalidad de José C. Paz"
              className="h-20 object-contain"
            />
          </Link>

          <div className="hidden md:flex space-x-8 text-sm font-bold nav-links" id="public-links">
            <Link to="/" className="text-[#0b4369] hover:text-blue-500 transition-colors relative group opacity-0 translate-y-2">
              Trámites
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/" className="text-[#0b4369] hover:text-blue-500 transition-colors relative group opacity-0 translate-y-2">
              Salud
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/" className="text-[#0b4369] hover:text-blue-500 transition-colors relative group opacity-0 translate-y-2">
              Educación
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/" className="text-[#0b4369] hover:text-blue-500 transition-colors relative group opacity-0 translate-y-2">
              Transparencia
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          <div id="access-buttons" className="flex gap-3">
            <button
              id="btn-acceso-trabajador"
              onClick={handleLoginEmpleados}
              className="bg-white hover:bg-jcp-light hover:text-white border border-jcp text-jcp px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-jcp/30 transform hover:-translate-y-0.5 transition-all nav-btn opacity-0"
            >
              Porta Empleados
            </button>

            <button
              id="btn-acceso"
              onClick={handleLoginVecino}
              className="bg-jcp hover:bg-jcp-light text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-jcp/30 transform hover:-translate-y-0.5 transition-all nav-btn opacity-0"
            >
              Acceso Vecino
            </button>
          </div>

          <div id="user-menu" className="hidden flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600 hidden md:block">
              Hola, <span className="text-jcp font-bold">Vecino</span>
            </span>
            <button
              id="btn-logout"
              onClick={handleLogout}
              className="bg-red-50 text-red-600 hover:bg-red-100 px-5 py-2 rounded-xl text-sm font-bold transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
