import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { fetchTemperature, getCurrentTemperature } from "./helper";
import { City } from "../../types";
import Chart from "../Chart";
import styles from "./styles";

type Props = {
  city: City;
};

const CityDetail: React.FC<Props> = ({ city }): JSX.Element => {
  const [temperature, setTemperature] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTemperature(setTemperature, setLoading, city);
  }, [city]);

  const renderContent = () => {
    const { currentTemperature, highTemperature, lowTemperature } =
      getCurrentTemperature(temperature);

    return temperature.length > 0 ? (
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{city?.name}</Text>
        <Text style={styles.temperature}>{currentTemperature}°</Text>
        <Text
          style={styles.highLow}
        >{`H:${highTemperature}° L:${lowTemperature}°`}</Text>
        <Chart temperature={temperature} />
      </View>
    ) : (
      <View style={styles.noInternetContainer}>
        <Text>No internet connection, Please try again later!</Text>
      </View>
    );
  };

  const renderLoader = () => {
    return <ActivityIndicator style={styles.loader} />;
  };

  return (
    <View style={styles.container}>
      {!loading ? renderContent() : renderLoader()}
    </View>
  );
};

export default CityDetail;
