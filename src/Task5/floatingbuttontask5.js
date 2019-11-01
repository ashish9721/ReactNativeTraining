import React from 'react'
import {TouchableOpacity,Text,Image,StyleSheet,Alert} from 'react-native'

export const  FloatingButton = () => {
        return(
            <TouchableOpacity style={Styles.floatStyle}
                onPress={()=>Alert.alert('Floating Button Pressed')}>
                <Text style={Styles.textStyle}>+</Text>
            </TouchableOpacity>
        )
}
const Styles=StyleSheet.create({
    floatStyle:{
        backgroundColor:"#FB9701",
        width:50,
        height:50,
        alignItems:'center',
        borderRadius:50,
        bottom:60,
        right:5,
        position:'absolute',
        justifyContent:'center'
    },
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
})