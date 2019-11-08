import React from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import stringsOfApp from '../translations/local'
import AsyncStorage from '@react-native-community/async-storage';
import {
    GoogleSignin, statusCodes,
    GoogleSigninButton
} from '@react-native-community/google-signin';

export default FieldScreen = (props)=>{
    return(
    <View style={styles.fieldcontainer}>
        <View style={styles.imagecontainer}>
            <TouchableOpacity
            disabled={'true'} 
            >
                <Image onLoad={() => this.setState({ isloading: true })}
                    style={{ width: 100, height: 100, borderRadius: 50, borderColor: 'white', borderWidth: 3,backgroundColor:'gray' }} source={{ uri: this.state.imagepath }} />
                {!this.state.isloading && <Image source={require('../../assets/person.png')} style={{ position: 'absolute', marginLeft: 25, marginTop: 20 }} />}
            </TouchableOpacity>
        </View >
        <View style={styles.fieldtxtandtxtinputcontainer}>
            <Text style={styles.fieldtxt}>Name </Text>
            <TextInput style={styles.fieldtxtinput}
                onSubmitEditing={() => {
                    this.setState({
                        firstname: this.state.firstname
                    })
                    this.secondTextInput.focus();
                }}
                returnKeyType="next" value={this.state.firstname}
                onChangeText={(text) => {
                    this.setState({
                        firstname: text
                    })
                }} ></TextInput>
            <Text style={styles.fieldtxt}>Email </Text>
            <TextInput 
            
            returnKeyType='done'
                ref={(input) => { this.secondTextInput = input; }}
                style={styles.fieldtxtinput} value={this.state.lastname}
                onChangeText={(text) => {
                    this.setState({
                        lastname: text
                    })
                }}

                onSubmitEditing={(text) => {
                    this.setState({
                        lastname: this.state.lastname
                    })
                    { !(this.state.firstname != '' && this.state.lastname != '' ? false : true) && this.runThroughDone() }

                }}
            ></TextInput>
             <Text style={styles.fieldtxt}>Phone No.</Text>
            <TextInput 
           
            returnKeyType='done'
                ref={(input) => { this.secondTextInput = input; }}
                style={styles.fieldtxtinput} value={this.state.lastname}
                onChangeText={(text) => {
                    this.setState({
                        lastname: text
                    })
                }}

                onSubmitEditing={(text) => {
                    this.setState({
                        lastname: this.state.lastname
                    })
                    { !(this.state.firstname != '' && this.state.lastname != '' ? false : true) && this.runThroughDone() }

                }}
            ></TextInput>
             <Text style={styles.fieldtxt}>Country</Text>
            <TextInput 
            
            returnKeyType='done'
                ref={(input) => { this.secondTextInput = input; }}
                style={styles.fieldtxtinput} value={this.state.lastname}
                onChangeText={(text) => {
                    this.setState({
                        lastname: text
                    })
                }}

                onSubmitEditing={(text) => {
                    this.setState({
                        lastname: this.state.lastname
                    })
                    { !(this.state.firstname != '' && this.state.lastname != '' ? false : true) && this.runThroughDone() }

                }}
            ></TextInput>
            <TouchableOpacity disabled={this.state.firstname != '' && this.state.lastname != '' ? false : true}
                style={styles.fieldsubmitButton}
                onPress={() => {
                    this.props.navigation.state.params.updatemethod(this.state.firstname.trim(), this.state.lastname.trim(), this.state.imagepath)
                    this.props.navigation.navigate('Home')
                }}>
                <Text style={styles.fieldtxt}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
)
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
        marginTop: 20,
        color:'white',
        padding:5
    },
    fieldtxtinput: {
        borderRadius: 20,
        // borderWidth: 2,
        borderBottomWidth:3,
        borderColor: 'white',
        height: 40,
        width: 300,
        padding: 10,
    },
    fieldsubmitButton: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        margin: 10,
        justifyContent:'center',alignItems:'center'
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