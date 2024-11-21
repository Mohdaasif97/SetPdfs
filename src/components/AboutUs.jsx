import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Mehrere Bilder zu PDF | Schneller Konverter | Kostenlos & Sicher</title>
        <meta name="description" content="SetPdfs ist Ihr kostenloser Online-PDF-Konverter. Wandeln Sie JPG, PNG und andere Bildformate sicher und schnell in PDF um. ✓ Keine Installation ✓ DSGVO-konform ✓ Kostenlos" />
        <meta name="keywords" content="PDF Konverter, Bilder zu PDF, Online PDF Tool, kostenloser PDF Konverter, sicherer PDF Konverter, DSGVO-konform" />
        <link rel="canonical" href="https://setpdfs.de/uber-uns" />
        <meta property="og:title" content="Über SetPdfs - Kostenloser PDF Konverter" />
        <meta property="og:description" content="Erfahren Sie mehr über unseren kostenlosen Online-PDF-Konverter. ✓ Schnell ✓ Sicher ✓ DSGVO-konform" />
        <meta property="og:url" content="https://setpdfs.de/uber-uns" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "name": "Über SetPdfs",
                "description": "Erfahren Sie mehr über unseren kostenlosen PDF-Konverter",
                "url": "https://setpdfs.de/uber-uns",
                "mainEntity": {
                  "@type": "WebApplication",
                  "name": "SetPdfs",
                  "applicationCategory": "PDF Converter",
                  "operatingSystem": "Web Browser",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "EUR"
                  }
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-indigo-600 hover:text-indigo-700">Startseite</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-500">Über uns</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">Über SetPdfs</h1>
        
        <div className="space-y-8">
          <section className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg shadow-sm">
            <p className="text-lg text-gray-800">
              Willkommen bei SetPdfs - Ihrer vertrauenswürdigen Lösung für digitale Dokumentenkonvertierung. 
              Seit 2024 machen wir die PDF-Konvertierung für Sie einfach, sicher und kostenlos zugänglich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Unsere Mission</h2>
            <p className="mb-4 text-gray-700">
              Wir haben es uns zur Aufgabe gemacht, die Dokumentenverarbeitung für Sie so einfach und effizient wie möglich zu gestalten. 
              Mit unserem benutzerfreundlichen Online-Tool können Sie problemlos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Bilder in PDF-Dateien umwandeln (JPG zu PDF, PNG zu PDF)</li>
              <li>Mehrere Bilder in ein einzelnes PDF zusammenführen</li>
              <li>Verschiedene Bildformate verarbeiten (JPG, PNG, TIFF, BMP, WebP)</li>
              <li>Dokumentenqualität für optimale Lesbarkeit optimieren</li>
              <li>PDFs in Sekunden erstellen - ohne Registrierung</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Warum SetPdfs wählen?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">Einfach & Schnell</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span className="text-gray-700">Keine Software-Installation erforderlich</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span className="text-gray-700">Blitzschnelle Konvertierung in Sekunden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span className="text-gray-700">Intuitiv und benutzerfreundlich</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">Sicher & Zuverlässig</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span className="text-gray-700">DSGVO-konform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span className="text-gray-700">Verschlüsselte Übertragung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span className="text-gray-700">Automatische Datenlöschung</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Datenschutz & Sicherheit</h2>
            <p className="mb-4 text-gray-700">Der Schutz Ihrer Daten hat für uns höchste Priorität. Unser Service ist:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">🔒</span>
                <span className="text-gray-700">DSGVO-konform</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">🔒</span>
                <span className="text-gray-700">SSL-verschlüsselt</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">🔒</span>
                <span className="text-gray-700">Keine Datenspeicherung</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">🔒</span>
                <span className="text-gray-700">100% sicher</span>
              </li>
            </ul>
          </section>

          <section className="bg-indigo-50 p-8 rounded-lg text-center">
            <p className="text-lg font-medium text-indigo-900 mb-3">
              Tausende zufriedene Nutzer vertrauen bereits auf SetPdfs für ihre 
              <Link to="/" className="text-indigo-600 hover:text-indigo-700"> PDF-Konvertierung</Link>.
            </p>
            <Link 
              to="/"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium"
            >
              Jetzt kostenlos ausprobieren
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;