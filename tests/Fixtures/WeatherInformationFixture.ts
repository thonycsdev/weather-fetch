import {
    Weather,
    WeatherInformation,
} from "@/interfaces/OpenWeatherInterfaces/OpenWeatherInterfaces";
import { randomInt } from "crypto";

function weatherInformationFixture() {
    const randomIntNumber = randomInt(1, 1000);
    const weatherObject: Weather = {
        id: 0,
        main: "Cloudy",
        description: "Cloudy",
        icon: "1dc",
    };
    const object: WeatherInformation = {
        clouds: {
            all: randomIntNumber,
        },
        coord: {
            lon: randomIntNumber,
            lat: randomIntNumber,
        },
        main: {
            temp: randomIntNumber,
            feels_like: randomIntNumber,
            temp_min: randomIntNumber,
            temp_max: randomIntNumber,
            pressure: randomIntNumber,
            humidity: randomIntNumber,
            sea_level: randomIntNumber,
            grnd_level: randomIntNumber,
        },
        sys: {
            type: randomIntNumber,
            id: randomIntNumber,
            country: "Brazil",
            sunrise: randomIntNumber,
            sunset: randomIntNumber,
        },
        weather: [weatherObject],
        wind: {
            speed: randomIntNumber,
            deg: randomIntNumber,
            gust: randomIntNumber,
        },
        timezone: randomIntNumber,
        id: randomIntNumber,
        name: "Brazil",
        cod: randomIntNumber,
    };

    return object;
}

export default weatherInformationFixture;
