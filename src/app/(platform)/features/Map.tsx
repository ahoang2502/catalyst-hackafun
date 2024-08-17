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

  return (
    <MapContainer
      center={[51, -0.09]}
      zoom={2}
      scrollWheelZoom={false}
      className="h-[100vh] rounded-lg z-[10]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Popover>
        <PopoverTrigger>
          <Marker position={[51, -0.09]}>
            <Popup>
              <h3 className="text-sm font-bold">Location Name</h3>
            </Popup>
          </Marker>
        </PopoverTrigger>

        <PopoverContent>
          Helllodeedjend</PopoverContent>
      </Popover>
    </MapContainer>
  );
}
