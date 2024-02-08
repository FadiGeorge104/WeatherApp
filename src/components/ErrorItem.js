import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
const ErrorItem = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.errText}>Sorry something went wrong</Text>
                <Feather name={'frown'} size={100} color={'white'} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    errText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'serif',
        marginHorizontal: 10,
        fontStyle: 'italic'
    }
})

export default ErrorItem;
