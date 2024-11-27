import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import { FaCode } from 'react-icons/fa'; // Importar el icono de React Icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header'>
      <div className='header-left'>
        <Link to='/'>
          <FaCode className='logo' />
          <span className='header-text'>APB</span>
        </Link>
      </div>

      <div className='header-right'>
        {/* Icono de hamburguesa "☰" */}
        <button className='menu-button' onClick={toggleMenu}>
          ☰
        </button>

        {/* Menú desplegable */}
        {isOpen && (
          <nav className='menu'>
            <ul>
              <li>
                <a href='/proyects'>Proyectos</a>
              </li>
              <li>
                <a href='/aboutme'>Sobre mí</a>
              </li>
              <li>
                <a href='/contact'>Contacto</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
