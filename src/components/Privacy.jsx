import React from 'react';
import SEO from './SEO';

const Privacy = () => {
    const currentDate = new Date().toLocaleDateString('de-DE');
    
    return (
        <>
            <SEO 
                title="Datenschutzerklärung | SetPdfs - Kostenlose PDF Konvertierung"
                description="Datenschutzerklärung von SetPdfs. Wir erheben keine personenbezogenen Daten. 100% DSGVO-konform, keine Cookies, keine Tracking-Tools. Ihre Privatsphäre ist uns wichtig."
                path="/datenschutz"
                keywords="Datenschutz, DSGVO, Privacy Policy, keine Cookies, Datenschutzerklärung, SetPdfs Datenschutz, PDF Konverter Datenschutz"
            />
            
            <article className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <header>
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
                    </header>
                    
                    <div className="space-y-8 text-gray-600">
                        <section aria-labelledby="overview">
                            <h2 id="overview" className="text-2xl font-semibold text-gray-800 mb-4">Überblick</h2>
                            <p>Willkommen bei <span className="font-medium">SetPdfs</span> ("wir", "uns" oder "unsere"). Wir verpflichten uns zum Schutz Ihrer Privatsphäre und möchten transparent über unsere Praktiken informieren.</p>
                        </section>

                        <section aria-labelledby="data-collection">
                            <h2 id="data-collection" className="text-2xl font-semibold text-gray-800 mb-4">Datenerhebung</h2>
                            <p className="mb-4">Wir erheben keine personenbezogenen Daten von Besuchern unserer Website. Das bedeutet:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Wir verwenden keine Cookies</li>
                                <li>Wir erfassen keine IP-Adressen</li>
                                <li>Wir nutzen keine Analyse-Tools</li>
                                <li>Wir sammeln keine Kontaktinformationen</li>
                                <li>Wir speichern keine Benutzerdaten</li>
                            </ul>
                        </section>

                        <section aria-labelledby="third-party">
                            <h2 id="third-party" className="text-2xl font-semibold text-gray-800 mb-4">Drittanbieter-Dienste</h2>
                            <p className="mb-4">Unsere Website wird von Vercel gehostet. Während wir selbst keine Daten sammeln, kann unser Hosting-Anbieter automatisch bestimmte technische Informationen erfassen, die für die Funktion der Website erforderlich sind, wie:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Grundlegende Server-Logs</li>
                                <li>Temporäre IP-Adressen für Sicherheitszwecke</li>
                            </ul>
                        </section>

                        <section aria-labelledby="security">
                            <h2 id="security" className="text-2xl font-semibold text-gray-800 mb-4">Datensicherheit</h2>
                            <p className="mb-4">Ihre Sicherheit ist uns wichtig:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>SSL-verschlüsselte Verbindung</li>
                                <li>Keine permanente Speicherung von Dateien</li>
                                <li>Automatische Löschung nach der Konvertierung</li>
                                <li>Server in Deutschland</li>
                            </ul>
                        </section>

                        <section aria-labelledby="contact">
                            <h2 id="contact" className="text-2xl font-semibold text-gray-800 mb-4">Kontaktinformationen</h2>
                            <p>Bei Fragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken können Sie uns wie folgt kontaktieren:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>E-Mail: <a href="mailto:setpdfs@gmail.com" className="text-blue-600 hover:underline">setpdfs@gmail.com</a></li>
                                <li>Website: <a href="https://www.setpdfs.de" className="text-blue-600 hover:underline">SetPdfs.de</a></li>
                            </ul>
                        </section>

                        <section aria-labelledby="rights">
                            <h2 id="rights" className="text-2xl font-semibold text-gray-800 mb-4">Ihre Rechte</h2>
                            <p>Auch wenn wir keine personenbezogenen Daten erheben, haben Sie Rechte nach verschiedenen Datenschutzgesetzen, einschließlich der DSGVO, wenn Sie sich in der Europäischen Union befinden. Dazu gehören:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Recht auf Auskunft</li>
                                <li>Recht auf Löschung</li>
                                <li>Recht auf Berichtigung</li>
                                <li>Recht auf Datenübertragbarkeit</li>
                            </ul>
                        </section>

                        <section aria-labelledby="changes">
                            <h2 id="changes" className="text-2xl font-semibold text-gray-800 mb-4">Änderungen dieser Datenschutzerklärung</h2>
                            <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die aktuelle Version finden Sie stets auf dieser Seite.</p>
                        </section>

                        <footer className="text-sm text-gray-500 mt-12">
                            <p>Stand: <time dateTime={currentDate}>{currentDate}</time></p>
                        </footer>
                    </div>
                </div>
            </article>

            {/* Structured Data for Privacy Policy */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://www.schema.org",
                    "@type": "WebPage",
                    "name": "Datenschutzerklärung",
                    "description": "Datenschutzerklärung von SetPdfs - Keine Datenerhebung, keine Cookies, 100% DSGVO-konform",
                    "publisher": {
                        "@type": "Organization",
                        "name": "SetPdfs",
                        "url": "https://www.setpdfs.de"
                    },
                    "lastReviewed": currentDate,
                    "mainEntity": {
                        "@type": "WebContent",
                        "about": {
                            "@type": "Thing",
                            "name": "Privacy Policy",
                            "description": "Informationen zum Datenschutz bei der Nutzung von SetPdfs"
                        }
                    },
                    "specialty": "Datenschutzkonforme PDF-Konvertierung"
                })}
            </script>

            {/* FAQ Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://www.schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "Werden Cookies verwendet?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nein, wir verwenden keine Cookies auf unserer Website."
                        }
                    }, {
                        "@type": "Question",
                        "name": "Werden persönliche Daten gespeichert?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nein, wir erheben und speichern keine personenbezogenen Daten."
                        }
                    }, {
                        "@type": "Question",
                        "name": "Ist der Service DSGVO-konform?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ja, unser Service ist vollständig DSGVO-konform. Wir sammeln keine personenbezogenen Daten und verwenden keine Tracking-Tools."
                        }
                    }]
                })}
            </script>
        </>
    );
};

export default Privacy;