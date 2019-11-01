import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export const Footer = () => {
    return (
        <View style={{ flexDirection: 'row', top: 10 }}>
            <TouchableOpacity
                style={styles.touchableStyle}>
                <Image style={styles.imagestyle}
                    source={require('./footerImages/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableStyle}>
                <Image style={styles.imagestyle}
                    source={require('./footerImages/notification.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableStyle}>
                <Image style={styles.imagestyle}
                    source={require('./footerImages/person.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableStyle}>
                <Image style={styles.imagestyle}
                    source={require('./footerImages/search.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableStyle}>
                <Image style={styles.imagestyle}
                    source={require('./footerImages/settings.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#EE9D38',
        // height: 88,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        backgroundColor: 'gray',
        margin: 5
    },
    touchableStyle: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },imagestyle:{
        height: 50,
        width: 50
    }

});