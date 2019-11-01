import React from 'react';
import { View, Dimensions, Text, StyleSheet ,Image,ImageBackground} from 'react-native'

export default class Card4 extends React.Component {

    render() {
        return (
            <View style={Styles.container}>
                 <View style ={{flexDirection:'row', backgroundColor:'#FEEED3',height:205}}>
                <View style={Styles.component}>
                <Image style={{width:100,height:120, backgroundColor:'#FEEED3',borderRadius:5}} source={require('../../assets/header.png')}/> 
                    <View style={Styles.smallImageandtextcontainer}>
                        <Image style={{width:36,height:36}} source={require('../../assets/goldMedal.png')} />
                        <Text style={{fontSize:14 , color:'gray'}}>1st</Text>
                    </View>
                </View>
                
                <View style={Styles.component}>
                <Image style={{width:100,height:120, backgroundColor:'#FEEED3',borderRadius:5}} source={require('../../assets/header.png')}/> 
                    <View style={Styles.smallImageandtextcontainer}>
                        <Image style={{width:36,height:36}} source={require('../../assets/goldMedal.png')} />
                        <Text style={{fontSize:14 , color:'gray'}}>1st</Text>
                    </View>
                </View>
                
                <View style={Styles.component}>
                <Image style={{width:100,height:120, backgroundColor:'#FEEED3',borderRadius:5}} source={require('../../assets/header.png')}/> 
                    <View style={Styles.smallImageandtextcontainer}>
                        <Image style={{width:36,height:36}} source={require('../../assets/goldMedal.png')} />
                        <Text style={{fontSize:14 , color:'gray'}}>1st</Text>
                    </View>
                </View>
                
                
                </View>
                <ImageBackground style={Styles.curlyImageStyle} source={require('../../assets/ic.png')} >
                    <Text style={{fontSize:25,fontWeight:'bold',paddingLeft:60,paddingTop:12}}>Roads Travelled</Text>
                    <Text style={{fontSize:15,color:'gray',paddingLeft:60}}>() 21st Jan 2018 - 10thFeb 2018</Text>
                    </ImageBackground>
            </View>

        );


    }

}

const Styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding:5,
        height:280,
        width:"100%",
        
       
    },
    component: {
        paddingTop:10,paddingLeft:5,
        elevation: 12,
        width:120,
        height:150,
        paddingLeft:20,
        // marginLeft:5,
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        backgroundColor:'#FEEED3', 
    },
    smallImageandtextcontainer:{
        flexDirection:'row',
        width:80,
        padding:5,
        shadowColor: 'gray',
        zIndex:1,
        shadowOffset: { width: 5, height: 5 },
        position:'absolute',
        marginTop:100,
        marginLeft:18,
        shadowOpacity: 0.5,
        borderRadius:10,
        backgroundColor:'white',
        justifyContent:'space-around',
        alignItems:'center'
    },
    curlyImageStyle:{
        width:"100%",
        height:100,
       marginLeft:8,
       marginRight:5,
        position:'absolute',
        marginTop:180,
        shadowOpacity: 0.5,
        shadowColor: 'gray',
        shadowOffset: { width: 5, height: 5 },
    }
})