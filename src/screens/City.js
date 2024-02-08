import React from "react";
import { StatusBar, StyleSheet, Text, SafeAreaView, View , ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';
import IconText from '../components/iconText'
import { weatherType } from "../Utils/weatherType";
import moment from "moment";

const City = ({weatherData}) => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/City-01.jpg')}
                resizeMode='cover'
                style={{flex: 1}}
            >
                <Text style={[styles.cityName, styles.cityText]}>{weatherData.city.name}</Text>
                <Text style={[styles.countryName, styles.cityText]}>{weatherData.city.country}</Text>
                <View style={styles.populationWrapper}>
                    <IconText
                        iconName={'user'}
                        iconColor={'red'}
                        bodyText={`Population: ${weatherData.city.population}`}
                        bodyTextStyles={styles.populationText}
                    />
                </View>
                <View style={styles.riseSetWrapper}>
                    <View style={styles.riseSetWrapper_01}>
                        <Feather name="sunrise" size={50} color="black" />
                        <Text style={styles.riseSetText}>{moment(weatherData.city.sunrise).format('h:mm:ss a')}</Text>
                    </View>
                    <View style={styles.riseSetWrapper_01}>
                        <Feather name="sunset" size={50} color="black" />
                        <Text style={styles.riseSetText}>{moment(weatherData.city.sunset).format('h:mm:ss a')}</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cityName:{
        fontSize: 40,
    },
    countryName:{
        fontSize: 30,
    },
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    populationWrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    populationText:{
        fontSize: 25,
        color: 'red',
        marginLeft: 20,
    },
    riseSetWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
    },
    riseSetWrapper_01:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    riseSetText:{
        fontFamily: 'serif',
        fontSize:30,
        fontStyle: 'italic',
        color: 'white',
    }
});


export default City