// src/utils/pdfConverter.js
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';

export async function convertImagesToPDF(files) {
  try {
    const pdfDoc = await PDFDocument.create();
    let currentPage = 0;

    for (const file of files) {
      try {
        // Convert any image to PNG format first
        const pngData = await convertToImageData(file);
        const image = await pdfDoc.embedPng(pngData);

        // Calculate dimensions to fit on A4
        const maxWidth = 595; // A4 width in points
        const maxHeight = 842; // A4 height in points
        let width = image.width;
        let height = image.height;

        // Scale image if it's too large
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        // Add page and draw image
        const page = pdfDoc.addPage([maxWidth, maxHeight]);
        const x = (maxWidth - width) / 2;
        const y = (maxHeight - height) / 2;
        
        page.drawImage(image, {
          x,
          y,
          width,
          height,
        });

        currentPage++;
      } catch (err) {
        console.error(`Error processing image ${file.name}:`, err);
        // Continue with next image even if one fails
      }
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'converted_images.pdf');
    return true;
  } catch (error) {
    console.error('Error in PDF conversion:', error);
    throw error;
  }
}

// Function to convert any image to PNG format
function convertToImageData(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
      }, 'image/png');
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}