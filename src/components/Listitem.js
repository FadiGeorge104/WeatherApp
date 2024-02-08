import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import {Feather} from '@expo/vector-icons';
import { weatherType } from '../Utils/weatherType';
import moment from 'moment/moment';
const ListItem = ({dt_text,min,max,weather,onPress,backgroundColor,textColor,condition}) => {
  return (
          <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor},{flexDirection: 'column'}]}>
              <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
                  <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
                      <Text style={[styles.temp, {color: textColor}]}>{moment(dt_text).format('dddd')}</Text>
                      <Text style={[styles.temp, {color: textColor}]}>{moment(dt_text).format('MMMM Do YYYY')}</Text>
                      <View >
                          <Text style={[styles.temp, {color: textColor}]}>{`${Math.round(max)}°/${Math.round(min)}°`}</Text>
                      </View>
                  </View>    
                  <View style={{flexDirection : 'column', justifyContent: 'space-around' , alignItems: 'center'}}>
                      <Feather name={weatherType[condition].icon} size={50} color="black" />
                      <Text style={[styles.temp, {color: textColor}]}>{weather}</Text>        
                  </View>
              </SafeAreaView>
         </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
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

export default ListItem