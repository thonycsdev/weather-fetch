import TodayWeatherLocation from "@/components/todayWeatherLocation/TodayWeatherLocation";
import { screen, render, cleanup } from "@testing-library/react";
import weatherInformationFixture from "../../Fixtures/WeatherInformationFixture";
describe("Today Weather Location", () => {
    const dataFixture = weatherInformationFixture();
    beforeEach(() => {
        cleanup();
        render(<TodayWeatherLocation weatherInformation={dataFixture} />);
    });
    test("Should render loading when a weather information was not provided", () => {
        cleanup();
        render(<TodayWeatherLocation weatherInformation={undefined} />);
        const loading = screen.getByText(/loading/i);
        expect(loading).toBeInTheDocument();
    });
    test("Should render the main weather type of the weather", () => {
        const weatherMainInfo = screen.getByText(dataFixture.weather[0].main);
        expect(weatherMainInfo).toBeInTheDocument();
    });
    test("Should render the correct temp of the day", () => {
        const temperature = screen.getByText(dataFixture.main.temp + " ºC");
        expect(temperature).toBeInTheDocument();
    });
    test("Should render the weather infomation name of the location", () => {
        const locationName = screen.getByText(dataFixture.name);
        expect(locationName).toBeInTheDocument();
    });
});
