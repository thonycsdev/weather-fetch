import { Inter } from "next/font/google";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((cbData) => {
      console.log(cbData);
    });
  }, []);
  return <h1>Weather Fetch</h1>;
}
