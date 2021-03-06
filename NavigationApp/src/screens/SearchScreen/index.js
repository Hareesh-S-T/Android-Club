// import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Search() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        color: '#ffffff',
        fontSize: 28,
    },
})