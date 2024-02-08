import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import ListItem from '../components/Listitem';
import { useGetWeather } from '../hooks/useGetWeather';
const Empty = () => (
    <View>
        <Text style={{fontSize: 30 , color: 'white'}}>Empty</Text>
    </View>
)
const itemSeparate = () => (
    <View style={{ height: 2 , backgroundColor: 'black' }} />
)

const UpComingWeather = ({weatherData }) => {
    const [selectedId, setSelectedId] = useState();
    const renderItem_function = ({ item}) => {
        const backgroundColor = item.dt === selectedId ? 'gray' : 'lightblue'
        const color =  item.dt=== selectedId ? 'white' : 'black';
        return(
            <ListItem

                condition={item.weather[0].main}
                weather={item.weather[0].description}
                dt_text={item.dt_txt}
                min={item.main.temp_min}
                max={item.main.temp_max}
                onPress={() => setSelectedId(item.dt)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );   
    };
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/weather-02.jpg')} 
                resizeMode='cover'
                style={styles.image}
            >
                <FlatList
                    data={weatherData}
                    renderItem={renderItem_function}
                    keyExtractor={(item) => item.dt}
                    ListEmptyComponent={
                        <Empty />
                    } 
                />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 5,
        backgroundColor: 'pink',
    },
    item1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical:2,
    },
    item3: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    temp:{
        color: 'white',
        fontSize: 20
    },
    data: {
        color: 'white',
        fontSize: 15
    },
    image: {
        flex: 1,
    }
});

export default UpComingWeather;