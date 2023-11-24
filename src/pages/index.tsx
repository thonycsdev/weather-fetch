import { errorAlert, notFoundAlert } from "@/components/alerts/Alerts";
import useLoading from "@/components/hooks/useLoading";
import InputLocation from "@/components/inputLocation/InputLocation";
import Navbar from "@/components/navbar/Navbar";
import TodayWeatherLocation from "@/components/todayWeatherLocation/TodayWeatherLocation";
import { WeatherInformation } from "@/interfaces/OpenWeatherInterfaces/OpenWeatherInterfaces";
import { cityService } from "@/services/cityService";
import { weatherService } from "@/services/weatherService";
import { LinearProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
    const [weatherInformation, setWeatherInformation] = useState<
        WeatherInformation[]
    >([]);

    const { isLoading, changeLoadingState } = useLoading();
    const [isOpen, setIsOpen] = useState(false);
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

            if (!response || response.length === 0) {
                notFoundAlert();
                return;
            }

            const city = response[0];
            const cityWeatherInformation = await weatherService({
                lat: city.latitude,
                lon: city.longitude,
            });

            setWeatherInformation((old) => [...old, cityWeatherInformation]);
        } catch (error) {
            errorAlert();
        } finally {
            changeLoadingState();
        }
    }, []);

    return (
        <>
            <div className="flex flex-col bg-slate-100 h-screen">
                {isLoading ? (
                    <div>
                        <LinearProgress
                            className="my-10 mx-5"
                            aria-label="loading-bar"
                        />
                    </div>
                ) : (
                    isOpen && <InputLocation onSearchClick={handleSearchCity} />
                )}
                {}
                {weatherInformation.map((cityWeather, idx) => (
                    <TodayWeatherLocation
                        weatherInformation={cityWeather}
                        key={idx}
                    />
                ))}
                <Navbar onClick={() => setIsOpen((old) => !old)} />
            </div>
        </>
    );
}
