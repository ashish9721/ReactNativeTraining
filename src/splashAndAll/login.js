import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity,TextInput,Image,Dimensions,ImageBackground } from 'react-native';
import stringsOfApp from '../translations/local'
import AsyncStorage from '@react-native-community/async-storage';


export default class Login extends React.Component{

   constructor(props){
       super(props)

       this.state={
           fname:'',
           lname:'',
           email:'',
           country:'',
           company:'',
       }
   }

render(){
    return(
        <ImageBackground style={styles.container} source={require('../../assets/newdashboard.jpg')}>
           <View style={styles.detailcontainer}>
           <View style={styles.txtcontainer}>
                    <Text style={styles.innertxtcontainer}>
                        First Name
                    </Text>
                </View>
             <View style={styles.txtcontainer}>
                 <TextInput style={{color:'white',fontSize:18}} placeholder={'Enter Your First Name'} placeholderTextColor="black" 
                 onChangeText={(text)=>{
                     this.setState({
                         fname:text
                     })

                 }}
                 ></TextInput>
             </View>
             <View style={styles.txtcontainer}>
                    <Text style={styles.innertxtcontainer}>
                        Last Name
                    </Text>
                </View>
             <View style={styles.txtcontainer}>
                 <TextInput style={{color:'white',fontSize:18}} placeholder={'Enter Your Last Name'} placeholderTextColor="black"
                 onChangeText={(text)=>{
                    this.setState({
                        lname:text
                    })

                }} ></TextInput>
             </View>
             <View style={styles.txtcontainer}>
                    <Text style={styles.innertxtcontainer}>
                        Email
                    </Text>
                </View>
             <View style={styles.txtcontainer}>
                 <TextInput style={{color:'white',fontSize:18}} placeholder={'Enter Your Email Name'} placeholderTextColor="black"
                 onChangeText={(text)=>{
                    this.setState({
                        email:text
                    })

                }} ></TextInput>
             </View>
             <View style={styles.txtcontainer}>
                    <Text style={styles.innertxtcontainer}>
                        Country
                    </Text>
                </View>
             <View style={styles.txtcontainer}>
                 <TextInput style={{color:'white',fontSize:18}} placeholder={'Enter Your Country Name'} placeholderTextColor="black" 
                 onChangeText={(text)=>{
                    this.setState({
                        country:text
                    })

                }}></TextInput>
             </View>
             <View style={styles.txtcontainer}>
                    <Text style={styles.innertxtcontainer}>
                        Company
                    </Text>
                </View>
             <View style={styles.txtcontainer}>
                 <TextInput style={{color:'white',fontSize:18}} placeholder={'Enter Your Company Name'} placeholderTextColor="black" 
                 onChangeText={(text)=>{
                    this.setState({
                        company:text
                    })

                }}></TextInput>
             </View>
             <TouchableOpacity style={{width:120,height:50,borderRadius:20,borderWidth:2,borderColor:'white',justifyContent:'center',alignItems:'center',margin:10}}
            disable={(this.state.fname==''||this.state.lname==''||this.state.email==''||this.state.country==''||this.state.company=='')?true:false}
            onPress={()=>{
                
           const  fnamePair = ["fname",this.state.fname.toString()]
           const lnamePair = ["lname",this.state.lname.toString()]
           const emailPair = ["email",this.state.email.toString()]
           const countryPair = ["country",this.state.country.toString()]
           const companyPair = ["company",this.state.company.toString()]
              
             try{
                    AsyncStorage.multiSet([fnamePair, lnamePair, emailPair, countryPair, companyPair],(res)=>{
                       console.log("our multi set works properly",res)
                       this.props.navigation.navigate('NewDashboard')
                   })
             }catch(e){
                console.warn("error in multiset in login",e)
             }
            }} >
                <Text style={{color:"white",fontSize:18}}>Submit</Text>
            </TouchableOpacity>
           </View>
        </ImageBackground>
    )
}

}
const styles = StyleSheet.create({
    container:{
        flex:1, 
    },
    detailcontainer:{
        flex:1,
        margin:10,
        borderRadius:20,
        padding:10,
        borderWidth:3,
        borderColor:'white',
        alignItems:'center'
        
    },
    txtcontainer: {
        borderRadius: 5,
        marginTop: 10,
        height: 40,
        width:'100%',
        paddingLeft: 10,
        borderColor:'#f9f9f9',
        borderBottomWidth:2,
        justifyContent:'center',
        margin:10

    },innertxtcontainer: {
        fontSize: 25,
        color: 'white',width:'80%'
    },
})
