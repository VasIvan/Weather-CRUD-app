export interface IForecast {
    Id: number;
    Temperature: number;
    Rain: number;
    Wind: number;
    Day: string;
    City: string;
}

export interface ICity {
    Id: number;
    City: string;
}