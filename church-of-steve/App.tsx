
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Beliefs from './pages/Beliefs';
import Rituals from './pages/Rituals';
import Donate from './pages/Donate';
import Testimonials from './pages/Testimonials';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Confessions from './pages/Confessions';
import Wisdom from './pages/Wisdom';
import FAQ from './pages/FAQ';
import Join from './pages/Join';

// Simple Router Hook
const useHashPath = () => {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0); // Reset scroll on route change
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash || '#/';
};

const App: React.FC = () => {
  const path = useHashPath();

  const renderPage = () => {
    switch (path) {
      case '#/':
      case '#':
        return <Home />;
      case '#/about':
        return <About />;
      case '#/beliefs':
        return <Beliefs />;
      case '#/rituals':
        return <Rituals />;
      case '#/donate':
        return <Donate />;
      case '#/testimonials':
        return <Testimonials />;
      case '#/shop':
        return <Shop />;
      case '#/gallery':
        return <Gallery />;
      case '#/contact':
        return <Contact />;
      case '#/confessions':
        return <Confessions />;
      case '#/wisdom':
        return <Wisdom />;
      case '#/faq':
        return <FAQ />;
      case '#/join':
        return <Join />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
