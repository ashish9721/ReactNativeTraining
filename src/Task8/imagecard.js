import React from 'react';
import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class ImageCard extends React.Component {

    constructor() {
        super()
        this.state = {
            istoggle: false,
            showreadtext: "ReadMore",
            downloadimage: false
        }
    }
    toggle = () => {
        console.warn(this.state.istoggle)
        console.log(this.state.istoggle)
        this.setState(
            {
                istoggle: !this.state.istoggle,
                showreadtext: this.state.istoggle ? "ReadMore" : "ReadLess"

            }

        )
        console.warn(this.state.istoggle)
        console.log(this.state.istoggle)
    }
    loadimage = () => {
        this.setState({ downloadimage: true })
        console.warn(this.props.urlToimage);
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.component}>
                    <View style={{height:100,width:200}}> 
                    <Image style={{width:100,height:100}} onLoad={this.loadimage} source={{uri:this.props.urlToimage}} />
                      {
                             !this.state.downloadimage && <Image source={require('../../assets/person.png')} />
                      }

                    </View>
                    
                    {/* <Image onLoad={this.loadimage} style={{ width: 90, height: 90, padding: 10, borderRadius: 5, borderWidth: 1, zIndex: 1, position: "absolute", margintop: 0, marginLeft: 5 }} source={this.state.downloadimage ? { uri: this.props.urlToimage } : require('./assets/person.png')} /> */}
                    <View style={{ justifyContent: 'space-between', backgroundColor: "#ghostwhite", paddingLeft: 20, paddingRight: 20, paddingBottom: 10, marginTop: 60, paddingTop: 40, marginRight: 10, marginLeft: 10, marginBottom: 10, borderRadius: 20, borderWidth: 1 }}>
                        <Text style={{ paddingRight: 5, fontSize: 20 }}> Published At : {this.props.publishedat}</Text>
                        <Text style={{ paddingRight: 5, fontSize: 20 }}> Title:{this.props.title}</Text>

                        <View style={{ width: "100%", backgroundColor: 'lightgreen', }}>
                            <View style={{ padding: 10, backgroundColor: 'gray', borderRadius: 5, borderWidth: 1 }} collapsable={this.state.istoggle}>
                                <Text style={{ fontSize: 18, color: 'white' }} numberOfLines={this.state.istoggle ? 0 : 1}>
                                    description:{this.props.description}
                                </Text>
                                <TouchableOpacity onPress={this.toggle}><Text>{`${this.state.showreadtext}`}</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        );


    }

}

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'ghostwhite',
        paddingTop: 20
    },
    component: {
        width: "95%",
        elevation: 12,
        // height: 400,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: 'gray',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: '#74b9ff',
        shadowOpacity: 0.5,
        justifyContent: 'space-evenly',
    },

})