import React from "react";
import { ImageBackground, Text } from "react-native";
import Swiper from "react-native-swiper";

import cities from "../../data/cityCoordinates.json";
import { CityDetail } from "../../components";
import Images from "../../theme/Images";
import styles from "./styles";

import { City } from "../../types";

const Home: React.FC = (): JSX.Element => {
  return (
    <ImageBackground source={Images.images.background} style={styles.container}>
      <Swiper
        testID="swiper"
        loadMinimalSize={0}
        loadMinimal={true}
        showsPagination={false}
        loop={false}
      >
        {cities.map((city: City, index: number) => (
          <CityDetail city={city} key={index} />
        ))}
      </Swiper>
    </ImageBackground>
  );
};

export default Home;
