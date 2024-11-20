import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonMessage, setComingSoonMessage] = useState('');
  const navigate = useNavigate();

  const implementedFeatures = {
    'jpg-zu-pdf': true,
    'png-zu-pdf': true,
    'uber-uns': true,
    'datenschutz': true,
    'agb': true,
  };

  const handleLinkClick = (e, href) => {
    if (!implementedFeatures[href.slice(1)]) {
      e.preventDefault();
      setComingSoonMessage(e.target.innerText);
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 3000);
    }
  };

  const goToMainPage = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const footerLinks = {
    mainServices: [
      { name: 'JPG zu PDF', href: '#', description: 'Konvertieren Sie JPG Bilder kostenlos in PDF' },
      { name: 'PNG zu PDF', href: '#', description: 'PNG Dateien in PDF Format umwandeln' },
      { name: 'Bilder zusammenfügen', href: '/bilder-zusammenfuegen', description: 'Mehrere Bilder in eine PDF Datei kombinieren' },
    ],
    additionalServices: [
      { name: 'PDF Komprimierung', href: '/pdf-komprimieren', description: 'PDF Dateigröße reduzieren' },
      { name: 'PDF Qualität verbessern', href: '/pdf-qualitaet', description: 'PDF Qualität optimieren' },
      { name: 'OCR Text erkennen', href: '/ocr-text', description: 'Text in Bildern erkennen und durchsuchbar machen' },
    ],
    legal: [
      { name: 'Datenschutz', href: '/datenschutz', description: 'Unsere Datenschutzrichtlinien' },
      { name: 'Impressum', href: '/impressum', description: 'Rechtliche Informationen' },
      { name: 'AGB', href: '/agb', description: 'Allgemeine Geschäftsbedingungen' },
    ]
  };

  return (
    <footer className="bg-gray-700 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <button 
              onClick={goToMainPage}
              className="inline-block" 
              aria-label="PDFmaster Homepage"
            >
              <h2 className="text-2xl font-bold">SetPdfs</h2>
            </button>
            <p className="text-gray-300 text-sm">
              Ihr zuverlässiger Partner für PDF-Konvertierung. 
              Kostenlos, sicher und DSGVO-konform.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:SetPdfs@gmail.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Email uns">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PDF Tools</h3>
            <ul className="space-y-2">
              {footerLinks.mainServices.map((link) => (
                <li key={link.href}>
                  {link.href === '#' ? (
                    <button
                      onClick={goToMainPage}
                      className="text-gray-300 hover:text-white transition-colors block text-sm text-left w-full"
                      title={link.description}
                    >
                      {link.name}
                    </button>
                  ) : implementedFeatures[link.href.slice(1)] ? (
                    <button
                      onClick={() => goToPage(link.href)}
                      className="text-gray-300 hover:text-white transition-colors block text-sm text-left w-full"
                      title={link.description}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-gray-300 hover:text-white transition-colors block text-sm"
                      title={link.description}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Weitere Tools</h3>
            <ul className="space-y-2">
              {footerLinks.additionalServices.map((link) => (
                <li key={link.href}>
                  {implementedFeatures[link.href.slice(1)] ? (
                    <button
                      onClick={() => goToPage(link.href)}
                      className="text-gray-300 hover:text-white transition-colors block text-sm text-left w-full"
                      title={link.description}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-gray-300 hover:text-white transition-colors block text-sm"
                      title={link.description}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  {implementedFeatures[link.href.slice(1)] ? (
                    <button
                      onClick={() => goToPage(link.href)}
                      className="text-gray-300 hover:text-white transition-colors block text-sm text-left w-full"
                      title={link.description}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-gray-300 hover:text-white transition-colors block text-sm"
                      title={link.description}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-600 p-4 rounded-lg">
              <span className="block text-xl mb-1" aria-hidden="true">🔒</span>
              <span className="text-sm text-gray-300">SSL Verschlüsselt</span>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <span className="block text-xl mb-1" aria-hidden="true">✓</span>
              <span className="text-sm text-gray-300">DSGVO-konform</span>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <span className="block text-xl mb-1" aria-hidden="true">🇩🇪</span>
              <span className="text-sm text-gray-300">Server in Deutschland</span>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <span className="block text-xl mb-1" aria-hidden="true">⚡</span>
              <span className="text-sm text-gray-300">Kostenlos</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p className="text-sm">
            © {new Date().getFullYear()} SetPdfs. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>

      {/* Coming Soon Toast */}
      {showComingSoon && (
        <div className="fixed bottom-4 right-4 bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          <p className="text-sm">
            {comingSoonMessage} - Demnächst verfügbar!
          </p>
        </div>
      )}
    </footer>
  );
}