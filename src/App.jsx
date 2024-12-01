import { Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/home.css';
import './styles/footer.css';
import './styles/aboutme.css';
import './styles/contacto.css';
import Header from './components/Header.jsx';

import Home from './pages/Home.jsx';
import ProyectsPage from './pages/ProyectsPage.jsx';
import AboutmePage from './pages/AboutmePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <main className='contentX'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/proyects' element={<ProyectsPage />} />
          <Route path='/aboutme' element={<AboutmePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
