import React from 'react'
import {View,SafeAreaView, StyleSheet} from 'react-native'
import FlatListTask5 from './flatlisttask5'
import {Header} from './HeaderTask5'
import {Footer} from './footertask5'
import {FloatingButton} from './floatingbuttontask5'
 export default class Task5 extends React.Component{

    static navigationOptions = {
        title: 'Gallery',
      };
    constructor(){
        super()
        this.state={
            headerKeyword:"Gallery"
        }
    }
     render(){
         return(
                <View style={{}}>
                     {/* <Header
                 galleryKeyword = {this.state.headerKeyword}
                 style={styles.headerView}/>  */}
                      <FlatListTask5/>
                      <FloatingButton/>
                     <Footer/>
                </View>
                     
         );
     }
 }

 const styles = StyleSheet.create({
    headerView: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },          
 });