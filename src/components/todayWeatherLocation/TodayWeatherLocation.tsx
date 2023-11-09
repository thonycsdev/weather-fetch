import { WeatherInformation } from "@/interfaces/OpenWeatherInterfaces/OpenWeatherInterfaces";
import React from "react";

type TodayWeatherLocationProps = {
    weatherInformation: WeatherInformation | undefined;
};

function TodayWeatherLocation({
    weatherInformation,
}: TodayWeatherLocationProps) {
    return (
        <div className="mx-auto bg-slate-300 w-4/5 h-auto py-3">
            <div>
                <label>{weatherInformation?.main.temp}</label>
            </div>
        </div>
    );
}

export default TodayWeatherLocation;
