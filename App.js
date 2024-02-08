import React,{useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import Counter from "./src/demonstration/Counter";
import { View,ActivityIndicator,StyleSheet } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";
const App = () => {
  
  const [loading,error,weather] = useGetWeather();
  console.log(weather);
  
  if(weather && weather.list && !loading){
    return (
      <NavigationContainer>
        <Tabs weatherProp={weather}/>
      </NavigationContainer>
    )
  };

  
  return (
    <View style={styles.container}>
      {error? <ErrorItem /> : <ActivityIndicator size="large"  color='green'/>}
    </View>
  )
};

const styles= StyleSheet.create(
  {
    container: {
      flex: 1,
    },
  }
)

export default App;