import useLoading from "@/components/hooks/useLoading";
import InputLocation from "@/components/inputLocation/InputLocation";
import TodayWeatherLocation from "@/components/todayWeatherLocation/TodayWeatherLocation";
import { WeatherInformation } from "@/interfaces/OpenWeatherInterfaces/OpenWeatherInterfaces";
import { cityService } from "@/services/cityService";
import { weatherService } from "@/services/weatherService";
import LinearProgress from "@mui/material/LinearProgress";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
    const [weatherInformation, setWeatherInformation] = useState<
        WeatherInformation[]
    >([]);

    const { isLoading, changeLoadingState } = useLoading();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (cbData) => {
            const response = await weatherService({
                lat: cbData.coords.latitude,
                lon: cbData.coords.longitude,
            });
            setWeatherInformation([response]);
        });
    }, []);
    const handleSearchCity = useCallback(async (cityName: string) => {
        try {
            changeLoadingState();
            const response = await cityService(cityName);
            const city = response[0];
            const cityLocationInfo = {
                lat: city.latitude,
                lon: city.longitude,
            };
            const cityWeatherInformation = await weatherService(
                cityLocationInfo
            );
            setWeatherInformation((old) => [...old, cityWeatherInformation]);
        } catch (error) {
        } finally {
            changeLoadingState();
        }
    }, []);
    return (
        <>
            <div className="flex flex-col bg-slate-100 h-screen">
                {isLoading ? (
                    <div className="my-10 px-20 h-10">
                        <LinearProgress />
                    </div>
                ) : (
                    <div className="h-10 my-10">
                        <InputLocation onSearchClick={handleSearchCity} />
                    </div>
                )}
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
