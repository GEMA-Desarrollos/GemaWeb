import iconTeamviewer from "@/assets/icon-teamviewer.svg";
import iconFonts from "@/assets/icon-fonts.svg"

export const HEADER_CONFIG = {
  title: "Descargas",
  subtitle: "Descarga las herramientas necesarias para soporte remoto u otros recursos esenciales para el correcto funcionamiento nuestros sistemas. Todas las descargas son seguras y están actualizadas.",
};

// texto para la descarga de TeamViewer
export const DOWNLOADS = [
  {
    id: "teamviewer",
    logo: iconTeamviewer,
    name: "",
    description: "Descarga e instala TeamViewer para permitir el soporte remoto de nuestros técnicos.",
    url: "https://sistemagema.com.ar/download/TeamViewer_Setup.exe",
  },
  {
    id: "fuentes",
    logo: iconFonts,
    name: "Fuentes",
    description: "Descarga e instala las fuentes para poder administrar correctamente el sistema Gema.",
    url: "https://7-zip.org/a/7z2501-extra.7z",
  },
];