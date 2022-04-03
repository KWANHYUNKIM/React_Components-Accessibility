import { useState } from "react";

export function useWeather() {
    const [loading, setLoading] = useState(true);
    const headlines = [
    { time: "2021-03-29 02:00", text: "Partly cloudy", temp: 20, wind: 6.1 },
    { time: "2021-03-29 05:00", text: "Cloudy", temp: 22, wind: 9.3 },
    { time: "2021-03-29 09:00", text: "Fine", temp: 25, wind: 15.1 },
    { time: "2021-03-29 11:00", text: "Fine", temp: 28, wind: 12 },
    ];
    return {
    loading, 
    headlines,
    error: null,
    };
}