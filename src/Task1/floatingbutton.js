import React from 'react';
import {View,Image,TouchableOpacity,Text,StyleSheet} from 'react-native';

export const FloatingBtn= ()=> {

    return(
      <View style={styles.container}>
          
           <TouchableOpacity style={styles.viewgallery}>
               <Text style={{color:'#fa9120' ,fontSize:20}} >View Gallery</Text>
           </TouchableOpacity>
           <TouchableOpacity style={ styles.btn} >
           {/* <Image style={{height:90,width:90}} source={require('./assets/floatButtonImage.png')}/> */}
           <Text style={{fontSize:0 ,color:'white',fontSize:40}}>+</Text>
           </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
container:{
    // backgroundColor:'red',
    opacity:0.8,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    height:70,
    marginBottom:15
},
viewgallery:{
    left:15 ,
    height:35,
    width:130,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'lightgray',
    color: 'white',
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
    shadowOpacity:0.5,
    shadowOffset:{height:12,width:5}
    },
btn:{ 
    height:50,
    width:50,
    right:15 ,
     backgroundColor:'#fa9120',
     borderRadius:50,
     justifyContent:'center',
     alignItems:'center',
     elevation:5,
     shadowOpacity:0.5,
     shadowOffset:{height:5,width:4}
    } 

})

