import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141e30", "#243b55"],
    title: "Гроза",
    subtitle: "Гучний грім і сильний дощ. Залишайтеся в безпеці!"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Мряка", 
    subtitle: "Легкий дощ. Візьміть парасольку!" 
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1cb5e0"],
    title: "Дощ", 
    subtitle: "Сильний дощ. Не забудьте парасольку!" 
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Сніг", 
    subtitle: "Очікується снігопад. Одягніться тепліше!" 
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Мла", 
    subtitle: "Погана видимість через млу. Будьте обережні." 
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Дим", 
    subtitle: "Якість повітря може бути поганою. Залишайтеся вдома." 
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3e5151", "#decba4"],
    title: "Серпанок", 
    subtitle: "Зменшена видимість через серпанок. Будьте уважні." 
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#b79891", "#94716b"],
    title: "Пил", 
    subtitle: "Пил у повітрі. За потреби вдягніть маску." 
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#d7d2cc", "#304352"],
    title: "Туман", 
    subtitle: "Щільний туман. Видимість дуже низька." 
  },
  Sand: {
    iconName: "weather-cloudy",
    gradient: ["#c2b280", "#e0ac69"],
    title: "Пісок", 
    subtitle: "Піщані вітри. Захистіть очі." 
  },
  Ash: {
    iconName: "weather-cloudy",
    gradient: ["#616161", "#9bc5c3"],
    title: "Попіл", 
    subtitle: "Попіл у повітрі. Уникайте перебування на вулиці." 
  },
  Squall: {
    iconName: "weather-cloudy",
    gradient: ["#485563", "#29323c"],
    title: "Шквал", 
    subtitle: "Сильний шквальний вітер. Будьте обережні." 
  },
  Tornado: {
    iconName: "thunderstorm-outline",
    gradient: ["#232526", "#414345"],
    title: "Торнадо", 
    subtitle: "Смерч! Укрийтеся у безпечному місці." 
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Ясно", 
    subtitle: "Чисте небо та сонячно. Насолоджуйтесь днем!" 
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "Хмарно", 
    subtitle: "Небо вкрите хмарами. Можливий дощ." 
  },
};

export default function Weather ({ temp, condition }) {
  return (
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />

        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            name={weatherOptions[condition].iconName}
            size={96}
            color="#fff"
          />

          <Text style={styles.temp}>
            { temp }°
          </Text>
        </View>

        <View style={{...styles.halfContainer, ...styles.textContainer}}>
          <Text style={styles.title}>
            { weatherOptions[condition].title }
            </Text>

          <Text style={styles.subtitle}>
            { weatherOptions[condition].subtitle }
          </Text>
        </View>
      </LinearGradient>
  );
};

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado", "Clear", "Clouds"]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
