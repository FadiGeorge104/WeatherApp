import React from "react";
import { StatusBar } from "react-native";
//import screens 
import CurrentWeather from "../screens/current";
import UpComingWeather from "../screens/UpomingWeather";
import City from "../screens/City";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Tabs = ({ weatherProp }) => {
    console.log(weatherProp)
    /*
    if (!weather || !weather.list || !weather.list.length) {
        return null; // Render nothing if weather data is not available
    }
    */
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: 'lightblue',

                },
                headerStyle: { 
                    backgroundColor: 'lightblue',
                },
                headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato',
                },
                headerTitleAlign: 'center',
                
            }}
        >
            <Tab.Screen name={'Current'}
                options={{
                tabBarIcon: ({focused}) => <Feather name="droplet" size={24}  color={focused ? 'tomato' : 'black'} />
                }}
            >
                {() => <CurrentWeather weatherData={weatherProp.list[0]} city_name={weatherProp.city.name}  dt_text={weatherProp.list[0].dt_txt}/>}
            </Tab.Screen>
        

          <Tab.Screen name={'Upcoming'} 
                options={{
                tabBarIcon: ({focused}) => <Feather name = 'clock' size = {24} color = {focused ? 'tomato' : 'black'} />
                }}
          >
                {() => <UpComingWeather weatherData={weatherProp.list}/>}
                
          </Tab.Screen>
            
          <Tab.Screen name={'City'} 
                options={{
                tabBarIcon: ({focused}) => <Feather name='home' size={24} color= {focused ? 'tomato': 'black'} />
                }}
          >
                {() => <City weatherData={weatherProp} />}
          </Tab.Screen>
      </Tab.Navigator>
    )
}

export default Tabs