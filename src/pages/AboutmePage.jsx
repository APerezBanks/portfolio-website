import { ImProfile } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';

const AboutmePage = () => {
  // Obtener la ubicación actual con useLocation
  const location = useLocation();

  return (
    <>
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
      <div className='aboutmehead'>
        <ImProfile id='aboutmeIcon' />
        <h2>About me.</h2>
      </div>
      <div className='aboutme'>
        <div className='aboutmetext'>
          <p>
            Hola, soy Alex. Lo primero, ¡muchas gracias por pasarte por esta
            parte de mi página web! Soy un aspirante a software developer
            ubicado en la zona de Alicante.
            <br /> <br /> Recientemente he terminado mi segundo bootcamp con
            Hack a Boss en programación full stack y estoy activamente en la
            búsqueda de convertirme en la próxima pieza clave de tu empresa.
            Aparte de ser bilingüe en español e inglés, tengo un título de grado
            superior en sonido y un diploma en diseño de audio para videojuegos.
          </p>
          <div className='aboutmeimg'>
            <img src='/varsovia.jpg' alt='foto de Alex en varsovia' />
          </div>
          <p>
            Vivo en la soleada ciudad de Benidorm, España, donde gestiono un
            negocio familiar Vesta Caffe. <br /> Fuera del mundo tech, practico
            deportes como crossfit, me encanta la música (actualmente mi grupo
            favorito es The Story So Far) y The Office será para siempre mi
            serie favorita.
          </p>

          <div className='imagenesvarias'>
            <img src='/benidorm.jpg' alt='skyline de benidorm' />
            <img src='/tssf.jpg' alt='the story so far' />
            <img
              src='/theoffice.jpg'
              alt='foto promocional de la serie the office'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutmePage;
