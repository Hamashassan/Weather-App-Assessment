import React, { Dispatch, SetStateAction } from "react";
import NetInfo from "@react-native-community/netinfo";

import { storeTemperatureData, getTemperatureData } from "../../store";
import { BASE_URL } from "../../config/Constants";
import { Temperature, City } from "../../types";

const fetchLocalData = async (
  setTemperature: Dispatch<SetStateAction<number[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  name: string
) => {
  const storedData = await getTemperatureData(name);
  if (storedData != null) {
    setTemperature(storedData.temperature);
    setLoading(false);
  } else {
    setLoading(false);
  }
};

export async function fetchTemperature(
  setTemperature: Dispatch<SetStateAction<number[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  city: City
): Promise<void> {
  const { coordinates, name } = city;
  try {
    const connectionInfo = await NetInfo.fetch();
    if (connectionInfo.isConnected) {
      // If internet is connected
      const url = `${BASE_URL}v1/forecast?hourly=temperature_2m&latitude=${coordinates.latitude}&longitude=${coordinates.longitude}`;
      const response = await fetch(url);
      const data: { hourly: Temperature } = await response.json();
      const temp = data.hourly.temperature_2m.slice(0, 24);
      setTemperature(temp);
      await storeTemperatureData(name, temp);
      setLoading(false);
    } else {
      // If there is no internet connection, try to get the temperature data from local storage
      fetchLocalData(setTemperature, setLoading, name);
    }
  } catch (error) {
    console.error(`Failed to fetch temperature for ${city.name}: ${error}`);
    fetchLocalData(setTemperature, setLoading, name);
  }
}

export const getCurrentTemperature = (
  temperature: number[]
): {
  currentTemperature: number;
  highTemperature: number;
  lowTemperature: number;
} => {
  const date = new Date();
  const currenHour = date.getHours();
  const currentTemperature = [...temperature].slice(currenHour)[0];
  const highTemperature = Math.max(...temperature);
  const lowTemperature = Math.max(...temperature);
  return { currentTemperature, highTemperature, lowTemperature };
};
