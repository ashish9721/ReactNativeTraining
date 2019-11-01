import React from 'react';
import {
    FlatList,
    StyleSheet, View, Text, SafeAreaView, ScrollView, Platform, TouchableOpacity, TextInput, Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import ImageCard from './imagecard';


export default class Task8 extends React.Component {
    
    constructor() {
        super();
        this.state = {
            imagetoshowonthescreen: require('../../assets/person.png')
        }
    }

    render() {
        return (<View style={styles.container}>
            <TouchableOpacity style={styles.touchablecontainer} onPress={() => {
                this.setState({ imagetoshowonthescreen: { uri: 'https://tse2.mm.bing.net/th?id=OIP.CueuouqUsNzhadxMw7xErwHaFI&pid=Api' } })
            }}>
                <Text style={{fontSize:25}}>Click Me</Text>
                 </TouchableOpacity>
               <ScrollView style={{backgroundColor:'red',width:"100%"}}>
               
               <ImageCard urlToimage={'https://tse2.mm.bing.net/th?id=OIP.CueuouqUsNzhadxMw7xErwHaFI&pid=Api'} title={"title - uhus"} publishedat={"gvngcsdnsvhcdncnvsn"} description={"ghdngcjsfghsecsfvjhdcg fgsgsfjgvjsdfghergsdfjhrf jyfgejsfhefvdhyfghfvjgfhefh"}/>
               <ImageCard urlToimage={'https://images7.alphacoders.com/611/611138.png'} title={"title - uhus"} publishedat={"gvngcsdnsvhcdncnvsn"} description={"ghdngcjsfghsecsfvjhdcg fgsgsfjgvjsdfghergsdfjhrf jyfgejsfhefvdhyfghfvjgfhefh"}/>
               <ImageCard urlToimage={'https://images7.alphacoders.com/611/611138.png'} title={"title - uhus"} publishedat={"gvngcsdnsvhcdncnvsn"} description={"ghdngcjsfghsecsfvjhdcg fgsgsfjgvjsdfghergsdfjhrf jyfgejsfhefvdhyfghfvjgfhefh"}/>
               <ImageCard urlToimage={'https://images7.alphacoders.com/611/611138.png'} title={"title - uhus"} publishedat={"gvngcsdnsvhcdncnvsn"} description={"ghdngcjsfghsecsfvjhdcg fgsgsfjgvjsdfghergsdfjhrf jyfgejsfhefvdhyfghfvjgfhefh"}/>
               <ImageCard urlToimage={'https://images7.alphacoders.com/611/611138.png'} title={"title - uhus"} publishedat={"gvngcsdnsvhcdncnvsn"} description={"ghdngcjsfghsecsfvjhdcg fgsgsfjgvjsdfghergsdfjhrf jyfgejsfhefvdhyfghfvjgfhefh"}/>
              

               </ScrollView>

           
        </View>);
    }
}
// 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',paddingTop:80
    },
    touchablecontainer: {
        width: 300,
        height: 80,
        borderRadius: 50,
        borderWidth: 1,
          justifyContent:'center',
          alignItems:'center'
    }
})

