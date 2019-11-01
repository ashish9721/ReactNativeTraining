import React from 'react';
import { View, Dimensions, Text, StyleSheet,ImageBackground } from 'react-native'

export default class Card extends React.Component {

    render() {
        return (
           <ImageBackground style={{width:"100%",height:"100%",flex:1}} source={require('../../assets/task2bgphoto.jpg')}>
            <View style={Styles.container}>
                <View style={Styles.component}>
                    <View style={{ justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 ,paddingTop:10,paddingBottom:10}}>
                        
                        <Text style={{ paddingRight: 5 ,fontSize:20 ,color:'white'}}> UserId : {this.props.userId}</Text>
                        <Text style={{ paddingRight: 5 ,fontSize:20 , color:'white'}}> Title : {this.props.title}</Text>
                        <Text style={{ paddingRight: 5 ,fontSize:20 , color:'white'}}> Id : {this.props.id} </Text>
                        <Text style={{ paddingRight: 5 ,fontSize:20 , color:'white'}}> completed : {this.props.completed}</Text>
                    </View>
                </View>
            </View>
            </ImageBackground>
        );


    }

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop:10,
        paddingRight:10
    },
    component: {
        width: "100%",
        elevation: 12,
        paddingRight:10,
        marginBottom:20,
        shadowColor: 'gray',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        justifyContent: 'space-evenly',
    }
})