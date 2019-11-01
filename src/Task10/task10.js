import React from 'react';
import {View,StyleSheet} from 'react-native';

export default class Task10 extends React.Component {
    static navigationOptions = {
        title: 'Task10',
      };
  render() {
    return (
      <View style={Styles.view} >
        <View style={Styles.view1}></View>

        <View style={Styles.view2}>
            <View style={Styles.view4}>
                <View style = {Styles.view5}></View>
            </View>
        </View>
        <View style={Styles.view3}></View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
    view:{
        flex:1,

    },
    view1:{
        flex:0.3,
        backgroundColor:'red',
    },
    view2:{
        flex:0.3,
        backgroundColor:'yellow',
        
    },
    view3:{
        flex:0.3,
        backgroundColor:'blue',

    },
    view4:{
        flex:0.5,
        backgroundColor:'green'
    },
    view5:{
        flex:0.5,
        backgroundColor:'yellow'
    }
})