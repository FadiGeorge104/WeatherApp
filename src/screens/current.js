import React from 'react';
import { StatusBar, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText  from '../components/RowText';
import {weatherType} from '../Utils/weatherType';
import { AntDesign } from '@expo/vector-icons';
const CurrentWeather = ({ weatherData, city_name, dt_text }) => {
  if ( !weatherData) {
    return (
        <SafeAreaView style={[styles.errorContainer,{backgroundColor: weatherType[weatherData.weather[0].main].backgroundColor}]}>
            <Text style={styles.errorText}>No current data</Text>
            <AntDesign name={'customerservice'} size={50} color="white" />

        </SafeAreaView>
    );
  };
  if (weatherData) {
    return (
      <SafeAreaView style={[styles.wrapper,{backgroundColor:weatherType[weatherData.weather[0].main].backgroundColor}]}> 
        <View style={styles.container}>
          <Text style={styles.date}>{dt_text}</Text>
          <Text style={styles.cityName}>{city_name}</Text>
          <Feather name={weatherType[weatherData.weather[0].main].icon} size={100} color="white" />
          <Text style={styles.tempStyles}>{weatherData.main.temp}</Text>
          <Text style={styles.feels}>Feels Like: {weatherData.main.feels_like}</Text>
          <RowText 
            messge_1={'High: ' + weatherData.main.temp_max} 
            messge_2={'Low: '+ weatherData.main.temp_min}
            style_1={styles.highLow} 
            style_2={styles.highLow}
            style_3={[styles.highLowWrapper]} 
          /> 
        </View>
        <RowText 
          messge_1={weatherData.weather[0].description}
          messge_2={weatherType[weatherData.weather[0].main].message} 
          style_1={styles.description} 
          style_2={styles.message}
          style_3={styles.bodyWrapper}
        />
    </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={[styles.wrapper]}>
      <View style={styles.container} > 
        <Feather name={'sun'} size={100} color="white" />
        <Text style={styles.tempStyles}>{weatherData.main.temp}</Text>
        <Text style={styles.feels}>Feels Like: {weatherData.main.feels_like}</Text>
        <RowText 
          messge_1={'High: ' + weatherData.main.temp_max} 
          messge_2={'Low: '+ weatherData.main.temp_min}
          style_1={styles.highLow} 
          style_2={styles.highLow}
          style_3={[styles.highLowWrapper]} 
        /> 
      </View>
      <RowText 
          messge_1={weatherData.weather[0].description}
          messge_2={weatherType[weatherData.weather[0].main].message} 
          style_1={styles.description} 
          style_2={styles.message}
          style_3={styles.bodyWrapper}
      />; 
    </SafeAreaView>
    );
}

const styles = StyleSheet.create(
{
  wrapper: {
    flex: 1,
    flexDirection: 'column',

  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels:{
    fontSize: 25,
    color: 'black',
  },
  highLowWrapper: {
    flexDirection: 'colomn',
    alignItems: 'center',

  },
  highLow: {
    fontSize: 21,
    color: 'black',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 32,
  },
  message: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'monospace',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  errorText:{
    color: 'black',
    fontSize:30,
  },
  errorContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName:{
    fontSize: 35,
    color: 'lightblue',
    marginBottom:10,
    fontStyle: 'italic',
    fontFamily: 'monospace',
  },
  date:{
    fontSize: 20,
    color: 'lightblue',
    marginBottom:10,
    fontStyle: 'italic',
    fontFamily: 'monospace',
  }
});

export default CurrentWeather;
