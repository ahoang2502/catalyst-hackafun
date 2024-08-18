"use client";

import { Rating } from "@smastrom/react-rating";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

export default function MyMap(props: any) {
  const [rating, setRating] = useState(5);

  const data: [number, number][] = [
    [51, -0.09],
    [45, -0.07],
    [40, -0.09],
    [20, -0.05],
    [55, 0.3],
    [30, 0.08],
    [2, -0.1],
    [37, 144],
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
                  Fad Gallery
                </h3>
                <p className="">Gnd & Flr1, 14 Corrs Lane, Melbourne, 3000</p>
              </Popup>
            </Marker>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle>Fad Gallery - review</DialogTitle>
            <DialogHeader>
              Gnd & Flr1, 14 Corrs Lane, Melbourne, 3000
            </DialogHeader>

            <form>
              <div className="">
                <Label>Name</Label>
                <Input />
              </div>

              <div className="mt-3">
                <Label className="mt-4">Rating</Label>
                <Rating
                  value={rating}
                  style={{ maxWidth: 100 }}
                  onChange={(value: any) => setRating(value)}
                />
              </div>

              <div className="mt-3 space-y-2">
                <Label>Wheelchair accessible?</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-3">
                <Label>How was the place overall?</Label>
                <Textarea rows={7} />
              </div>

              <div className="w-full flex justify-end">
                <Button className="mt-3 text-right" variant="blue" onClick={() =>{
                  toast.success("Thank you! Your response has been submitted!");
                }}>
                  Submit
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      ))}
    </MapContainer>
  );
}
