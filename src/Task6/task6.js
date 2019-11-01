
import React from 'react';
import {
    FlatList,
    StyleSheet, View, Text, SafeAreaView, ScrollView, Platform, TouchableOpacity, TextInput, Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class Task6 extends React.Component{
    static navigationOptions = {
        title: 'Task6',
      };
    constructor(){
        super()
        this.state={
            imageurl:'https://tse2.mm.bing.net/th?id=OIP.CueuouqUsNzhadxMw7xErwHaFI&pid=Api'
            ,imagepath:'' ,
            isloading:false 
        }
    }
    
    
    render(){
        return(<View style={{justifyContent:'center',alignItems:'center',backgroundColor:'lightblue',flex:1}}>
        <TouchableOpacity style={{backgroundColor:'re#86D5E1d',margin:10,padding:10, borderRadius:50,borderColor:'gray',borderWidth:1}} onPress={()=>{
    
        Platform.OS==='ios'?  ImagePicker.openPicker({
             width:300,
             height:400,
             cropping:true
            }).then(image => {console.log(image)
                this.setState({
                    imagepath:image.path
                })
            console.warn(image.path)
        })
        :   ImagePicker.openCamera({
            width:300,
            height:400,
            cropping:true
           }).then(image => {console.log(image)
               this.setState({
                   imagepath:image.path
               })
           console.warn(image.path)
       })
    
        }}>
            <Image onLoad={()=>this.setState({isloading:true})}
                 style={{width:300,height:300,borderRadius:50,borderColor:'gray',borderWidth:1}}  source={{uri:this.state.imagepath}}/>
                 {!this.state.isloading && <Image source={require('../../assets/person.png')} style={{position:'absolute',justifyContent:'center',alignItems:'center',marginTop:100,marginLeft:130}}/>}
            {/* <View style={{borderRadius:50,width:400,height:400,borderWidth:1,borderColor:'gray'}}> </View> */}
        </TouchableOpacity>
    
    
    
    </View> );
    
    }
    
    
    }