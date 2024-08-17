"use client";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

      {data.map((item) => (
        <Dialog key={item[0]}>
          <DialogTrigger>
            <Marker position={item}>
              <Popup>
                <h3 className="text-sm font-bold underline hover:cursor-pointer">
                  Location Name
                </h3>
                <p className="">{data}</p>
              </Popup>
            </Marker>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle>Location Name</DialogTitle>
            <DialogHeader>Location description</DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </MapContainer>
  );
}
