import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity,Image,Dimensions,ImageBackground } from 'react-native';
import stringsOfApp from '../translations/local'
import AsyncStorage from '@react-native-community/async-storage';

export default class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.state={
            emailid:'default'
        }
        AsyncStorage.getItem('myemailid',(error,result)=>{
            this.setState({
                emailid:result
            },()=>{
                console.warn("my async value is ",this.state.emailid)
            })
        })
    }
   componentDidMount(){
       AsyncStorage.getItem('myemailid',(error,result)=>{
           console.warn("the result is",result)

})
       
   }

render(){
    return(
        <ImageBackground style={styles.container} source={require('../../assets/dashboard.jpg')}>
           <View style={styles.detailviewcontainer}>
             <Text style={{fontSize:20,color:'white',borderRadius:20,borderColor:'gray',padding:10,margin:10}}>Email Id :</Text>
            <View style={{borderBottomColor:'#17adb3',borderBottomWidth:2,justifyContent:'flex-end'}}>  
             <Text style={{fontSize:20,paddingBottom:5,color:'white',borderRadius:20,borderBottomColor:'white'}}>{this.state.emailid}</Text>
             </View>
           </View>
           
          <View style={styles.btncontainer}>
            <TouchableOpacity style={{padding:5,height:50,borderRadius:20,borderWidth:3,borderColor:'white',justifyContent:'center',alignItems:'center'}} 
            onPress={()=>{
                // AsyncStorage.clear()
                console.warn("your storage is cleared and uncomment the tag")
            }}>
                <Text style={{color:"black",fontSize:18}}>Clear Storage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5,height:50,borderRadius:20,borderWidth:2,borderColor:'white',justifyContent:'center',alignItems:'center'}}
            onPress={()=>{
                this.props.navigation.navigate('Login')

            }} >
                <Text style={{color:"black",fontSize:18}}>Go To Login</Text>
            </TouchableOpacity>
          </View>
         
        </ImageBackground>
    )
}

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        justifyContent:'center'
    },
    detailviewcontainer:{
        height:160,
        width:'100%',
        borderRadius:20,
        borderWidth:4,
        borderColor:'#17adb3',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        flexDirection:'row'
    },
    btncontainer:{
        width:'100%',
        height:80,
        borderWidth:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:20,
        borderColor:'#17adb3',
        padding:10,
        marginTop:10
    }
})
