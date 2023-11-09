import { weatherService } from "@/services/weatherService";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((cbData) => {
            console.log(cbData);
            weatherService();
        });
    }, []);
    return <h1>w</h1>;
}
