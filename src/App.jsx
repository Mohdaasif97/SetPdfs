
import { HelmetProvider } from 'react-helmet-async';
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UploadArea from './components/UploadArea';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function App() {
  const uploadRef = useRef(null);

  const Home = () => {
    return (
      <main className="w-full bg-gradient-to-br from-slate-50 to-slate-100">
        <UploadArea ref={uploadRef} />
        <Services uploadRef={uploadRef} />
        <FAQ />
      </main>
    );
  };

  return (
    <Router>
      <div className="min-h-screen w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uber-uns" element={<AboutUs />} />
          <Route path="/datenschutz" element={<Privacy />} />
          <Route path="/agb" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;