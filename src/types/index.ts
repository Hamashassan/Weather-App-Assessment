export interface City {
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface Temperature {
  temperature_2m: number[];
  time: string[];
}
