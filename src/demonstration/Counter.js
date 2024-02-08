import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect (() => {
        console.log('count', count)
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Count: {count}</Text>
            <View style={styles.bottomView}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'green' }]}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'gray' }]}
                    onPress={() => setCount(count - 1)}
                >
                    <Text style={styles.buttonText}>Decrement</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: 'orange',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        textShadowColor: 'gray',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 30, // Adjust the font size here
        color: 'white',
        textAlign: 'center',
    },
});

export default Counter;
