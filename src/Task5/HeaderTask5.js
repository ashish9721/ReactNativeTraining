import React from 'react'
import { View, Platform, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity
                style={styles.touchableStyle}>
                <Image style={{position: 'absolute'}}
                    source={require('./footerImages/back.png')} />
            </TouchableOpacity>
            <Text style={styles.headerStyle}>{props.galleryKeyword }</Text>
            <View style={styles.touchableStyle}></View>
        </View>
    );
}

const styles1 = StyleSheet.create({
    height: Platform.OS == 'ios' ? 88 : -18,
  });

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#EE9D38',
        height: styles1.height,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 0
    },
    headerStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: 30,
    },
    touchableStyle: {
        left: -25,
        top:-5,
    },
    imagestyle:{
        // height: 25,
        // width: 20,
        // flexBasis: "25%",
        // right: 100,
        // top:15
    }

});