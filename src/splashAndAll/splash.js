import React from 'react';
import { View, StyleSheet, ScrollView, Animated,Text, LinearGradient,Image,Dimensions,ImageBackground } from 'react-native';
import stringsOfApp from '../translations/local'
const { width, height } = Dimensions.get("window")
export default class Splash extends React.Component{

    // componentDidMount(){
    //     setTimeout( ()=>{
    //         this.props.navigation.navigate("SignUp")
    //     },3000)
    // }
componentDidUpdate(prevprops){
    if(prevprops.isFocused !== this.props.isFocused){
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 4,
            delay: 2500
          }).start();
      
          Animated.timing(this.animatedValue2, {
            toValue: 1,
            delay: 200,
            duration: 3000
          }).start();
  
          setTimeout( ()=>{
                      this.props.navigation.navigate("SignUp")
                  },3200)
    }
}
forceUpdate(){
    Animated.spring(this.animatedValue, {
        toValue: 1,
        friction: 4,
        delay: 2500
      }).start();
  
      Animated.timing(this.animatedValue2, {
        toValue: 1,
        delay: 200,
        duration: 3000
      }).start();

      setTimeout( ()=>{
                  this.props.navigation.navigate("SignUp")
              },3200)
}
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0.5);
        this.animatedValue2 = new Animated.Value(0);
      }
    
      componentDidMount() {
        Animated.spring(this.animatedValue, {
          toValue: 1,
          friction: 4,
          delay: 2500
        }).start();
    
        Animated.timing(this.animatedValue2, {
          toValue: 1,
          delay: 200,
          duration: 3000
        }).start();

        setTimeout( ()=>{
                    this.props.navigation.navigate("SignUp")
                },3200)
      }
    
render(){
    const animatedcontainerstyle = {
        transform: [{ scale: this.animatedValue }]
      };
  
      const scaleText = {
        transform: [{ scale: this.animatedValue2 }]
      };
    return(
        <ImageBackground style={styles.parentcontainer} source={require('../../assets/task2bgphoto.jpg')}>
          
           <Animated.View style={[styles.ring, animatedcontainerstyle]}>
          <Animated.Image
            source={require("../../assets/react-native.png")}
            style={
              {
                resizeMode: "contain",
                width: 200,
                height: 200,
                borderRadius:20,
                borderWidth:2,
                borderColor:'white'
              }
            }
          />
        </Animated.View>

        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 20,
              width: width / 2,
              height: 4,
              backgroundColor: "#fff",
              borderRadius: 2
            },
            scaleText
          ]}
        />
           
        
         
        </ImageBackground>
    )
}

}
// const styles = StyleSheet.create({
    // parentcontainer:{
    //     flex:1,
        
    // }
// })
const styles = StyleSheet.create({
    parentcontainer:{
        flex:1,
        
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    },
    ring: {
      backgroundColor: "#40C4FF",
      borderRadius: 150,
      borderWidth: 2,
      borderColor: "#FFF",
      padding: 7,
      justifyContent:'center',
      alignItems:'center'
    },
    starStyle: {
      width: 100,
      height: 20,
      marginBottom: 20
    }
  });