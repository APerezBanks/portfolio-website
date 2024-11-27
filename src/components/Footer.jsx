import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='contact-info'>
            <h4>Contacto</h4>
            <p>
              Email: <br />
              <a href='mailto:correo@ejemplo.com'>aperezbanks@gmail.com</a>
            </p>
            <p>
              Teléfono:
              <br />
              <a href='tel:+123456789'>+34 673 11 58 59</a>
            </p>
          </div>

          <div className='quick-links'>
            <h4>Enlaces</h4>
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/aboutme'>Sobre mí</Link>
              </li>
              <li>
                <Link to='/proyects'>Proyectos</Link>
              </li>
              <li>
                <Link to='/contact'>Contacto</Link>
              </li>
            </ul>
          </div>

          <div className='social-media'>
            <h4>Sígueme</h4>
            <ul>
              <li>
                <a
                  href='https://github.com/APerezBanks'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/alexander-perez-banks/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>© 2024 Alejandro P Banks. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
