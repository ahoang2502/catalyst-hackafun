"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MyMap(props: any) {
  const { position, zoom } = props;

  const data: [number, number][] = [
    [51, -0.09],
    [45, -0.07],
    [40, -0.09],
    [30, -0.07],
  ];

  return (
    <MapContainer
      center={[51, -0.09]}
      zoom={2}
      scrollWheelZoom={false}
      className="h-[100vh] z-[10]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((data) => (
        <Popover>
          <PopoverTrigger>
            <Marker position={data}>
              <Popup>
                <h3 className="text-sm font-bold underline hover:cursor-pointer">
                  Location Name
                </h3>
                <p className="">{data}</p>
              </Popup>
            </Marker>
          </PopoverTrigger>

          <PopoverContent>Helllodeedjend</PopoverContent>
        </Popover>
      ))}
    </MapContainer>
  );
}
