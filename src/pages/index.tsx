import TodayWeatherLocation from "@/components/todayWeatherLocation/TodayWeatherLocation";
import { WeatherInformation } from "@/interfaces/OpenWeatherInterfaces/OpenWeatherInterfaces";
import { weatherService } from "@/services/weatherService";
import { useEffect, useState } from "react";

export default function Home() {
    const [weatherInformation, setWeatherInformation] = useState<
        WeatherInformation | undefined
    >();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (cbData) => {
            const response = await weatherService({
                lat: cbData.coords.latitude,
                lon: cbData.coords.longitude,
            });
            setWeatherInformation(response);
        });
    }, []);
    return (
        <>
            <div className="flex flex-col bg-slate-100 h-screen">
                <TodayWeatherLocation weatherInformation={weatherInformation} />
            </div>
        </>
    );
}
