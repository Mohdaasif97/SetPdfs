import { useState, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { convertImagesToPDF } from '../utils/pdfConverter';

export default function UploadArea() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dropZoneRef = useRef(null);

  const supportedFormats = {
    'image/jpeg': '.jpg, .jpeg',
    'image/png': '.png',
    'image/gif': '.gif',
    'image/bmp': '.bmp',
    'image/webp': '.webp',
    'image/svg+xml': '.svg',
    'image/tiff': '.tiff'
  };

  const handleFiles = useCallback((newFiles) => {
    const imageFiles = Array.from(newFiles).filter(file => {
      const isSupported = file.type.startsWith('image/') || 
                         file.name.match(/\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff)$/i);
      if (!isSupported) {
        setError(`${file.name} ist kein unterstütztes Bildformat`);
      }
      return isSupported;
    });

    if (imageFiles.length === 0) {
      setError('Bitte wählen Sie mindestens eine Bilddatei aus');
      return;
    }

    const maxSize = 25 * 1024 * 1024;
    const oversizedFiles = imageFiles.filter(file => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      setError(`Einige Dateien sind zu groß (max. 25MB): ${oversizedFiles.map(f => f.name).join(', ')}`);
      return;
    }

    setFiles(prevFiles => [...prevFiles, ...imageFiles]);
    setError(null);
    setSuccess(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    if (!dropZoneRef.current?.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const removeFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    if (files.length === 1) setSuccess(false);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      setError('Bitte wählen Sie mindestens ein Bild aus');
      return;
    }

    try {
      setIsConverting(true);
      setError(null);
      setProgress(0);

      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      await convertImagesToPDF(files);
      
      clearInterval(progressInterval);
      setProgress(100);
      setSuccess(true);
      setFiles([]);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'event_category': 'PDF',
          'event_label': 'Success',
          'value': files.length
        });
      }
    } catch (err) {
      setError('Fehler bei der Konvertierung. Bitte versuchen Sie es erneut.');
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion_error', {
          'event_category': 'PDF',
          'event_label': err.message
        });
      }
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <>
      <Helmet>
      <title>Mehrere Bilder zu PDF | Schneller Konverter | Kostenlos & Sicher</title>
      <meta name="description" content="Wandeln Sie kostenlos Bilder in PDF um. Unterstützt JPG, PNG, GIF und mehr. ✓ Ohne Anmeldung ✓ DSGVO-konform ✓ Bis 25MB" />
        <meta name="keywords" content="bilder zu pdf, jpg zu pdf, png zu pdf, bildkonverter, pdf konverter kostenlos, bilder zusammenfügen" />
        <link rel="canonical" href="https://setpdfs.de" />
        <meta property="og:title" content="Bilder zu PDF konvertieren - Kostenlos & DSGVO-konform" />
        <meta property="og:description" content="Konvertieren Sie Ihre Bilder kostenlos in PDF. Unterstützt alle gängigen Bildformate. Keine Registrierung erforderlich." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://setpdfs.de" />
        <meta property="og:locale" content="de_DE" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SetPDFs Bildkonverter",
            "applicationCategory": "PDF Converter",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "featureList": [
              "JPG zu PDF Konvertierung",
              "PNG zu PDF Konvertierung",
              "Mehrere Bilder zusammenfügen",
              "Keine Registrierung erforderlich",
              "DSGVO-konform",
              "Kostenlos nutzbar"
            ]
          })}
        </script>
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="sr-only">
          <h2>Online PDF Konverter - Bilder kostenlos in PDF umwandeln</h2>
          <p>
            Konvertieren Sie JPG, PNG, GIF und andere Bildformate kostenlos in PDF.
            Keine Registrierung erforderlich. DSGVO-konform und sicher.
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bilder zu PDF konvertieren
          </h1>
          <p className="text-lg text-gray-600 mb-8">
          Kostenlose Online-Umwandlung von JPG zu PDF. Auch für JPEG, TIFF, PNG, GIF, BMP, WEBP und HEIC. Keine Anmeldung nötig!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="text-sm text-gray-600">
              <span className="block text-xl mb-1">✓</span>
              Kostenlos
            </div>
            <div className="text-sm text-gray-600">
              <span className="block text-xl mb-1">✓</span>
              Ohne Anmeldung
            </div>
            <div className="text-sm text-gray-600">
              <span className="block text-xl mb-1">✓</span>
              DSGVO-konform
            </div>
            <div className="text-sm text-gray-600">
              <span className="block text-xl mb-1">✓</span>
              Hohe Qualität
            </div>
          </div>

          <div
            ref={dropZoneRef}
            className={`max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border-2 border-dashed 
              ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} 
              transition-all duration-300`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            aria-label="Datei-Upload-Bereich"
          >
            <input
              type="file"
              id="fileInput"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
              accept={Object.keys(supportedFormats).join(',')}
              aria-label="Dateien auswählen"
            />
            <label htmlFor="fileInput" className="cursor-pointer block">
              <div className="text-center">
                <div className="text-5xl mb-4" aria-hidden="true">↑</div>
                <p className="text-gray-700 font-medium">
                  Dateien hierher ziehen oder klicken zum Auswählen
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Mehrere Bilder möglich | Max. 25MB pro Datei
                </p>
              </div>
            </label>

            {files.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2">
                  Ausgewählte Dateien ({files.length}):
                </h3>
                <div className="max-h-60 overflow-y-auto">
                  <ul className="text-left space-y-2">
                    {files.map((file, index) => (
                      <li 
                        key={index} 
                        className="flex items-center justify-between bg-gray-50 p-2 rounded"
                      >
                        <span className="text-gray-600">
                          {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                          aria-label={`${file.name} entfernen`}
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  {isConverting && (
                    <div className="w-full bg-gray-200 rounded h-2 mb-4">
                      <div 
                        className="bg-indigo-600 h-2 rounded transition-all duration-500"
                        style={{ width: `${progress}%` }}
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  )}

                  <button
                    className={`w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium
                      hover:bg-indigo-700 transition-colors
                      ${isConverting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleConvert}
                    disabled={isConverting}
                  >
                    {isConverting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Konvertiere...
                      </span>
                    ) : (
                      'Zu PDF konvertieren'
                    )}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 text-red-500 text-sm p-3 bg-red-50 rounded" role="alert">
                {error}
              </div>
            )}

            {success && (
              <div className="mt-4 text-green-500 text-sm p-3 bg-green-50 rounded" role="alert">
                Konvertierung erfolgreich! Ihr PDF wurde heruntergeladen.
              </div>
            )}
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-sm text-gray-500">
            <p>
              Unterstützte Formate: JPG, JPEG, PNG, GIF, BMP, WEBP, SVG, TIFF
              | Maximale Dateigröße: 25MB
            </p>
          </div>
        </div>
      </section>
    </>
  );
}