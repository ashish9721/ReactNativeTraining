import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native'

export default class Card extends React.Component {

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.component}>
                    <View style={{ justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 ,paddingTop:10,paddingBottom:10}}>
                        
                    </View>
                </View>
            </View>

        );


    }

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop:10
    },
    component: {
        width: "95%",
        elevation: 12,
        marginBottom:20,
        marginLeft:5,
        marginRight:5,
        shadowColor: 'gray',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: 'lightgreen',
        shadowOpacity: 0.5,
        justifyContent: 'space-evenly',
    }
})