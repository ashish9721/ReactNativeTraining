import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import stringsOfApp from '../translations/local'
import AsyncStorage from '@react-native-community/async-storage';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emailid: 'default',
            userfname: '',
            userlname: '',
            useremailid: '',
            userid: '',
            userphoto: '',
            userphoneno: '',
            usercountry: '',
            isloadingphoto:false
        }

        AsyncStorage.multiGet(["userfname", "userlname", "useremailid", "userphoneno", "userphoto","usercountry"],(error,result)=>{
          console.warn("the gettable data is ",result)
          this.setState({
              userfname:result[0][1],
              userlname:result[1][1],
              useremailid:result[2][1],
              userphoneno:result[3][1],
              userphoto:result[4][1],
              usercountry:result[5][1],
           
          })
          
        })
        // AsyncStorage.getItem('myemailid', (error, result) => {
        //     this.setState({
        //         emailid: result
        //     }, () => {
        //         console.log("my async emaild value is:", this.state.emailid)
        //         // console.warn("my async value is ",this.state.emailid)
        //     })
        // })
        // AsyncStorage.getItem("userinfo", (error, result) => {
        //     // console.warn("unparsed data is",result)
        //     console.log("unparsed data is ", result)
        //     //             console.warn("the result is:", JSON.parse(result))
        //     console.log("the parsed data is", JSON.parse(result))
        //     res = JSON.parse(result)
        //     this.setState({
        //         userinfo: res
        //     }, () => {
        //         // console.warn("the userinfo is",this.state.userinfo)
        //         console.log("the state userinfo is", this.state.userinfo)
        //         console.log("username is", this.state.userinfo.name)
        //         console.warn("the username is :", this.state.userinfo.name)
        //     })
        // })

    }
    componentDidMount() {
        AsyncStorage.getItem('myemailid', (error, result) => {
            console.warn("through component did mount the result is", result)

        })

    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/dashboard.jpg')}>
                <View style={styles.detailviewcontainer}>
                    <View style={{width:"100%",justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity
                                disabled={'true'}
                            >
                                <Image onLoad={() => this.setState({ isloadingphoto: true })}
                                    style={{ width: 100, height: 100, borderRadius: 50, borderColor: 'white', borderWidth: 3,  }} source={{ uri: this.state.userphoto }} />
                                {!this.state.isloadingphoto && <Image source={require('../../assets/person.png')} style={{ position: 'absolute', marginLeft: 25, marginTop: 20 }} />}
                            </TouchableOpacity>
                        </View >
                    <View style={styles.innercontainer}>
                        <Text style={{ fontSize: 20, color: 'black', borderRadius: 20, borderColor: 'gray' }}>Name : </Text>
                        <View style={{ borderBottomColor: '#17adb3', borderBottomWidth: 2, justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 20, color: 'black', borderRadius: 20, borderBottomColor: 'white' }}>{this.state.userfname+this.state.userlname}</Text>
                        </View>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={{ fontSize: 20, color: 'black', borderRadius: 20, borderColor: 'gray' }}>Email Id : </Text>
                        <View style={{ borderBottomColor: '#17adb3', borderBottomWidth: 2, justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 20, color: 'black', borderRadius: 20, borderBottomColor: 'white' }}>{this.state.useremailid}</Text>
                        </View>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={{ fontSize: 20, color: 'black', borderRadius: 20, borderColor: 'gray' }}>Phone No. : </Text>
                        <View style={{ borderBottomColor: '#17adb3', borderBottomWidth: 2, justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 20, color: 'black', borderRadius: 20, borderBottomColor: 'white' }}>{this.state.userphoneno}</Text>
                        </View>
                    </View>

                    <View style={styles.innercontainer}>
                        <Text style={{ fontSize: 20, color: 'black', borderRadius: 20, borderColor: 'gray' }}>Country : </Text>
                        <View style={{ borderBottomColor: '#17adb3', borderBottomWidth: 2, justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: 20, color: 'black', borderRadius: 20, borderBottomColor: 'white' }}>{this.state.usercountry}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.btncontainer}>
                    <TouchableOpacity style={{ padding: 5, height: 50, borderRadius: 20, borderWidth: 3, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            AsyncStorage.clear()
                            this.setState({
                                emailid: 'default',
            userfname: '',
            userlname: '',
            useremailid: '',
            userid: '',
            userphoto: '',
            userphoneno: '',
            usercountry: '',
            isloadingphoto:false

                            })

                            console.warn("your storage is cleared and uncomment the tag")
                            this.props.navigation.navigate("SignUp")
                        }}>
                        <Text style={{ color: "black", fontSize: 18 }}>Clear Storage</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5, height: 50, borderRadius: 20, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigation.navigate('Login')
                        }} >
                        <Text style={{ color: "black", fontSize: 18 }}>Go To Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start'
    },
    detailviewcontainer: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#17adb3',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        paddingLeft: 20
    },
    btncontainer: {
        width: '100%',
        height: 80,
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        borderColor: '#17adb3',
        padding: 10,
        marginTop: 10
    },
    innercontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }

})
