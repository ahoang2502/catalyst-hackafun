"use server";

import Marker from "@/lib/modals/marker.modal";
import { db } from "@/lib/db";

export async function getMarkers() {
  try {
    await db();
    const data = await Marker.find();
    console.log({ data });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
