import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const ContactPage = () => {
  // Obtener la ubicación actual con useLocation
  const location = useLocation();
  const [mostrarImagen, setMostrarImagen] = useState(false);
  const [mostrarCv, setMostrarCv] = useState(false);
  const cerrarModal = (e) => {
    if (e.target.className === 'modal') {
      setMostrarImagen(false);
      setMostrarCv(false);
    }
  };

  return (
    <div className='maindivcontact'>
      <nav className='navHome'>
        <ul>
          <li className={location.pathname === '/proyects' ? 'active' : ''}>
            <Link to='/proyects'>Proyectos</Link>
          </li>
          <li className={location.pathname === '/aboutme' ? 'active' : ''}>
            <Link to='/aboutme'>Sobre mí</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to='/contact'>Contactarme</Link>
          </li>
        </ul>
      </nav>

      <div className='contactofondo'>
        <div className='tarjeta' onClick={() => setMostrarImagen(true)}>
          <img src='/tarjeta.png' alt='tarjeta de contacto de Alex' />
        </div>

        {mostrarImagen && (
          <div className='modal' onClick={cerrarModal}>
            <img
              src='/bussinescard.png'
              alt='tarjeta de contacto ampliada'
              className='imagen-ampliada'
            />
          </div>
        )}
      </div>

      <div className='cv'>
        <img
          src='/cvAlex.png'
          alt='CV de Alex'
          onClick={() => setMostrarCv(true)} // Hacer clic en la imagen para mostrar el modal del CV
        />
      </div>

      {/* Modal para el CV */}
      {mostrarCv && (
        <div className='modal' onClick={cerrarModal}>
          <img
            src='/cvAlex.png'
            alt='CV ampliado'
            className='imagen-ampliada'
          />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
