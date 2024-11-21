import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Mehrere Bilder zu PDF | Schneller Konverter | Kostenlos & Sicher",

  description = "Konvertieren Sie Bilder kostenlos in PDF. JPG zu PDF, PNG zu PDF, Bilder zusammenfügen. Schnell, sicher und DSGVO-konform.",
  canonicalUrl,
  path,
  keywords,
  imageUrl
}) => {
  const siteUrl = "https://www.setpdfs.de";
  const fullUrl = path ? `${siteUrl}${path}` : siteUrl;
  const defaultImage = `${siteUrl}/logo.png`;

  const defaultKeywords = "pdf konverter, jpg zu pdf, png zu pdf, bilder zu pdf konvertieren, kostenlos pdf erstellen, pdf tools, bilder zusammenfügen, pdf konvertierung online";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonicalUrl || fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="SetPdfs" />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl || defaultImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="German" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="SetPdfs" />
      <meta name="geo.region" content="DE" />
      <meta name="geo.placename" content="Deutschland" />

      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />

      {/* Structured Data for PDF Converter */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SetPdfs",
            "url": "https://www.setpdfs.de",
            "description": "Kostenloser Online PDF Konverter - Bilder in PDF umwandeln",
            "applicationCategory": "PDF Converter",
            "operatingSystem": "All",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "featureList": [
              "JPG zu PDF Konvertierung",
              "PNG zu PDF Konvertierung",
              "Mehrere Bilder zusammenfügen",
              "Kostenlose Nutzung",
              "DSGVO-konform",
              "SSL-verschlüsselt"
            ],
            "screenshot": "${siteUrl}/screenshot.png",
            "softwareHelp": {
              "@type": "CreativeWork",
              "url": "${siteUrl}/uber-uns"
            }
          }
        `}
      </script>

      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SetPdfs",
            "url": "https://www.setpdfs.de",
            "logo": "${siteUrl}/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["German"]
            },
            "sameAs": [
              "https://www.setpdfs.de"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;