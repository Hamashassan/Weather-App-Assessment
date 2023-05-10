import AsyncStorage from '@react-native-async-storage/async-storage'
import CityTemperature from "./types";

const storeTemperatureData = async (
  cityName: string,
  temperature: number[]
) => {
  try {
    const data: CityTemperature = { temperature };
    await AsyncStorage.setItem(`temperature-${cityName}`, JSON.stringify(data));
  } catch (error) {
    console.error(`Failed to store temperature data for ${cityName}: ${error}`);
  }
};

const getTemperatureData = async (
  cityName: string
): Promise<CityTemperature | null> => {
  try {
    const data = await AsyncStorage.getItem(`temperature-${cityName}`);
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Failed to get temperature data for ${cityName}: ${error}`);
    return null;
  }
};

export { storeTemperatureData, getTemperatureData };
