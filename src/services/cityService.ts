import { City } from "@/interfaces/City/City";
import axios from "axios";

export async function cityService(cityName: string): Promise<City[]> {
    const response = await axios.get(
        `https://api.api-ninjas.com/v1/geocoding?city=${cityName}`,
        {
            headers: {
                "X-Api-Key": process.env.NEXT_PUBLIC_API_NINJA_KEY,
            },
        }
    );
    if (!response.data) {
        throw new Error("Invalid response from geocoding API");
    }
    return response.data;
}
