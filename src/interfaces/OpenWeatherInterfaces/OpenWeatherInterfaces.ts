export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface WeatherInformation {
    clouds: Clouds;
    coord: Coord;
    main: Main;
    sys: Sys;
    weather: Weather[];
    wind: Wind;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
