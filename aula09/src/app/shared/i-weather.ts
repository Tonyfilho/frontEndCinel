interface condition {
    text: string,
    icon: string,
    code: number,
}

interface current {
    temp_c: number;
    condition: condition;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    pressure_mb: number;
}

interface location {
    name: string,
    country: string,
    localtime: string,
}

export interface IWeather {
    current: current,
    location: location,
}
