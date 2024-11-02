import { useMapEvents } from "react-leaflet";
import { useSearchParams } from "react-router-dom";

useMapEvents;

export function UseUrlPositions() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}
