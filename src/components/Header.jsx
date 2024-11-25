import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { convertImagesToPDF } from '../utils/pdfConverter';

const Logo = () => (
  <img 
    src="/logo.svg" 
    alt="SetPDFs Logo" 
    className="w-10 h-10"
    width="40"
    height="40"
  />
);

export default function Header() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFiles = (newFiles) => {
    const imageFiles = Array.from(newFiles).filter(file => 
      file.type.startsWith('image/') || 
      file.name.match(/\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff)$/i)
    );

    if (imageFiles.length === 0) {
      setError('Bitte wählen Sie mindestens eine Bilddatei aus');
      return;
    }

    const maxSize = 25 * 1024 * 1024;
    const oversizedFiles = imageFiles.filter(file => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      setError(`Einige Dateien sind zu groß (max. 25MB)`);
      return;
    }

    setFiles(imageFiles);
    setError(null);
    setSuccess(false);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      setError('Bitte wählen Sie mindestens ein Bild aus');
      return;
    }

    try {
      setIsConverting(true);
      setError(null);
      await convertImagesToPDF(files);
      setSuccess(true);
      setFiles([]);
    } catch (err) {
      setError('Fehler bei der Konvertierung. Bitte versuchen Sie es erneut.');
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <>
      <Helmet>
      <title>Mehrere Bilder zu PDF | Schneller Konverter | Kostenlos & Sicher</title>
      <meta name="description" content="Konvertieren Sie Ihre Bilder kostenlos in PDF. Unterstützt JPG, PNG und mehr. DSGVO-konform und sicher." />
        <meta name="keywords" content="pdf konverter, bilder zu pdf, jpg zu pdf, png zu pdf, kostenlos" />
        <link rel="canonical" href="https://www.setpdfs.de" />
        <meta property="og:title" content="SetPDFs - Kostenloser Online PDF Konverter" />
        <meta property="og:description" content="Konvertieren Sie Ihre Bilder kostenlos in PDF. DSGVO-konform und sicher." />
        <meta property="og:url" content="https://www.setpdfs.de" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        
        {/* Updated schema markup with both Organization and WebApplication */}
      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://www.schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "url": "https://www.setpdfs.de",
        "logo": {                                    // Changed to object
          "@type": "ImageObject",
          "url": "https://www.setpdfs.de/logo.svg",
          "width": "200",
          "height": "200"
        },
        "name": "SetPDFs"
      },
      {
        "@type": "WebApplication",
        "name": "SetPDFs",
        "applicationCategory": "PDF Converter",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        }
      }
    ]
  })}
</script>
      </Helmet>

      <header className="bg-white shadow-sm sticky top-0 z-50 w-full" role="banner">
        <nav className="max-w-7xl mx-auto px-4 py-3" role="navigation">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              aria-label="SetPDFs - Startseite"
            >
              <Logo />
              <span>SetPdfs</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Startseite
              </Link>

              <Link
                to="/uber-uns"
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Über uns
              </Link>

              <button
                onClick={() => setShowUploadModal(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                aria-label="PDF Konverter öffnen"
              >
                Bilder zu PDF
              </button>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-indigo-600"
              aria-label="Menü öffnen"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 border-t border-gray-200" role="menu">
              <div className="py-2 space-y-1">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                >
                  Startseite
                </Link>
                <Link
                  to="/uber-uns"
                  className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                >
                  Über uns
                </Link>
                <button
                  onClick={() => {
                    setShowUploadModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  role="menuitem"
                >
                  Bilder zu PDF
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {showUploadModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-lg max-w-xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 id="modal-title" className="text-lg font-semibold">Bilder zu PDF konvertieren</h3>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Modal schließen"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <div className="text-center bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  id="headerFileInput"
                  onChange={(e) => handleFiles(e.target.files)}
                  accept="image/*"
                  aria-label="Bilder auswählen"
                />
                <label htmlFor="headerFileInput" className="cursor-pointer block">
                  <div className="text-4xl mb-3">↑</div>
                  <p className="text-gray-700">Dateien auswählen oder hierher ziehen</p>
                  <p className="text-sm text-gray-500 mt-2">Max. 25MB pro Datei</p>
                </label>

                {files.length > 0 && (
                  <div className="mt-4">
                    <div className="text-sm text-gray-600 mb-2">
                      Ausgewählte Dateien: {files.length}
                    </div>
                    <button
                      onClick={handleConvert}
                      disabled={isConverting}
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
                      aria-busy={isConverting}
                    >
                      {isConverting ? 'Konvertiere...' : 'Zu PDF konvertieren'}
                    </button>
                  </div>
                )}

                {error && (
                  <div className="mt-4 text-red-500 text-sm" role="alert">
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="mt-4 text-green-500 text-sm" role="alert">
                    Konvertierung erfolgreich!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
