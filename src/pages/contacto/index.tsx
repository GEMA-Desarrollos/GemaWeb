import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

type MapProps = {
  lat: number;
  lng: number;
};

// Fix para el icono por defecto de Leaflet
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export function Map({ lat, lng }: MapProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={16}
      style={{ width: "100%", height: "250px" }}
      scrollWheelZoom={false}
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}

      <TileLayer attribution='&copy; OpenStreetMap &copy; CARTO' url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"/>

      <Marker position={[lat, lng]} icon={defaultIcon}>
        <Popup>
          <strong>Gema Software</strong>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export function ContactoPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <h3 className="mt-20 mb-8 text-2xl font-bold">Contacto</h3>
      <div className="h-64 w-full max-w-4xl">
        <Map lat={-31.417842} lng={-64.1924514} />
      </div>
    </div>
  );
}