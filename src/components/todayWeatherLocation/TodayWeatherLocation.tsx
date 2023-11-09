import { WeatherInformation } from "@/interfaces/OpenWeatherInterfaces/OpenWeatherInterfaces";
import { weatherTypeHashMap } from "@/services/weatherCardBackground";
import React from "react";

type TodayWeatherLocationProps = {
    weatherInformation: WeatherInformation | undefined;
};

function TodayWeatherLocation({
    weatherInformation,
}: TodayWeatherLocationProps) {
    if (!weatherInformation) {
        return <h1>Loading</h1>;
    }
    const description = weatherInformation.weather[0].description;
    const cardBackground = weatherTypeHashMap[description];

    return (
        <div
            className={`flex justify-around font-extralight items-center rounded-xl mx-auto ${cardBackground} text-yellow-700 w-4/5 h-auto py-2 mt-52`}
        >
            <div className="flex-1 pl-8 flex flex-col gap-2 items-start">
                <label className="text-5xl">
                    {weatherInformation.weather[0].main}
                </label>
                <div className="text-3xl">
                    {weatherInformation.main.temp} ºC
                </div>
                <div className="text-xl">{weatherInformation.name}</div>
            </div>
            <div className="">
                <img
                    alt={weatherInformation.weather[0].description}
                    src={`https://openweathermap.org/img/wn/${weatherInformation.weather[0].icon}@2x.png`}
                />
            </div>
        </div>
    );
}

export default TodayWeatherLocation;
