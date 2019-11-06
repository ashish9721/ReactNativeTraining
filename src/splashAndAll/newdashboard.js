import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, TextInput, Image, Dimensions, ImageBackground } from 'react-native';
import stringsOfApp from '../translations/local'
import AsyncStorage from '@react-native-community/async-storage';


export default class NewDashboard extends React.Component {



    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: '',
            country: '',
            company: '',
        }
        AsyncStorage.multiGet(["fname", "lname", "email", "country", "company"], (error, result) => {
            console.log("our multi get works properly", result);
            console.log("value of fname is :", result[0][1])
            this.setState({
                fname: result[0][1],
                lname: result[1][1],
                email: result[2][1],
                country: result[3][1],
                company: result[4][1],
            }, () => {
                console.log(this.state.fname, this.state.lname, this.state.email, this.state.country, this.state.company)
            })

        })
        //    console.warn(arr[0][1] 
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/newdashboard.jpg')}>
                <View style={styles.detailcontainer}>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.innertxtcontainer}>
                            First Name
                    </Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={{ fontSize: 20, paddingLeft: 10, color: 'black' }}> {this.state.fname}</Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.innertxtcontainer}>
                            Last Name
                    </Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={{ fontSize: 20, paddingLeft: 10, color: 'black' }}> {this.state.lname}</Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.innertxtcontainer}>
                            Email
                    </Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={{ fontSize: 20, paddingLeft: 10, color: 'black' }}> {this.state.email}</Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.innertxtcontainer}>
                            Country
                    </Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={{ fontSize: 20, paddingLeft: 10, color: 'black' }}> {this.state.country}</Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.innertxtcontainer}>
                            Company
                    </Text>
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={{ fontSize: 20, paddingLeft: 10, color: 'black' }}> {this.state.company}</Text>
                    </View>
                    <View style={styles.btncontainer}>
                        <TouchableOpacity style={{ padding:5, height: 50, borderRadius: 20, marginLeft:10,borderWidth: 2,  borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                this.props.navigation.navigate('Splash')
                            }}>
                            <Text style={{ color: "white", fontSize: 18 }}>Splash</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{  padding:5,height: 50, borderRadius: 20, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                this.props.navigation.navigate('Login')
                            }} >
                            <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{  padding:5,height: 50, borderRadius: 20, borderWidth: 2, marginRight:20,borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                this.props.navigation.navigate('SignUp')

                            }} >
                            <Text style={{ color: "white", fontSize: 18 }}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    detailcontainer: {
        flex: 1,
        margin: 10,
        borderRadius: 20,
        padding: 10,
        borderWidth: 3,
        borderColor: 'white',
        alignItems: 'center'

    },
    txtcontainer: {
        borderRadius: 5,
        marginTop: 10,
        height: 40,
        width: '100%',
        paddingLeft: 10,
        borderColor: 'ghostwhite',
        borderBottomWidth: 2,
        justifyContent: 'center',
        margin: 10

    }, innertxtcontainer: {
        fontSize: 25,
        color: 'white', width: '80%'
    },
    btncontainer: {
        width: '100%',
        height: 80,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        borderColor:'white',
        // borderColor: '#17adb3',
        padding: 10,
        marginTop: 10
    }
})
