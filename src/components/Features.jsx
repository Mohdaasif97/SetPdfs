import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: '100% Sicher & DSGVO-konform',
      description: 'Lokale Verarbeitung im Browser, keine Datenspeicherung auf Servern. SSL-verschlüsselte Übertragung für maximale Sicherheit.',
      benefits: ['Keine Datenspeicherung', 'SSL-Verschlüsselung', 'DSGVO-konform']
    },
    {
      icon: '⚡',
      title: 'Blitzschnelle Konvertierung',
      description: 'Sofortige Umwandlung von JPG, PNG und anderen Bildformaten in PDF. Keine Wartezeiten, keine Downloads.',
      benefits: ['Sofortige Konvertierung', 'Mehrere Bilder gleichzeitig', 'Keine Wartezeit']
    },
    {
      icon: '💎',
      title: 'Beste PDF-Qualität',
      description: 'Hochwertige PDF-Dokumente mit optimaler Lesbarkeit. Perfekt für geschäftliche und private Nutzung.',
      benefits: ['Optimale Auflösung', 'Geringe Dateigröße', 'Druckqualität']
    },
    {
      icon: '🎯',
      title: 'Komplett Kostenlos',
      description: 'Alle Grundfunktionen kostenlos nutzbar. Keine versteckten Kosten, keine Registrierung erforderlich.',
      benefits: ['Keine Anmeldung', 'Unbegrenzte Nutzung', 'Keine versteckten Kosten']
    }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDFmaster",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": features.map(f => f.title).join(", ")
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Add structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Vorteile von PDFmaster
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unser kostenloser PDF Konverter bietet Ihnen alle wichtigen Funktionen für die professionelle Dokumentenverarbeitung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Überzeugen Sie sich selbst von der Qualität unseres PDF-Konverters
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Jetzt PDF erstellen
          </button>
        </div>
      </div>
    </section>
  );
}