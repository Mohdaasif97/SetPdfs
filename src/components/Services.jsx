import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



export default function Services() {

  const services = [
    {
      icon: '📸',
      title: 'JPG zu PDF',
      description: 'Konvertieren Sie JPG Bilder in hochwertige PDF Dokumente',
      longDescription: 'Wandeln Sie JPG-Dateien kostenlos in hochwertige PDF-Dokumente um. Unterstützt JPEG, JPG in bester Qualität.',
      features: [
        'Originale Bildqualität garantiert',
        'Unbegrenzte kostenlose Konvertierungen',
        'Schnelle Verarbeitung in Sekunden'
      ],
      alt: 'JPG zu PDF Konverter',
      slug: 'jpg-zu-pdf'
    },
    {
      icon: '🖼️',
      title: 'PNG zu PDF',
      description: 'Wandeln Sie PNG Dateien mit transparentem Hintergrund in PDF um',
      longDescription: 'Konvertieren Sie PNG-Bilder mit transparentem Hintergrund in PDF. Beste Qualität, kostenlos und schnell.',
      features: [
        'Transparenz bleibt erhalten',
        'Hohe Auflösung garantiert',
        'Alle PNG Formate unterstützt'
      ],
      alt: 'PNG zu PDF Konverter',
      slug: 'png-zu-pdf'
    },
    {
      icon: '📑',
      title: 'Mehrere Bilder zu PDF',
      description: 'Fügen Sie mehrere Bilder unterschiedlicher Formate in ein PDF zusammen',
      longDescription: 'Kombinieren Sie mehrere Bilder in einer PDF-Datei. Unterstützt JPG, PNG, GIF und andere Formate.',
      features: [
        'Multiple Bilder hochladen',
        'Reihenfolge frei anpassbar',
        'Verschiedene Bildformate möglich'
      ],
      alt: 'Mehrere Bilder zu PDF konvertieren',
      slug: 'bilder-zusammenfuegen'
    }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PDF Konverter Tools",
    "applicationCategory": "Productivity Software",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "hasPart": services.map(service => ({
      "@type": "SoftwareApplication",
      "name": service.title,
      "description": service.longDescription,
      "applicationCategory": "Converter",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>PDF Konverter | Bilder zu PDF | Kostenlos Online Konvertieren</title>
        <meta name="description" content="Kostenloser PDF Konverter: JPG zu PDF, PNG zu PDF und mehr. ✓ Schnell ✓ Einfach ✓ Keine Registrierung ✓ DSGVO-konform ➤ Jetzt kostenlos nutzen!" />
        <meta name="keywords" content="pdf konverter,jpg zu pdf,png zu pdf,bilder zusammenfügen,kostenlos pdf erstellen,online pdf converter,bilder zu pdf" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">
              PDF Konvertierungs-Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nutzen Sie unsere kostenlosen Tools zur Umwandlung Ihrer Bilder in PDF-Dateien.
              <span className="block mt-2 text-gray-500">
                100% kostenlos, DSGVO-konform und ohne Installation.
              </span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <article 
                key={service.slug}
                className="
                  bg-white rounded-xl p-6 
                  transition-all duration-300 
                  hover:shadow-xl hover:transform hover:-translate-y-1
                  border border-gray-100
                "
              >
                <div className="flex flex-col h-full">
                  <span className="text-4xl mb-6" role="img" aria-label={service.alt}>{service.icon}</span>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-800">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.longDescription}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg 
                          className="w-5 h-5 text-indigo-500 mr-3" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>
              </article>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="font-bold text-3xl text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Kostenlos</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="font-bold text-3xl text-indigo-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Verfügbar</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="font-bold text-3xl text-indigo-600 mb-2">SSL</div>
                <div className="text-gray-600 font-medium">Gesichert</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="font-bold text-3xl text-indigo-600 mb-2">DSGVO</div>
                <div className="text-gray-600 font-medium">Konform</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}