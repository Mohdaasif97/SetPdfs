import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Über SetPdfs - Ihr vertrauenswürdiger PDF Konverter | Bilder zu PDF</title>
        <meta name="description" content="SetPdfs ist Ihr kostenloser Online-PDF-Konverter. Wandeln Sie JPG, PNG und andere Bildformate sicher und schnell in PDF um. ✓ Keine Installation ✓ DSGVO-konform ✓ Kostenlos" />
        <meta name="keywords" content="PDF Konverter, Bilder zu PDF, Online PDF Tool, kostenloser PDF Konverter, sicherer PDF Konverter, DSGVO-konform" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Über SetPdfs</h1>
        
        <div className="space-y-8">
          <section className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg">
            <p className="text-lg mb-6">
              Willkommen bei SetPdfs - Ihrer vertrauenswürdigen Lösung für digitale Dokumentenkonvertierung. 
              Seit 2024 haben wir bereits über 1 Million Dokumente erfolgreich konvertiert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Unsere Mission</h2>
            <p className="mb-4">
              Wir haben es uns zur Aufgabe gemacht, die Dokumentenverarbeitung für Sie so einfach und effizient wie möglich zu gestalten. 
              Mit unserem benutzerfreundlichen Online-Tool können Sie problemlos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bilder in PDF-Dateien umwandeln (JPG zu PDF, PNG zu PDF)</li>
              <li>Mehrere Bilder in ein einzelnes PDF zusammenführen</li>
              <li>Verschiedene Bildformate verarbeiten (JPG, PNG, TIFF, BMP, WebP)</li>
              <li>Dokumentenqualität für optimale Lesbarkeit optimieren</li>
              <li>PDFs in Sekunden erstellen - ohne Registrierung</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Warum SetPdfs wählen?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Einfach & Schnell</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Keine Software-Installation erforderlich</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Blitzschnelle Konvertierung in Sekunden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Intuitiv und benutzerfreundlich</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Sicher & Zuverlässig</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>DSGVO-konform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Verschlüsselte Übertragung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Automatische Datenlöschung</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Datenschutz & Sicherheit</h2>
            <p className="mb-4">Der Schutz Ihrer Daten hat für uns höchste Priorität. Unser Service ist:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">🔒</span>
                <span>DSGVO-konform</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">🔒</span>
                <span>SSL-verschlüsselt</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">🔒</span>
                <span>Keine Datenspeicherung</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">🔒</span>
                <span>100% sicher</span>
              </li>
            </ul>
          </section>

          <section>
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <p className="text-lg font-medium text-indigo-900">
                Mehr als 100.000 zufriedene Nutzer vertrauen bereits auf SetPdfs für ihre PDF-Konvertierung.
              </p>
              <p className="mt-2 text-indigo-700">
                Probieren Sie es jetzt kostenlos aus!
              </p>
            </div>
          </section>

          {/* Structured Data for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SetPdfs",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              },
              "description": "Online PDF Konverter - Wandeln Sie Bilder kostenlos in PDF um"
            })}
          </script>
        </div>
      </div>
    </>
  );
};

export default AboutUs;