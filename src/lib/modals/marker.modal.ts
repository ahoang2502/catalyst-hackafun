import { Schema, model, models } from "mongoose";

const MarkerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Array,
  },
});

const Marker = models?.Marker || model("Marker", MarkerSchema);

export default Marker;
