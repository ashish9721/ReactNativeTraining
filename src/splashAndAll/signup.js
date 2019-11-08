import React from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import stringsOfApp from '../translations/local'
import AsyncStorage from '@react-native-community/async-storage';
import {
    GoogleSignin, statusCodes,
    GoogleSigninButton
} from '@react-native-community/google-signin';



const { heightofscreen, widthofscreen } = Dimensions.get('window')

export default class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isSigninInProgress: false,
            user: '',
            isSignInBtnClicked: true,
            mytempemailid: '',
            isloadingphoto:false,


            userfname: '',
            userlname: '',
            useremailid: '',
            userid: '',
            userphoto: '',
            userphoneno: '',
            usercountry: '',

            isusercountryavailable: false,
            isuserphonenoavailable: false,
            isuserfnameavailable: false,
            isuserlnameavailable: false,
            isuseremailidavailable: false,
            isuseridavailable: false,
            isuserphotoavailable: false
        }


        GoogleSignin.configure();
    }
    // _signIn = () => {
    //     console.warn("google sign in")

    // }
    signIn = async () => {
        GoogleSignin.configure();
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo }, () => {
                this.setState({
                    user: userInfo.user,
                    isSignInBtnClicked: false
                }, () => {
                    AsyncStorage.setItem("userinfo", JSON.stringify(userInfo.user), () => {
                        console.warn("the set data in storage is :", userInfo.user)

                        console.warn("user info retrieved from google and also set in async")
                    })
                    console.warn("this.state.user.email",this.state.user.email)
                    const userfnamePair = ["userfname", this.state.user.givenName.toString()]
                    const userlnamePair = ["userlname", this.state.user.familyName.toString()]
                    const useremailidPair = ["useremailid", this.state.user.email.toString()]
                    const useridpair = ["userid", this.state.user.id.toString()]
                    const userphotopair = ["userphoto", this.state.user.photo.toString()]
                    AsyncStorage.multiSet([userfnamePair, userlnamePair, useremailidPair, useridpair, userphotopair], () => {
                        console.warn("user data has been set to the storeage")
                        
                    })
                })

            });
            AsyncStorage.getItem("useremailid",(error,result)=>{
                 console.warn("the email id os user is",result)

            })

            AsyncStorage.multiGet(["userfname", "userlname", "useremailid", "userid", "userphoto"], (error, result) => {
               
                this.setState({
                    userfname: result[0][1],
                    userlname: result[1][1],
                    useremailid: result[2][1],
                    userid: result[3][1],
                    userphoto: result[4][1],
                }, () => {
                    console.warn(this.state)
                    this.setState({
                        isuserfnameavailable: true,
                        isuserlnameavailable: true,
                        isuseremailidavailable: true,
                        isuseridavailable: true,
                        isuserphotoavailable: true
                    })
                })
            })

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
       
    };
    getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        this.setState({ currentUser });
    };
    getfbData = () => {

    }

    render() {
        
        return (
            <ImageBackground style={{ flex: 1, justifyContent: 'flex-start', padding: 10, opacity: 0.9 }} source={require('../../assets/bgsignup.jpg')}>
                {this.state.isSignInBtnClicked ?
                    <View style={styles.container} >
                        {/* <TouchableOpacity style={{
                            borderRadius: 20, height: 40, width: 150, borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderTopColor: 'white',
                            borderRightColor: 'white',
                            borderLeftColor: 'white',
                            borderBottomColor: 'white'
                        }}
                            disabled={this.state.user == '' ? true : false}
                            onPress={() => {
                                AsyncStorage.setItem("myemailid", this.state.emailid.toString())
                                this.props.navigation.navigate("Dashboard")
                            }}>
                            <Text style={{ fontSize: 25, color: 'white' }}>Submit</Text>
                        </TouchableOpacity> */}
                        <GoogleSigninButton
                            style={{ width: 200, height: 48 ,borderRadius:10}}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() => { this.signIn() }}
                            disabled={this.state.isSigninInProgress} />
                        <TouchableOpacity style={{
                            borderRadius: 20, padding: 10, marginTop: 10, borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderTopColor: 'white',
                            borderRightColor: 'white',
                            borderLeftColor: 'white',
                            borderBottomColor: 'white'
                        }}
                            onPress={() => {
                                this.getfbData()
                            }}>
                            <Text style={{ fontSize: 25, color: 'white' }}>FaceBook Login</Text>
                        </TouchableOpacity>
                    </View>


                    :



                    <View style={styles.fieldcontainer}>
                        <View style={styles.imagecontainer}>
                            <TouchableOpacity
                                disabled={'true'}
                            >
                                <Image onLoad={() => this.setState({ isloadingphoto: true })}
                                    style={{ width: 100, height: 100, borderRadius: 50, borderColor: 'white', borderWidth: 3, backgroundColor: 'gray' }} source={{ uri: this.state.userphoto }} />
                                {!this.state.isloadingphoto && <Image source={require('../../assets/person.png')} style={{ position: 'absolute', marginLeft: 25, marginTop: 20 }} />}
                            </TouchableOpacity>
                        </View >
                        <View style={styles.fieldtxtandtxtinputcontainer}>
                            <KeyboardAvoidingView behavior="height" enabled="true">
                                <Text style={styles.fieldtxt}>First Name </Text>
                                <TextInput style={styles.fieldtxtinput}
                                    disabled={this.state.isuserfnameavailable}
                                    onSubmitEditing={() => {
                                        console.warn("Uncomment The AsyncStorage Setting Code in onsubmiteditting")
                                        // AsyncStorage.setItem("userfname",this.state.userfname.toString())
                                    }}
                                    placeholderTextColor='white'
                                    placeholder={this.state.isuserfnameavailable ? this.state.userfname : "Enter Your First Name"}
                                    returnKeyType="next"
                                    value={this.state.userfname}
                                    editable={this.state.isuserfnameavailable ? false : true}
                                    onChangeText={(text) => {
                                        this.setState({
                                            userfname: text
                                        })
                                    }} ></TextInput>
                                <Text style={styles.fieldtxt}>Last Name </Text>
                                <TextInput style={styles.fieldtxtinput}
                                    disabled={this.state.isuserfnameavailable}
                                    onSubmitEditing={() => {
                                        console.warn("Uncomment The AsyncStorage Setting Code in onsubmiteditting")
                                        // AsyncStorage.setItem("userfname",this.state.userfname.toString())
                                    }}
                                    placeholderTextColor='white'
                                    placeholder={this.state.isuserfnameavailable ? this.state.userlname : "Enter Your First Name"}
                                    returnKeyType="next"
                                    value={this.state.userlname}
                                    editable={this.state.isuserlnameavailable ? false : true}
                                    onChangeText={(text) => {
                                        this.setState({
                                            userfname: text
                                        })
                                    }} ></TextInput>
                                <Text style={styles.fieldtxt}>Phone No.</Text>
                                <TextInput style={styles.fieldtxtinput}
                                    disabled={this.state.isuserphonenoavailable}
                                    onSubmitEditing={() => {
                                        console.warn("Uncomment The AsyncStorage Setting Code in onsubmiteditting")
                                        // AsyncStorage.setItem("userfname",this.state.userfname.toString())
                                    }}
                                    placeholderTextColor='white'
                                    placeholder={this.state.isuserphonenoavailable ? this.state.userphoneno : "Enter Your Phone Number"}
                                    returnKeyType="next"
                                    value={this.state.userphoneno}
                                    editable={this.state.isuserphonenoavailable ? false : true}
                                    onChangeText={(text) => {
                                        this.setState({
                                            userphoneno: text
                                        })
                                    }} ></TextInput>
                                <Text style={styles.fieldtxt}>Country</Text>
                                <TextInput style={styles.fieldtxtinput}
                                    disabled={this.state.isusercountryavailable}
                                    onSubmitEditing={() => {
                                        console.warn("Uncomment The AsyncStorage Setting Code in onsubmiteditting")
                                        // AsyncStorage.setItem("userfname",this.state.userfname.toString())
                                    }}
                                    placeholderTextColor='white'
                                    placeholder={this.state.isusercountryavailable ? this.state.usercountry : "Enter Your country Name"}
                                    returnKeyType="next"
                                    value={this.state.usercountry}
                                    editable={this.state.isusercountryavailable ? false : true}
                                    onChangeText={(text) => {
                                        this.setState({
                                            usercountry: text
                                        })
                                    }} ></TextInput>
                                <Text style={styles.fieldtxt}>Email Id</Text>
                                <TextInput style={styles.fieldtxtinput}
                                    disabled={this.state.isuseremailidavailable}
                                    onSubmitEditing={() => {
                                        console.warn("Uncomment The AsyncStorage Setting Code in onsubmiteditting")
                                        // AsyncStorage.setItem("userfname",this.state.userfname.toString())
                                    }}
                                    placeholderTextColor='white'
                                    placeholder={this.state.isuseremailidavailable ? this.state.useremailid : "Enter Your email id Number"}
                                    returnKeyType="next"
                                    
                                    editable={this.state.isuseremailidavailable ? false : true}
                                    onChangeText={(text) => {
                                        this.setState({
                                            useremailid: text
                                        })
                                    }} ></TextInput>
                                <TouchableOpacity disabled={(this.state.userfname != '' && this.state.userlname != '' && this.state.userphoneno != '' && this.state.usercountry != '' && this.state.useremailid != '') ? false : true}
                                    style={styles.fieldsubmitButton}
                                    onPress={() => {

                                        const userfnamePair = ["userfname", this.state.userfname.toString()]
                                        const userlnamePair = ["userlname", this.state.userlname.toString()]
                                        const useremailidPair = ["useremailid", this.state.user.email.toString()]
                                        const userphonenopair = ["userphoneno", this.state.userphoneno.toString()]
                                        const usercountrypair = ["usercountry", this.state.usercountry.toString()]
                                        AsyncStorage.multiSet([userfnamePair, userlnamePair, useremailidPair, usercountrypair, userphonenopair,], () => {
                                            console.warn("user data has been set to the storeage now move to dashboard")
                                        })
                                        this.setState({
                                            isSignInBtnClicked:!this.state.isSignInBtnClicked
                                        })
                                        this.props.navigation.navigate('Dashboard')
                                    }}>
                                    <Text style={styles.fieldtxt}>Submit</Text>
                                </TouchableOpacity>
                            </KeyboardAvoidingView>
                        </View>

                    </View>

                }
            </ImageBackground>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderTopColor: 'black',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        borderRadius: 200,
        height: 400,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',

    },
    fieldcontainer: {
        flex: 1,
        // backgroundColor: 'lightblue',
        paddingTop: 10,
        alignItems: 'center'
    },
    fieldtxtandtxtinputcontainer: {
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'white',
        margin: 10,
        alignItems: 'flex-start',
        paddingLeft: 30,
        paddingRight: 30
    },
    fieldtxt: {
        fontSize: 25,
        // marginTop: 20,
        color: 'white',
        padding: 5
    },
    fieldtxtinput: {
        borderRadius: 20,
        color: 'white',
        fontSize: 20,
        // borderWidth: 2,
        borderBottomWidth: 3,
        borderColor: 'white',
        height: 40,
        width: 300,
        padding: 5,
    },
    fieldsubmitButton: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        margin: 10,
        justifyContent: 'center', alignItems: 'center'
    },
    fieldimagecontainer: {

    },
    fieldimage: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        height: 80,
        width: 80,

    }
})