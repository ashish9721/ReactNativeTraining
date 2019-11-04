import React from 'react';
import { View, StyleSheet, Linking,TouchableOpacity, Alert,Text, TextInput, Image } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';


export default class Edit extends React.Component {
    PermissionStatus = 'unavailable' | 'denied' | 'blocked' | 'granted';




    constructor(props) {
        super(props)
        this.state = {
            firstname: this.props.navigation.state.params.firstnameofuser,
            lastname: this.props.navigation.state.params.lastnameofuser,
            imagepath: '',
            isloading: false
        }
    }
    componentWillMount() {
        console.log(this.props)
        console.warn(this.props)
    }
    Checking = () => {
        check(PERMISSIONS.IOS.PHOTO_LIBRARY)
            .then(result => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                            console.warn('This feature is not available (on this device / in this context)')

                        console.log(
                            'This feature is not available (on this device / in this context)',
                        );
                        break;
                    case RESULTS.DENIED:
                        Alert.alert(
                            'Permission Denied',
                            'Please Allow Permission From Setting' ,
                            [
                              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                              {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              },
                              {text: 'OK', onPress: () => {
                                console.warn("opening Settings")  
                                Linking.openSettings()}},
                            ],
                            {cancelable: false},
                          ); 
                                                 console.warn('The permission has not been requested / is denied but requestable')
                        console.log(
                            'The permission has not been requested / is denied but requestable',
                        );
                        break;
                    case RESULTS.GRANTED:
                            console.warn('The permission is granted')
                             this.picker()
                        console.log('The permission is granted');
                        break;
                    case RESULTS.BLOCKED:
                            Alert.alert(
                                'Permission Denied',
                                'Please Allow Permission From Setting' ,
                                [
                                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                  {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                  },
                                  {text: 'OK', onPress: () => {
                                    console.warn("opening Settings")  
                                    Linking.openSettings()}},
                                ],
                                {cancelable: false},
                              );
                            // request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
                            //     // …
                            //     console.warn('initially permission was blocked but again requesting has been initiated')
                            // });
                        console.log('The permission is denied and not requestable anymore');
                        break;
                }
            })
            .catch(error => {
                // …
            });

            
    }

    picker=()=>{
        Platform.OS === 'ios' ? ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image)
            this.setState({
                imagepath: image.path
            })
            console.warn(image.path)
        })
            : ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true
            }).then(image => {
                console.log(image)
                this.setState({
                    imagepath: image.path
                })
                console.warn(image.path)
            })
    }

    render() {
        const { navigation } = this.props;
        return (<View style={styles.container}>

            <View style={styles.imagecontainer}>
                <TouchableOpacity onPress={() => {
                   this.Checking()            
                }
                }>
                    <Image onLoad={() => this.setState({ isloading: true })}
                        style={{ width: 100, height: 100, borderRadius: 50, borderColor: 'white', borderWidth: 3 }} source={{ uri: this.state.imagepath }} />
                    {!this.state.isloading && <Image source={require('./assets/person.png')} style={{ position: 'absolute', marginLeft: 25, marginTop: 20 }} />}

                </TouchableOpacity>
            </View >



            <View style={styles.txtandtxtinputcontainer}>
                <Text style={styles.txt}> Enter Your first Name: </Text>
                <TextInput style={styles.txtinput}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    returnKeyType="next" value={this.state.firstname}
                    onChangeText={(text) => {
                        this.setState({
                            firstname: text
                        })
                    }} ></TextInput>
                <Text style={styles.txt}> Enter Your last Name </Text>
                <TextInput returnKeyType='next' ref={(input) => { this.secondTextInput = input; }} style={styles.txtinput} value={this.state.lastname} onChangeText={(text) => {
                    this.setState({
                        lastname: text
                    })
                }}></TextInput>
                <TouchableOpacity disabled={this.state.firstname != '' && this.state.lastname != '' ? false : true}
                    style={styles.submitButton}
                    onPress={() => {
                        this.props.navigation.state.params.updatemethod(this.state.firstname, this.state.lastname, this.state.imagepath)
                        this.props.navigation.navigate('Home')
                    }}>
                    <Text style={styles.txt}> Submit </Text>
                </TouchableOpacity>

            </View>


        </View>


        );
    }



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: 10,
        alignItems: 'center'
    },
    txtandtxtinputcontainer: {
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'white',
        margin: 10,
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    txt: {
        fontSize: 25,
        margin: 10
    },
    txtinput: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        height: 40,
        width: 300,
        padding: 10,
    },
    submitButton: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        margin: 10
    },
    imagecontainer: {

    },
    image: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        height: 80,
        width: 80,

    }


}

)