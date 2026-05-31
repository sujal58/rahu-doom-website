"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export type CountryKey = "usa" | "india" | "nepal";

const COUNTRIES: Record<
  CountryKey,
  { coords: [number, number]; flag: string; label: string }
> = {
  usa: {
    coords: [39.5, -98.35],
    flag: "us",
    label: "Founders' international experience",
  },
  india: {
    coords: [20.59, 78.96],
    flag: "in",
    label: "Prior work experience & expertise",
  },
  nepal: {
    coords: [28.39, 84.12],
    flag: "np",
    label: "Headquarters & local delivery",
  },
};

// Triangular connections between all three countries
const LINES: [CountryKey, CountryKey][] = [
  ["usa", "india"],
  ["india", "nepal"],
  ["nepal", "usa"],
];

function createFlagIcon(flag: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
        width:46px;height:46px;border-radius:50%;overflow:hidden;
        border:3px solid #A4161A;
        box-shadow:0 0 0 4px rgba(164,22,26,0.15),0 4px 14px rgba(0,0,0,0.25);
        background:#fff;
      ">
        <img src="https://flagcdn.com/w80/${flag}.png"
          style="width:100%;height:100%;object-fit:cover;" />
      </div>`,
    iconSize: [46, 46],
    iconAnchor: [23, 23],
    popupAnchor: [0, -28],
  });
}

// Lives inside MapContainer — flies to the selected country when it changes
function FlyTo({ selected }: { selected: CountryKey | "all" }) {
  const map = useMap();
  useEffect(() => {
    if (selected === "all") {
      map.flyTo([20, 20], 2, { duration: 1 });
    } else {
      map.flyTo(COUNTRIES[selected].coords, 5, { duration: 1 });
    }
  }, [selected, map]);
  return null;
}

interface Props {
  selected: CountryKey | "all";
}

export default function GlobalMap({ selected }: Props) {
  return (
    <MapContainer
      center={[20, 20]}
      zoom={2}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <FlyTo selected={selected} />

      {/* Red dashed connecting lines */}
      {LINES.map(([a, b], i) => (
        <Polyline
          key={i}
          positions={[COUNTRIES[a].coords, COUNTRIES[b].coords]}
          pathOptions={{
            color: "#A4161A",
            dashArray: "8 7",
            weight: 1.8,
            opacity: 0.55,
          }}
        />
      ))}

      {/* Flag markers */}
      {(Object.entries(COUNTRIES) as [CountryKey, (typeof COUNTRIES)[CountryKey]][]).map(
        ([key, c]) => (
          <Marker key={key} position={c.coords} icon={createFlagIcon(c.flag)}>
            <Popup>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong>
              <br />
              {c.label}
            </Popup>
          </Marker>
        )
      )}
    </MapContainer>
  );
}
