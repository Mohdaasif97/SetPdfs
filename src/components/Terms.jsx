import React from 'react';
import SEO from './SEO';

const Terms = () => {
    const currentDate = new Date().toLocaleDateString('de-DE');
    
    return (
        <>
            <SEO 
                title=" Geschäftsbedingungen (AGB) | SetPdfsAllgemeine" 
                description="AGB für die kostenlose PDF-Konvertierung auf SetPdfs. Transparente Nutzungsbedingungen für unsere Online PDF-Tools. DSGVO-konform und sicher."
                path="/agb"
                keywords="AGB, Geschäftsbedingungen, PDF Konvertierung, SetPdfs Bedingungen, kostenlose PDF Tools, Nutzungsbedingungen"
            />
            
            <article className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <header>
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
                    </header>
                    
                    <div className="space-y-8 text-gray-600">
                        <section aria-labelledby="scope">
                            <h2 id="scope" className="text-2xl font-semibold text-gray-800 mb-4">1. Geltungsbereich</h2>
                            <p>Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website SetPdfs und aller damit verbundenen Dienste. Mit der Nutzung unserer Dienste stimmen Sie diesen Bedingungen zu.</p>
                        </section>

                        <section aria-labelledby="services">
                            <h2 id="services" className="text-2xl font-semibold text-gray-800 mb-4">2. Leistungsbeschreibung</h2>
                            <p className="mb-4">SetPdfs bietet kostenlose Online-Tools zur PDF-Konvertierung und -Bearbeitung an. Unsere Dienste umfassen:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Konvertierung von JPG zu PDF</li>
                                <li>Konvertierung von PNG zu PDF</li>
                                <li>Zusammenfügen mehrerer Bilder in eine PDF-Datei</li>
                            </ul>
                        </section>

                        <section aria-labelledby="terms">
                            <h2 id="terms" className="text-2xl font-semibold text-gray-800 mb-4">3. Nutzungsbedingungen</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Die Nutzung der Dienste ist kostenlos</li>
                                <li>Es dürfen keine rechtswidrigen Inhalte hochgeladen werden</li>
                                <li>Eine missbräuchliche Nutzung ist untersagt</li>
                                <li>Die Rechte Dritter sind zu beachten</li>
                            </ul>
                        </section>

                        <section aria-labelledby="security">
                            <h2 id="security" className="text-2xl font-semibold text-gray-800 mb-4">4. Datensicherheit</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Alle Uploads werden SSL-verschlüsselt übertragen</li>
                                <li>Dateien werden direkt nach der Konvertierung gelöscht</li>
                                <li>Es werden keine Daten permanent gespeichert</li>
                                <li>Weitere Details finden Sie in unserer <a href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</a></li>
                            </ul>
                        </section>

                        <section aria-labelledby="liability">
                            <h2 id="liability" className="text-2xl font-semibold text-gray-800 mb-4">5. Haftung</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Wir übernehmen keine Garantie für die ständige Verfügbarkeit der Dienste</li>
                                <li>Eine Haftung für Datenverluste wird ausgeschlossen</li>
                                <li>Für die Inhalte der konvertierten Dateien ist der Nutzer verantwortlich</li>
                                <li>Die Nutzung der Dienste erfolgt auf eigenes Risiko</li>
                            </ul>
                        </section>

                        <section aria-labelledby="copyright">
                            <h2 id="copyright" className="text-2xl font-semibold text-gray-800 mb-4">6. Urheberrecht</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Alle Rechte an der Website und den Diensten liegen bei SetPdfs</li>
                                <li>Die Nutzer sind für die Einhaltung von Urheberrechten verantwortlich</li>
                                <li>Eine kommerzielle Nutzung bedarf unserer Zustimmung</li>
                            </ul>
                        </section>

                        <section aria-labelledby="changes">
                            <h2 id="changes" className="text-2xl font-semibold text-gray-800 mb-4">7. Änderungen der AGB</h2>
                            <p>Wir behalten uns vor, diese AGB bei Bedarf zu ändern. Die aktuellen Bedingungen sind stets auf dieser Seite einsehbar.</p>
                        </section>

                        <section aria-labelledby="contact">
                            <h2 id="contact" className="text-2xl font-semibold text-gray-800 mb-4">8. Kontakt</h2>
                            <p>Bei Fragen zu diesen AGB erreichen Sie uns unter:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>E-Mail: <a href="mailto:setpdfs@gmail.com" className="text-blue-600 hover:underline">setpdfs@gmail.com</a></li>
                                <li>Website: <a href="https://setpdfs.de" className="text-blue-600 hover:underline">SetPdfs.de</a></li>
                            </ul>
                        </section>

                        <section aria-labelledby="severability">
                            <h2 id="severability" className="text-2xl font-semibold text-gray-800 mb-4">9. Salvatorische Klausel</h2>
                            <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
                        </section>

                        <footer className="text-sm text-gray-500 mt-12">
                            <p>Stand: <time dateTime={currentDate}>{currentDate}</time></p>
                        </footer>
                    </div>
                </div>
            </article>

            {/* Structured Data for Terms Page */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Allgemeine Geschäftsbedingungen",
                    "description": "Allgemeine Geschäftsbedingungen für die Nutzung von SetPdfs - Ihr kostenloser PDF Konverter",
                    "publisher": {
                        "@type": "Organization",
                        "name": "SetPdfs",
                        "url": "https://setpdfs.de"
                    },
                    "lastReviewed": currentDate,
                    "mainEntity": {
                        "@type": "WebContent",
                        "about": {
                            "@type": "Thing",
                            "name": "Terms of Service",
                            "description": "Nutzungsbedingungen für den kostenlosen PDF Konvertierungsdienst"
                        }
                    }
                })}
            </script>
        </>
    );
};

export default Terms;