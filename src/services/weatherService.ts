import {
    Coord,
    WeatherInformation,
} from "@/interfaces/OpenWeatherInterfaces/OpenWeatherInterfaces";
import axios from "axios";

export async function weatherService(
    coord: Coord
): Promise<WeatherInformation> {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
}
