import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Alert } from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = "99c5c3af02d3e6682bf79e1e7f1aa3a4";

export default class extends React.Component {

  state = {
    isLoading: true,
  }

  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main,
    });
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Не можу визначити локацію", "Дуже сумно :(");
    }
    
  }

  componentDidMount () {
    this.getLocation();
  }

  render () {
    const { isLoading, temp, condition } = this.state;

    return (
      isLoading
        ? <Loading />
        : <Weather temp={ Math.round(temp) } condition={condition} />
    );
  }
}
