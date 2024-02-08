import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Feather} from '@expo/vector-icons';

const IconText = (props) => {
    const {iconName , iconColor , bodyText, bodyTextStyles} = props
    return (
        <View  style={{flexDirection: 'row'  , alignItems: 'center',}}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[styles.populatoinTextTheme , bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    populatoinTextTheme:{
        fontWeight: 'bold',
    },
   
})

export default IconText