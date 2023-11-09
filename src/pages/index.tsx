import InputLocation from "@/components/inputLocation/InputLocation";
import TodayWeatherLocation from "@/components/todayWeatherLocation/TodayWeatherLocation";
import { WeatherInformation } from "@/interfaces/OpenWeatherInterfaces/OpenWeatherInterfaces";
import { cityService } from "@/services/cityService";
import { weatherService } from "@/services/weatherService";
import { useEffect, useState } from "react";

export default function Home() {
    const [weatherInformation, setWeatherInformation] = useState<
        WeatherInformation[]
    >([]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (cbData) => {
            const response = await weatherService({
                lat: cbData.coords.latitude,
                lon: cbData.coords.longitude,
            });
            setWeatherInformation([response]);
        });
    }, []);
    const handleSearchCity = async (cityName: string) => {
        const response = await cityService(cityName);
        const city = response[0];
        const cityLocationInfo = {
            lat: city.latitude,
            lon: city.longitude,
        };
        const cityWeatherInformation = await weatherService(cityLocationInfo);
        setWeatherInformation((old) => [...old, cityWeatherInformation]);
    };
    return (
        <>
            <div className="flex flex-col bg-slate-100 h-screen">
                <InputLocation onSearchClick={handleSearchCity} />
                {weatherInformation.map((cityWeather, idx) => (
                    <TodayWeatherLocation
                        weatherInformation={cityWeather}
                        key={idx}
                    />
                ))}
            </div>
        </>
    );
}
