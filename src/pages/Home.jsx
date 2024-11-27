import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaRegFileCode,
} from 'react-icons/fa';

import { MdCatchingPokemon } from 'react-icons/md';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiVite, SiMysql } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className='containerFotoyTexto'>
        <div className='retrato'>
          <img src='/retrato2.png' alt='selfie de Alex' />
        </div>

        {/* Contenedor para el texto y los iconos */}
        <div className='textoYIconos'>
          <div className='texto'>
            <h1>Hi, I'm Alejandro P.</h1>
            <h2>Software Developer</h2>
          </div>
          <div className='iconosContact'>
            <ul>
              <li>
                <a href='mailto:aperezbanksbanks@gmail.com' aria-label='Email'>
                  <FaEnvelope className='icono' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/alexander-perez-banks/'
                  target='_blank'
                  aria-label='LinkedIn'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin className='icono' />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/APerezBanks'
                  target='_blank'
                  aria-label='GitHub'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='icono' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className='navHome'>
        <ul>
          <li>
            <Link to='/proyects'>Proyectos</Link>
          </li>
          <li>
            <Link to='/aboutme'>Sobre mí</Link>
          </li>
          <li>
            <Link to='/contact'>Contactarme</Link>
          </li>
        </ul>
      </nav>

      <div className='latestP'>
        <FaRegFileCode id='icono-lp' />
        <h3> Lastest Project</h3>
      </div>

      <div className='projectDemo'>
        <div className='contentHome'>
          <div className='fotoproyecto'>
            <img src='/innovaspace.png' alt='coworking screenshot' />
          </div>
          <div className='textoproject'>
            <h4>Coworking InnovaSpace</h4>
            <p>
              Innovaspace es una app desarrollada con React, CSS, Node.js y
              MySQL para la gestión de espacios de coworking. Permite a usuarios
              buscar, filtrar, reservar y calificar espacios, mientras que los
              administradores pueden gestionar reservas, incidencias y
              actualizar información de los espacios en una plataforma eficiente
              y fácil de usar.
            </p>
            <a href='./pages/ProyectsPage.jsx'>Ver más</a>
          </div>
        </div>
        <div className='tecnologias'>
          <ul>
            <li>
              <FaHtml5 title='HTML' />
            </li>
            <li>
              <FaCss3Alt title='CSS' />
            </li>
            <li>
              <FaJs title='JavaScript' />
            </li>
            <li>
              <SiVite title='Vite' />
            </li>
            <li>
              <FaReact title='React' />
            </li>
            <li>
              <SiMysql title='SQL' />
            </li>
            <li>
              <FaGitAlt title='Git' />
            </li>
          </ul>
        </div>
      </div>
      <div className='projectDemo'>
        <div className='contentHome'>
          <div className='fotoproyecto'>
            <img src='/pokedex.png' alt='coworking screenshot' />
          </div>
          <div className='textoproject'>
            <h4>Pokedex</h4>
            <p>
              Aplicación web hecha con JavaScript que permite buscar y explorar
              Pokémon por nombre usando la API oficial. Muestra una ficha
              detallada con estadísticas, tipos y sus imágenes frontal y
              posterior.
            </p>
            <a href='./pages/ProyectsPage.jsx'>Ver más</a>
          </div>
        </div>
        <div className='tecnologias'>
          <ul>
            <li>
              <FaHtml5 id='htmlIcon' title='HTML' />
            </li>
            <li>
              <FaCss3Alt title='CSS' />
            </li>
            <li>
              <FaJs title='JavaScript' />
            </li>
            <li>
              <MdCatchingPokemon id='pokeball' title='Pokeball' />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
