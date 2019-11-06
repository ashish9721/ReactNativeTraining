import React from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput,TouchableOpacity,Image,ImageBackground ,Dimensions} from 'react-native';
import stringsOfApp from '../translations/local'
import AsyncStorage from '@react-native-community/async-storage';


const {heightofscreen,widthofscreen}=Dimensions.get('window')

export default class SignUp extends React.Component{

    constructor(props){
        super(props)
        this.setState({
            emailid:'hello'
        })

    }
   

render(){
    return(
        <ImageBackground style={{flex:1,justifyContent:'center',padding:10}} source={require('../../assets/bgsignup.jpg')}>
           <View style={styles.container} >
             
               <TextInput style={{width:250,height:40,borderRadius:20,borderWidth:2,paddingLeft:10,marginBottom:20,color:'white',borderTopColor:'white',
        borderRightColor:'white',
        borderLeftColor:'white',
    borderBottomColor:'white'}} 
               placeholderTextColor={'white'}
                placeholder={"Enter Your Email Here"}
                onChangeText={(text)=>{
                    this.setState({
                        emailid:text
                    })
                }}
                returnKeyType="done"
                onSubmitEditing={()=>{
                      console.warn(this.state.emailid)
                   AsyncStorage.setItem("myemailid",this.state.emailid.toString())
            }}>

               </TextInput>
            
              <TouchableOpacity style={{borderRadius:20,height:40,width:150,borderWidth:2,alignItems:'center',justifyContent:'center',borderTopColor:'white',
        borderRightColor:'white',
        borderLeftColor:'white',
    borderBottomColor:'white'}}
               onPress={()=>{
                //    AsyncStorage.setItem("myemailid",this.state.emailid.toString())
                //    AsyncStorage.setItem("myemailid","hero")
                   this.props.navigation.navigate("Dashboard")}}>
                 <Text style={{fontSize:25,color:'white'}}>Submit</Text>
              </TouchableOpacity>

           </View>
        </ImageBackground>
    )
}

}
const styles = StyleSheet.create({
    container:{
       
        borderWidth:3,
        borderTopColor:'black',
        borderRightColor:'white',
        borderLeftColor:'white',
       borderRadius:200,
        height:400,
        width: "100%",
        justifyContent:'center',
        alignItems:'center',
        
    }
})