import iconTeamviewer from "@/assets/icon-teamviewer.svg";

export const HEADER_CONFIG = {
  title: "Descargas",
  subtitle: "Descarga las herramientas necesarias para soporte remoto y otras funciones.",
};

// texto para la descarga de TeamViewer
export const DOWNLOADS = [
  {
    id: "teamviewer",
    logo: iconTeamviewer,
    name: "TeamViewer",
    description: "Descarga e instala TeamViewer para permitir el soporte remoto de nuestros técnicos.",
    url: "https://sistemagema.com.ar/download/TeamViewer_Setup.exe",
  },
  {
    id: "fuentes",
    logo: "",
    name: "Fuentes",
    description: "Descarga e instala las fuentes para poder administrar correctamente el sistema Gema.",
    url: "https://7-zip.org/a/7z2501-extra.7z",
  },
];