/**
 * Hook para imprimir una imagen desde una URL.
 * Usa un iframe oculto para evitar abrir nuevas pestañas.
 * @param imageUrl - URL de la imagen a imprimir.
 * @returns Función para iniciar la impresión de la imagen.
 */
export function usePrintImage(imageUrl: string) {
  const printImage = () => {
    // Crear iframe oculto
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    iframe.style.visibility = 'hidden';
    
    document.body.appendChild(iframe);
    
    const iframeDoc = iframe.contentWindow?.document;
    if (!iframeDoc) {
      document.body.removeChild(iframe);
      return;
    }
    
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Imprimir Formulario</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            @page { 
              margin: 1cm;
              size: auto;
            }
            @media print {
              html, body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                overflow: hidden;
              }
              body {
                display: flex;
                justify-content: center;
                align-items: center;
                page-break-after: avoid;
                page-break-before: avoid;
              }
              img { 
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto;
                display: block;
                page-break-inside: avoid;
                page-break-after: avoid;
                page-break-before: avoid;
              }
            }
            html, body {
              width: 100%;
              height: 100vh;
              margin: 0;
              padding: 0;
              overflow: hidden;
            }
            body { 
              display: flex; 
              justify-content: center; 
              align-items: center;
              background: white;
            }
            img { 
              max-width: 95%;
              max-height: 95vh;
              width: auto;
              height: auto;
              object-fit: contain;
            }
          </style>
        </head>
        <body>
          <img src="${imageUrl}" alt="Formulario de adhesión" />
        </body>
      </html>
    `);
    iframeDoc.close();
    
    // Esperar a que la imagen cargue antes de imprimir
    iframe.onload = () => {
      setTimeout(() => {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
        // Remover iframe después de un tiempo
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 500);
      }, 500);
    };
  };

  return printImage;
}



// /**
//  * Hook para imprimir una imagen desde una URL.
//  * Usa un iframe oculto para evitar abrir nuevas pestañas.
//  * @param imageUrl - URL de la imagen a imprimir.
//  * @returns Función para iniciar la impresión de la imagen.
//  */
// export function usePrintImage(imageUrl: string) {
//   const printImage = () => {
//     // Crear iframe oculto
//     const iframe = document.createElement('iframe');
//     iframe.style.position = 'fixed';
//     iframe.style.right = '0';
//     iframe.style.bottom = '0';
//     iframe.style.width = '0';
//     iframe.style.height = '0';
//     iframe.style.border = 'none';
//     iframe.style.visibility = 'hidden';
    
//     document.body.appendChild(iframe);
    
//     const iframeDoc = iframe.contentWindow?.document;
//     if (!iframeDoc) {
//       document.body.removeChild(iframe);
//       return;
//     }
    
//     iframeDoc.open();
//     iframeDoc.write(`
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>Imprimir</title>
//           <style>
//             @page { 
//               margin: 0;
//               size: auto;
//             }
//             @media print {
//               html, body {
//                 width: 100%;
//                 height: 100%;
//                 margin: 0;
//                 padding: 0;
//               }
//               body {
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//               }
//               img { 
//                 max-width: 90%;
//                 max-height: 90vh;
//                 width: auto;
//                 height: auto;
//                 display: block;
//               }
//             }
//             html, body {
//               width: 100%;
//               height: 100%;
//               margin: 0;
//               padding: 0;
//             }
//             body { 
//               display: flex; 
//               justify-content: center; 
//               align-items: center;
//             }
//             img { 
//               max-width: 90%;
//               max-height: 90vh;
//               width: auto;
//               height: auto;
//             }
//           </style>
//         </head>
//         <body>
//           <img src="${imageUrl}" alt="Documento a imprimir" />
//         </body>
//       </html>
//     `);
//     iframeDoc.close();
    
//     // Esperar a que la imagen cargue antes de imprimir
//     iframe.onload = () => {
//       setTimeout(() => {
//         iframe.contentWindow?.print();
//         // Remover iframe después de un tiempo
//         setTimeout(() => {
//           document.body.removeChild(iframe);
//         }, 100);
//       }, 250);
//     };
//   };

//   return printImage;
// }