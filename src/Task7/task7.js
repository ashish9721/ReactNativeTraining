import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, SafeAreaView } from 'react-native';
import Card from './card7'
export default class Task7 extends React.Component {
    static navigationOptions = {
        title: 'Task7',
      };

    constructor(props) {
        super(props)
        this.state = {
            fname: '',  
            lname: '',
            email: '',
            model: [],
            // id: new Date().getTime(),
            buttonState: true
        }
    }

    remove = (id) => {
        let arr = this.state.model
        indexToRemove = arr.findIndex(x => x.id == id)
        arr.splice(indexToRemove, 1)
        this.setState({
            model: arr
        })

    }
    clear = () =>{
        this.setState({
            fname:'',
            lname:'',
            email:''
    })
    }
    save = () => {
        let permadol = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            id: this.state.buttonState ? new Date().getTime() : idToEdit,
        }
        let newData = this.state.model;
        if (this.state.buttonState){
        newData.push(permadol)
        this.setState({ model: newData }, () => {
            console.log(this.state.model)

        
        });}else if (!this.state.buttonState){
            newData[indexOfItemToBeEdit] = permadol,
            this.setState({
                model: newData,
                buttonState: true
            })

        }
            this.clear();

            }


    edit = (id) => {
        this.setState({
            buttonState: false
        })
        let arr = this.state.model
        idToEdit = id
        indexOfItemToBeEdit = arr.findIndex(editmodel => editmodel.id == id)
        this.setState({
            fname: arr[indexOfItemToBeEdit].fname,
            lname: arr[indexOfItemToBeEdit].lname,
            email: arr[indexOfItemToBeEdit].email
        });
        let permadol = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            // id: id
        }

    }
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.firstname}>
                    <Text style={styles.firstnametxt}>{"First Name"}</Text>
                </View>
                <TextInput
                value={this.state.fname}
                    ref={ref => this.input = ref}
                    placeholder='First name' style={styles.txtinput} onChangeText={(text) => {
                        this.setState({
                            fname: text
                        })
                    }}></TextInput>
                <View style={styles.firstname}>
                    <Text style={styles.firstnametxt}>
                        Last Name
                    </Text>
                </View>
                <TextInput
                    value={this.state.lname}
                    ref={ref => this.input = ref}
                    placeholder='Last name' style={styles.txtinput} onChangeText={(text) => {
                        this.setState({
                            lname: text
                        })
                    }}></TextInput>
                <View style={styles.firstname}>
                    <Text style={styles.firstnametxt}>
                        Email
</Text>

                </View>
                <TextInput
                    value = {this.state.email}
                    ref={ref => this.input = ref}
                    
                    placeholder='E-mail' style={styles.txtinput} onChangeText={(text) => {

                        this.setState({
                            email: text
                        })
                    }}></TextInput>
                <TouchableOpacity
                disabled={   this.state.fname!=''&& this.state.lname!=''&&this.state.email!='' ? false : true }
                style={styles.touchopacity} onPress={() => {
                    this.save()
                    //  console.warn()
                }}>
                    <Text>{this.state.buttonState ? "Login" : "Save Changes"}</Text>
                </TouchableOpacity>
                <Card 
                    item={
                        this.state.model}
                        edit={this.edit}
                        remove={this.remove}
                    />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'ghostwhite'
    },
    firstname: {
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop: 10,
        height: 40,
        paddingLeft: 10,

    },
    firstnametxt: {
        fontSize: 25,
        color: 'black'
    },
    txtinput: {
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        paddingLeft: 25,
        borderRadius: 50
    },
    touchopacity: {
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

})