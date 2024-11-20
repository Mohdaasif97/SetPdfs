import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Wie konvertiere ich JPG zu PDF?",
      answer: "Laden Sie einfach Ihre JPG-Datei hoch, indem Sie sie in den Upload-Bereich ziehen oder über den 'Dateien auswählen' Button auswählen. Die Konvertierung startet automatisch und Ihr PDF steht innerhalb weniger Sekunden zum Download bereit."
    },
    {
      question: "Kann ich mehrere Bilder in eine PDF-Datei umwandeln?",
      answer: "Ja, Sie können mehrere Bilder gleichzeitig hochladen. Diese werden in der gewählten Reihenfolge zu einem einzigen PDF-Dokument zusammengefügt. Sie können die Reihenfolge vor der Konvertierung auch noch anpassen."
    },
    {
      question: "Ist der Service wirklich kostenlos?",
      answer: "Ja, unser Service ist zu 100% kostenlos. Es gibt keine versteckten Kosten, keine Registrierung und keine Wasserzeichen in Ihren PDFs."
    },
    {
      question: "Welche Bildformate werden unterstützt?",
      answer: "Wir unterstützen alle gängigen Bildformate: JPG/JPEG, PNG, GIF, BMP, TIFF und WebP. Alle diese Formate können in hochwertige PDF-Dokumente umgewandelt werden."
    },
    {
      question: "Wie sicher sind meine Dateien?",
      answer: "Die gesamte Konvertierung findet lokal in Ihrem Browser statt. Ihre Dateien werden nicht auf unseren Servern gespeichert. Nach der Konvertierung werden alle Daten automatisch gelöscht - maximale Sicherheit für Ihre Dokumente."
    },
    {
      question: "Gibt es eine Größenbeschränkung?",
      answer: "Ja, die maximale Dateigröße beträgt 25MB pro Bild. Bei der kostenlosen Version können Sie beliebig viele Bilder innerhalb dieser Größenbeschränkung konvertieren."
    },
    {
      question: "Wie ist die Qualität der PDF-Dateien?",
      answer: "Wir verwenden fortschrittliche Konvertierungsalgorithmen, um bestmögliche Qualität zu gewährleisten. Die erzeugten PDFs behalten die originale Bildqualität bei und sind für Druck und digitale Verwendung optimiert."
    },
    {
      question: "Funktioniert der Konverter auch auf dem Handy?",
      answer: "Ja, unser PDF-Konverter ist vollständig mobil-optimiert. Sie können Bilder direkt von Ihrem Smartphone oder Tablet hochladen und in PDF umwandeln."
    }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Bilder in PDF | SetPDFs - PDF Konverter</title>
        <meta 
          name="description" 
          content="Finden Sie Antworten auf häufige Fragen zu unserem PDF-Konverter. Erfahren Sie mehr über Bildformate, Dateigröße, Sicherheit und Qualität."
        />
        <link rel="canonical" href="https://setpdfs.de/faq" />
      </Helmet>

      <section className="py-16 bg-gray-50">
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        <div className="max-w-3xl mx-auto px-4" itemScope itemType="https://schema.org/FAQPage">
          <h1 className="text-3xl font-bold text-center mb-4">
            Häufig gestellte Fragen zum PDF Konverter
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Alles was Sie über unseren kostenlosen PDF Konverter wissen müssen
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm"
                itemProp="mainEntity"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <h2 itemProp="name">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg font-medium text-gray-900"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {faq.question}
                    <span 
                      className={`ml-6 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </button>
                </h2>
                {openIndex === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4 text-gray-600"
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
