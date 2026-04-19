import {
  APIProvider,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import { MapPin } from "lucide-react";
import { EVENT } from "../lib/event";

const PURPLE_MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#1a0f28" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a0f28" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#c084fc" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e0b3ff" }],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [{ color: "#c084fc" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#c084fc" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#2d1b45" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9b4dff" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#3d2856" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#9b4dff" }, { lightness: -40 }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e0b3ff" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#4a2e6b" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#c084fc" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2d1b45" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0a0514" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9b4dff" }],
  },
];

const PURPLE_MARKER_ICON: google.maps.Symbol = {
  path: "M12 2C7.58 2 4 5.58 4 10c0 5.25 7.06 11.4 7.36 11.66a1 1 0 0 0 1.28 0C12.94 21.4 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
  fillColor: "#9b4dff",
  fillOpacity: 1,
  strokeColor: "#e0b3ff",
  strokeWeight: 2,
  scale: 2,
  anchor: { x: 12, y: 22 } as google.maps.Point,
};

function MapFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f28] to-[#2d1b45] flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #9b4dff 1px, transparent 1px),
              linear-gradient(to bottom, #9b4dff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="relative z-10 text-center px-6">
        <MapPin className="w-12 h-12 text-[#e0b3ff] mx-auto mb-3" />
        <p className="text-[#e0b3ff] mb-1">{EVENT.venue}</p>
        <p className="text-[#b8a8d4] text-sm mb-4">
          {EVENT.city}/{EVENT.state}
        </p>
        <p className="text-[#b8a8d4]/70 text-xs max-w-xs mx-auto">
          Defina <code className="text-[#c084fc]">VITE_GOOGLE_MAPS_API_KEY</code>{" "}
          em <code className="text-[#c084fc]">.env.local</code> para exibir o
          mapa real.
        </p>
      </div>
    </div>
  );
}

export default function PurpleMap() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  if (!apiKey) {
    return <MapFallback />;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={EVENT.coords}
        defaultZoom={17}
        gestureHandling="cooperative"
        styles={PURPLE_MAP_STYLE}
        clickableIcons={false}
        className="w-full h-full"
      >
        <Marker position={EVENT.coords} icon={PURPLE_MARKER_ICON} />
      </Map>
    </APIProvider>
  );
}
