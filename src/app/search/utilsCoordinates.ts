import axios from "axios";

export async function getCoordinates(address: string) {
  const apiKey = process.env.NEXT_PUBLIC_GEOCODING_API_KEY; // Use OpenCage or Google Maps API
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  const response = await axios.get(url);
  const { lat, lng } = response.data.results[0].geometry;
  return { lat, lng }; // Longitude first
}
